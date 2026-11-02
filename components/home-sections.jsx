import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Compass, DraftingCompass, Hammer, MapPin, MoveRight, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { services, projects, image, site } from "@/lib/site";
import { Reveal, HeroMotion, ImageReveal } from "@/components/motion";
import HeroCarousel from "@/components/hero-carousel";
import { ButtonLink, SectionHeading, ServiceCard } from "@/components/ui";
import ProjectCarousel from "@/components/project-carousel";

export function HomeHero() {
  return <section className="hero-section">
    <div className="container site-container hero-layout">
      <div className="hero-copy">
        <HeroMotion><span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> CONSTRUCTION · TIRUNELVELI</span></HeroMotion>
        <HeroMotion delay={0.08}><h1>Building<br /><em>Your Dreams.</em></h1></HeroMotion>
        <HeroMotion delay={0.16}><p>From the first plan to the final finish, thoughtful building starts with a team that listens. Let’s shape a space that feels like yours.</p></HeroMotion>
      <HeroMotion delay={0.24}><div className="hero-actions"><ButtonLink href="/contact">Get a free consultation</ButtonLink><ButtonLink href="/services" variant="outline-light" arrow={false}>Explore services <ArrowRight size={16} /></ButtonLink></div></HeroMotion>
        <HeroMotion delay={0.32}><div className="hero-note"><span className="hero-note-icon"><MapPin size={16} /></span><span>Locally focused<br /><strong>{site.city}, {site.region}</strong></span></div></HeroMotion>
      </div>
      <div className="hero-visual-wrap"><HeroCarousel /><div className="hero-photo-shade" />
      </div>
    </div>
  </section>;
}

export function ProofStrip() {
  const facts = [
    { number: "01", title: "7 construction services", detail: "New builds, renovations, interiors and more." },
    { number: "02", title: "Serving Tirunelveli", detail: "Local construction support in the area." },
    { number: "03", title: "Plan through finish", detail: "Guidance for each stage of your project." },
    { number: "04", title: "Clear next steps", detail: "Know what to expect as work moves ahead." },
  ];
  return <section className="proof-strip" aria-label="How RS Construction supports projects"><div className="container site-container proof-grid">{facts.map((item, i) => <Reveal key={item.number} delay={i * .06}><div className="proof-item"><span className="proof-number">{item.number}</span><div><strong>{item.title}</strong><span>{item.detail}</span></div></div></Reveal>)}</div></section>;
}

export function AboutPreview() {
  return <section className="section-pad about-preview" id="intro"><div className="container site-container"><div className="row align-items-center g-5">
    <Reveal className="col-lg-6"><div className="about-photo-frame"><ImageReveal src={image("photo-1600566753086-00f18fb6b3ea", 1200)} alt="Modern residential architecture framed by a landscaped garden" /><div className="about-photo-tag"><span>OUR APPROACH</span><strong>One home.<br />Your way.</strong><ArrowUpRight size={17} /></div><div className="about-photo-outline" /></div></Reveal>
    <Reveal className="col-lg-5 offset-lg-1" delay={.12}><span className="eyebrow">ABOUT RS CONSTRUCTION</span><h2 className="display-heading">Your trusted<br />construction<br /><em>partner.</em></h2><p className="lead-copy">A building project is a big decision. We bring construction, renovation and design support together with clear conversations from the very first step.</p><ul className="check-list"><li><Check size={16} /> A practical plan before work begins</li><li><Check size={16} /> Thoughtful material and finish choices</li><li><Check size={16} /> Support shaped around your needs</li></ul><ButtonLink href="/about" variant="dark">Get to know us</ButtonLink></Reveal>
  </div></div></section>;
}

export function ServicesSection() {
  return <section className="section-pad services-section"><div className="container site-container"><Reveal><SectionHeading eyebrow="WHAT WE DO" title="Complete construction solutions" text="The right kind of support for your next step, whether you’re starting fresh or improving what you have." action={{ href: "/services", label: "All services" }} /></Reveal><div className="row g-4 service-grid">{services.slice(0, 6).map((service, i) => <Reveal key={service.title} delay={(i % 3) * .06} className="col-md-6 col-xl-4"><ServiceCard service={service} index={i} /></Reveal>)}</div><div className="service-more"><span>Need a detailed estimate?</span><Link href="/contact">Let’s talk about your scope <ArrowRight size={15} /></Link></div></div></section>;
}

