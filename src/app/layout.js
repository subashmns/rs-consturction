import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp";
import MotionConfigProvider from "@/components/motion-config";
import { site } from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: `${site.name} | Building Your Dreams`, template: `%s | ${site.name}` },
  description: `Construction, renovation and interior services in ${site.city}, ${site.region}. Plan your next project with RS Construction.`,
  openGraph: { type: "website", locale: "en_IN", siteName: site.name, title: `${site.name} | Building Your Dreams`, description: `Thoughtful construction and renovation services in ${site.city}, ${site.region}.`, ...(siteUrl ? { images: [{ url: `${siteUrl}/images/rs-construction-logo.png`, alt: "RS Construction — Building Your Dreams" }] } : {}) },
  twitter: { card: "summary_large_image", title: `${site.name} | Building Your Dreams`, description: `Thoughtful construction and renovation services in ${site.city}, ${site.region}.`, ...(siteUrl ? { images: [`${siteUrl}/images/rs-construction-logo.png`] } : {}) },
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: site.name,
    description: `Construction, renovation and interior services in ${site.city}, ${site.region}.`,
    slogan: site.tagline,
    address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: site.region, addressCountry: "IN" },
    areaServed: { "@type": "City", name: site.city },
    url: process.env.NEXT_PUBLIC_SITE_URL || undefined,
    telephone: site.phone || undefined,
    email: site.email || undefined,
  };
  return <html lang="en-IN" data-scroll-behavior="smooth"><body><a className="skip-link" href="#content">Skip to content</a><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><MotionConfigProvider><Navbar /><main id="content">{children}</main><Footer /><WhatsAppButton /></MotionConfigProvider></body></html>;
}
