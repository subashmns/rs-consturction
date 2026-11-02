import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { services, site, image } from "@/lib/site";
import { Reveal, ImageReveal } from "@/components/motion";
import { ContactBand } from "@/components/home-sections";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "Construction & Renovation Services", description: `Explore home construction, renovation, civil work, interiors, elevation, plan approval and estimation services in ${site.city}.`, path: "/services" });

export default function ServicesPage() {
  return <>
    <section className="page-hero services-hero"><div className="container site-container"><div className="page-hero-copy"><span className="eyebrow eyebrow-light">OUR SERVICES</span><h1>Everything your<br />project <em>needs.</em></h1><p>Practical support from early planning through the finishing details, all shaped around your project.</p><span className="page-hero-location">CONSTRUCTION · RENOVATION · INTERIORS</span></div><div className="page-hero-image"><ImageReveal src={image("photo-1600585154340-be6161a56a0c", 1500)} alt="Contemporary house with a considered exterior and garden" priority /></div></div></section>
    <section className="services-detail-list"><div className="container site-container">{services.map((service, i) => <Reveal key={service.title}><article className={`service-detail ${i % 2 ? "service-detail-reverse" : ""}`} id={service.title.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}><div className="service-detail-image"><ImageReveal src={service.image} alt={`Architectural visual reference for ${service.title}`} /><span className="service-detail-index">0{i + 1}</span></div><div className="service-detail-copy"><span className="eyebrow">RS CONSTRUCTION · TIRUNELVELI</span><h2>{service.title}</h2><p>{service.description}</p><ul className="check-list">{service.benefits.map(b => <li key={b}><Check size={16} /> {b}</li>)}</ul><Link className="button button-dark" href={`/contact?service=${encodeURIComponent(service.title)}`}>Enquire about {service.title} <ArrowUpRight size={16} /></Link></div></article></Reveal>)}</div></section>
    <ContactBand />
  </>;
}