export function FeaturedProjects() {
  return <section className="section-pad projects-section"><div className="container site-container"><Reveal><SectionHeading eyebrow="A FEEL FOR WHAT’S POSSIBLE" title="Spaces to call your own" text="Explore the kinds of spaces we can help you plan and shape. These images are visual references, not completed RS Construction projects." light action={{ href: "/projects", label: "View project gallery" }} /></Reveal><ProjectCarousel projects={projects.slice(0, 3)} label="Featured RS Construction visual references" /><p className="project-disclaimer"><span>CONCEPTUAL IMAGERY</span> Real project photography and verified project information can be added as they become available.</p></div></section>;
}

export function WhyChoose() {
  const items = [{ icon: <Sparkles />, title: "Built around you", text: "Your priorities shape the plan, the details and the way we work together." }, { icon: <ShieldCheck />, title: "Clarity at each step", text: "Know what comes next, what decisions matter and where things stand." }, { icon: <Wrench />, title: "Quality in the details", text: "A considered finish begins with care in every part of the work." }, { icon: <MapPin />, title: "A local perspective", text: "A construction partner based in Tirunelveli, Tamil Nadu." }];
  return <section className="section-pad why-section"><div className="container site-container"><div className="row g-5 align-items-start"><Reveal className="col-lg-5"><span className="eyebrow">WHY BUILD WITH US</span><h2 className="display-heading">Good work<br />starts with<br /><em>good people.</em></h2><p className="lead-copy">Choosing a construction partner should feel considered and straightforward. We want every conversation to leave you clearer about your next step.</p><ButtonLink href="/about" variant="dark">Why RS Construction</ButtonLink></Reveal><div className="col-lg-6 offset-lg-1 why-list">{items.map((item, i) => <Reveal key={item.title} delay={i * .08}><article className="why-item"><span className="why-icon">{item.icon}</span><div><span className="why-number">0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></div><ArrowUpRight className="why-arrow" size={18} /></article></Reveal>)}</div></div></div></section>;
}

export function ProcessSection() {
  const steps = [{ n: "01", icon: <Compass />, title: "Discover", text: "We start with your needs, ideas and priorities." }, { n: "02", icon: <DraftingCompass />, title: "Plan", text: "Shape the scope, approach and key decisions." }, { n: "03", icon: <Hammer />, title: "Build", text: "Bring the plan to life with coordinated work." }, { n: "04", icon: <Check />, title: "Complete", text: "Review the details and bring the space together." }];
  return <section className="section-pad process-section"><div className="container site-container"><Reveal><SectionHeading eyebrow="A CLEARER JOURNEY" title="From vision to reality" text="A simple way to think about how a project can take shape. Every project is different, so the details are tailored to your brief." /></Reveal><div className="process-track">{steps.map((step, i) => <Reveal key={step.n} delay={i * .12}><article className="process-step"><span className="process-icon">{step.icon}</span><span className="process-number">{step.n}</span><h3>{step.title}</h3><p>{step.text}</p></article></Reveal>)}</div></div></section>;
}

export function PromiseSection() {
  return <section className="section-pad promise-section"><div className="container site-container"><Reveal><div className="promise-inner"><span className="eyebrow eyebrow-light">THE RS CONSTRUCTION STANDARD</span><h2>Built on <em>care.</em><br />Guided by <em>clarity.</em></h2><p>We want you to feel informed and considered at every step, from the first conversation through the last detail.</p><ButtonLink href="/contact">Let’s talk about your project</ButtonLink><div className="promise-mark">RS</div></div></Reveal></div></section>;
}

export function ContactBand() {
  return <section className="contact-band"><div className="container site-container"><div><span className="eyebrow eyebrow-light">YOUR NEXT STEP STARTS HERE</span><h2>Let’s discuss<br /><em>your project.</em></h2><p>Share what you have in mind. We’ll help you work out a practical place to begin.</p></div><ButtonLink href="/contact">Start an enquiry <MoveRight size={16} /></ButtonLink></div></section>;
}
