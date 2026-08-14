import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, "dist");
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4322;
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

    const DATA_DIR = path.join(__dirname, "data");
    const JSONL_FILE = path.join(DATA_DIR, "signatures.jsonl");
    const CSV_FILE = path.join(DATA_DIR, "signatures.csv");

    function ensureDataDir() {
      if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    function getLocalSignatures() {
      ensureDataDir();
      if (!fs.existsSync(JSONL_FILE)) return [];
      try {
        const content = fs.readFileSync(JSONL_FILE, "utf-8");
        return content.split("\n").filter((l) => l.trim().length > 0).map((l) => JSON.parse(l));
      } catch (e) {
        return [];
      }
    }

    // Dynamic API endpoint for submitting signature
    if (urlPath === "/api/sign" && req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => { body += chunk; });
      req.on("end", async () => {
        try {
          const data = JSON.parse(body);
          const { first_name, last_name, email, zip_code, relationship_upns, ucla_affiliation, comments, display_publicly, hp_field } = data;

          if (hp_field) {
            res.writeHead(200, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
            res.end(JSON.stringify({ success: true, bot: true }));
            return;
          }

          if (!first_name || !last_name || !email || !zip_code || !relationship_upns || !ucla_affiliation) {
            res.writeHead(400, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
            res.end(JSON.stringify({ success: false, error: "Please fill in all required fields." }));
            return;
          }

          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            res.writeHead(400, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
            res.end(JSON.stringify({ success: false, error: "Please enter a valid email address." }));
            return;
          }

          ensureDataDir();
          const emailNorm = email.trim().toLowerCase();
          const existing = getLocalSignatures();
          const alreadySigned = existing.some((s) => s.email.trim().toLowerCase() === emailNorm);

          const record = {
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            timestamp: new Date().toISOString(),
            first_name: first_name.trim(),
            last_name: last_name.trim(),
            email: emailNorm,
            zip_code: zip_code.trim(),
            relationship_upns: relationship_upns.trim(),
            ucla_affiliation: ucla_affiliation.trim(),
            comments: (comments || "").trim(),
            display_publicly: display_publicly !== false,
          };

          if (!alreadySigned) {
            // Append to JSONL
            fs.appendFileSync(JSONL_FILE, JSON.stringify(record) + "\n", "utf-8");

            // Append to CSV
            const csvExists = fs.existsSync(CSV_FILE);
            if (!csvExists) {
              fs.writeFileSync(
                CSV_FILE,
                '"Timestamp","First Name","Last Name","Email","ZIP Code","Relationship to UPNS","UCLA Affiliation","Comments","Display Publicly"\n',
                "utf-8"
              );
            }
            const escapeCsv = (str) => `"${(str || "").replace(/"/g, '""')}"`;
            const csvLine = [
              escapeCsv(record.timestamp),
              escapeCsv(record.first_name),
              escapeCsv(record.last_name),
              escapeCsv(record.email),
              escapeCsv(record.zip_code),
              escapeCsv(record.relationship_upns),
              escapeCsv(record.ucla_affiliation),
              escapeCsv(record.comments),
              escapeCsv(record.display_publicly ? "Yes" : "No"),
            ].join(",") + "\n";
            fs.appendFileSync(CSV_FILE, csvLine, "utf-8");

            // Forward to Google Sheet Webhook if configured
            const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
            if (webhookUrl) {
              fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(record),
              }).catch((e) => console.error("Google Sheet webhook error:", e));
            }
          }

          const baseCount = parseInt(process.env.INITIAL_SIGNATURE_COUNT || "0", 10) || 0;
          const totalCount = getLocalSignatures().length + baseCount;

          res.writeHead(200, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
          res.end(JSON.stringify({
            success: true,
            isNew: !alreadySigned,
            total_signatures: totalCount,
            message: "Signature recorded successfully!",
          }));
        } catch (err) {
          res.writeHead(500, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
          res.end(JSON.stringify({ success: false, error: err.message }));
        }
      });
      return;
    }

    // Dynamic API endpoint for stories
    if (urlPath === "/api/stories") {
      const signatures = getLocalSignatures();
      const stories = signatures
        .filter((s) => s.comments && s.comments.trim().length > 0 && s.display_publicly !== false)
        .map((s) => {
          const lastInitial = s.last_name ? `${s.last_name.trim()[0].toUpperCase()}.` : "";
          const author = `${s.first_name.trim()} ${lastInitial}`.trim();
          return {
            id: s.id,
            author,
            relationship_upns: s.relationship_upns,
            ucla_affiliation: s.ucla_affiliation,
            comments: s.comments,
            timestamp: s.timestamp,
          };
        })
        .reverse();

      res.writeHead(200, {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*",
      });
      res.end(JSON.stringify({ stories }));
      return;
    }

    // Dynamic API endpoint for signature count
    if (urlPath === "/api/signatures") {
      const baseCount = parseInt(process.env.INITIAL_SIGNATURE_COUNT || "0", 10) || 0;
      const count = getLocalSignatures().length + baseCount;
      res.writeHead(200, {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*",
      });
      res.end(JSON.stringify({ total_signatures: count }));
      return;
    }

    // Dynamic API endpoint for admin signatures JSON
    if (urlPath === "/api/admin-signatures" && req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => { body += chunk; });
      req.on("end", () => {
        try {
          const data = JSON.parse(body);
          const adminPass = process.env.ADMIN_PASSWORD || "saveUPNS2026!";
          if (data.password !== adminPass) {
            res.writeHead(401, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
            res.end(JSON.stringify({ success: false, error: "Invalid password" }));
            return;
          }
          const signatures = getLocalSignatures();
          res.writeHead(200, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
          res.end(JSON.stringify({ success: true, signatures }));
        } catch (e) {
          res.writeHead(500, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
          res.end(JSON.stringify({ success: false, error: e.message }));
        }
      });
      return;
    }

    // Dynamic API endpoint for exporting signatures as CSV (Password protected)
    if (urlPath === "/api/export" || urlPath === "/api/export-csv") {
      const parsedUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
      const passParam = parsedUrl.searchParams.get("pass") || parsedUrl.searchParams.get("password") || parsedUrl.searchParams.get("key");
      const authHeader = req.headers["authorization"];
      const bearerToken = authHeader && authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
      const adminPass = process.env.ADMIN_PASSWORD || "saveUPNS2026!";

      if (passParam !== adminPass && bearerToken !== adminPass) {
        res.writeHead(401, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
        res.end(JSON.stringify({ error: "Unauthorized. Password required. Example: /api/export?pass=saveUPNS2026!" }));
        return;
      }

      ensureDataDir();
      let csvContent = '"Timestamp","First Name","Last Name","Email","ZIP Code","Relationship to UPNS","UCLA Affiliation","Comments","Display Publicly"\n';
      if (fs.existsSync(CSV_FILE)) {
        csvContent = fs.readFileSync(CSV_FILE, "utf-8");
      }
      const filename = `save-upns-signatures-${new Date().toISOString().slice(0, 10)}.csv`;
      res.writeHead(200, {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*",
      });
      res.end(csvContent);
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
