export function assetPath(path: string) {
  if (path === "/") return "./";
  return path.startsWith("/") ? `.${path}` : `./${path}`;
}

export function siteUrl(path: string) {
  const siteUrlBase = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const origin = new URL(siteUrlBase).origin;

  if (path === "/") {
    return `${origin}${basePath || "/"}`;
  }

  return `${origin}${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
