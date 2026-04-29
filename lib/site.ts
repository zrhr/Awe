export function sitePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  if (!basePath) return path;
  if (path === "/") return basePath || "/";

  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

export function siteUrl(path: string) {
  const siteUrlBase = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const origin = new URL(siteUrlBase).origin;

  return `${origin}${sitePath(path)}`;
}
