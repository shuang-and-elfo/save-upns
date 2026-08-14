import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, "dist");
const PORT = 4321;
const HOST = "0.0.0.0";

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

let cachedCount = null;
let lastFetched = 0;
const CACHE_TTL_MS = 60 * 1000;

const server = http.createServer(async (req, res) => {
  try {
    let urlPath = new URL(req.url, `http://${req.headers.host || "localhost"}`).pathname;
    if (urlPath.startsWith("/upns-website")) {
      urlPath = urlPath.slice("/upns-website".length) || "/";
    }

    // Dynamic API endpoint for signatures
    if (urlPath === "/api/signatures") {
      const apiKey = process.env.ACTION_NETWORK_API_KEY;
      const petitionId = process.env.ACTION_NETWORK_PETITION_ID;
      const now = Date.now();

      if (cachedCount !== null && now - lastFetched < CACHE_TTL_MS) {
        res.writeHead(200, {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=30",
          "Access-Control-Allow-Origin": "*",
        });
        res.end(JSON.stringify({ total_signatures: cachedCount, cached: true }));
        return;
      }

      if (!apiKey || !petitionId) {
        res.writeHead(200, {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        });
        res.end(JSON.stringify({ total_signatures: null, message: "Not configured" }));
        return;
      }

      try {
        const url = petitionId.startsWith("http")
          ? petitionId
          : `https://actionnetwork.org/api/v2/petitions/${petitionId}`;

        const apiRes = await fetch(url, {
          headers: { "OSDI-API-Token": apiKey, "Accept": "application/json" },
        });
        const data = await apiRes.json();
        const count = data.total_signatures ?? data.total_submissions ?? null;
        if (typeof count === "number") {
          cachedCount = count;
          lastFetched = now;
        }
        res.writeHead(200, {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=30",
          "Access-Control-Allow-Origin": "*",
        });
        res.end(JSON.stringify({ total_signatures: count }));
      } catch (err) {
        res.writeHead(200, {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        });
        res.end(JSON.stringify({ total_signatures: cachedCount, error: err.message }));
      }
      return;
    }

    let filePath = path.join(DIST_DIR, urlPath);

    // Security check against directory traversal
    if (!filePath.startsWith(DIST_DIR)) {
      res.writeHead(403, { "Content-Type": "text/plain" });
      res.end("403 Forbidden");
      return;
    }

    // Check if path is a directory or needs index.html
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, "index.html");
    } else if (!fs.existsSync(filePath) && !path.extname(filePath)) {
      filePath = filePath + "/index.html";
    }

    // Fallback to 404.html if file doesn't exist
    if (!fs.existsSync(filePath)) {
      const notFoundPath = path.join(DIST_DIR, "404.html");
      if (fs.existsSync(notFoundPath)) {
        res.writeHead(404, { "Content-Type": MIME_TYPES[".html"] });
        res.end(fs.readFileSync(notFoundPath));
        return;
      }
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    res.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Origin": "*",
    });
    res.end(fs.readFileSync(filePath));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("500 Internal Server Error");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`
============================================================
  UPNS Static Preview Server Live!
  Listening on: http://${HOST}:${PORT}/
  Serving directory: ${DIST_DIR}
  All hostnames (including Cloudtop proxy.googlers.com) allowed!
============================================================
`);
});
