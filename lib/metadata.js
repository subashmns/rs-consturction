import { site, siteUrl } from "@/lib/site";

export function pageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", locale: "en_IN", siteName: site.name, title: `${title} | ${site.name}`, description, url: path, images: [{ url: `${siteUrl}/images/rs-construction-logo.png`, alt: "RS Construction — Building Your Dreams" }] },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description, images: [`${siteUrl}/images/rs-construction-logo.png`] },
  };
}
