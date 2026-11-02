const routes = ["", "/about", "/services", "/projects", "/contact"];

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  if (!base) return [];
  return routes.map((route, index) => ({ url: `${base}${route || "/"}`, lastModified: new Date(), changeFrequency: index === 0 ? "weekly" : "monthly", priority: index === 0 ? 1 : 0.7 }));
}
