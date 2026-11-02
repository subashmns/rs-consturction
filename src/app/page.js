import { HomeHero, ProofStrip, AboutPreview, ServicesSection, FeaturedProjects, WhyChoose, ProcessSection, PromiseSection, ContactBand } from "@/components/home-sections";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "Construction Company in Tirunelveli", description: "Plan your home construction, renovation or interiors with RS Construction in Tirunelveli, Tamil Nadu. Explore services and start a project enquiry.", path: "/" });

export default function HomePage() {
  return <div className="home-page"><HomeHero /><ProofStrip /><AboutPreview /><ServicesSection /><FeaturedProjects /><WhyChoose /><ProcessSection /><PromiseSection /><ContactBand /></div>;
}
