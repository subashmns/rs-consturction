import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function ButtonLink({ href, children, variant = "gold", arrow = true, className = "" }) {
  return <Link href={href} className={`button button-${variant} ${className}`}>{children}{arrow && <ArrowUpRight size={16} />}</Link>;
}

export function SectionHeading({ eyebrow, title, text, light = false, action }) {
  return <div className={`section-heading ${light ? "heading-light" : ""}`}>
    <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
    {action && <Link className="text-link" href={action.href}>{action.label} <ArrowRight size={16} /></Link>}
  </div>;
}

export function ServiceCard({ service, index = 0, compact = false }) {
  return <article className={`service-card ${compact ? "service-row" : ""}`}>
    <Link className="service-image" href="/services" tabIndex={-1} aria-hidden="true"><Image src={service.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" unoptimized /><span className="service-number">0{index + 1}</span></Link>
    <div className="service-card-body"><h3><Link href="/services">{service.title}</Link></h3><p>{service.description}</p><Link className="text-link" href="/contact">Discuss this service <ArrowRight size={15} /></Link></div>
  </article>;
}

export function ProjectCard({ project, index = 0 }) {
  return <article className="project-card">
    <div className="project-photo"><Image src={project.image} alt={`Illustrative architectural image for ${project.title}`} fill sizes="(max-width: 768px) 100vw, 33vw" unoptimized /><span className="project-type">{project.category}</span><span className="project-visual-label">Visual reference</span></div>
    <div className="project-card-body"><div><span className="project-index">0{index + 1}</span><h3>{project.title}</h3></div><p>{project.description}</p></div>
  </article>;
}
