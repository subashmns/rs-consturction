import { siteUrl } from "@/lib/site";

const routes = ["", "/about", "/services", "/projects", "/contact"];

export default function sitemap() {
  return routes.map((route, index) => ({ url: `${siteUrl}${route || "/"}`, lastModified: new Date(), changeFrequency: index === 0 ? "weekly" : "monthly", priority: index === 0 ? 1 : 0.7 }));
}
