/**
 * Prefix a URL path with the configured Astro base path (e.g. '/upns-website').
 * Ensures single slashes and works across both GitHub Pages subpath and root domain deployments.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${normalizedBase}${cleanPath}`;
}
