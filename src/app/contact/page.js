import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone, Pencil } from "lucide-react";
import { site, image } from "@/lib/site";
import ContactForm from "@/components/contact-form";
import { pageMetadata } from "@/lib/metadata";
import { Reveal, HeroMotion, ImageReveal } from "@/components/motion";

const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.49015706823792!2d77.72089395980271!3d8.706501460997432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04130010210245%3A0x9f3c0b6cfee50d3d!2sTM%20PURAM!5e0!3m2!1sen!2sin!4v1793720760525!5m2!1sen!2sin";

export const metadata = pageMetadata({ title: "Contact RS Construction", description: `Start an enquiry with RS Construction about your building, renovation or interior project in ${site.city}, ${site.region}.`, path: "/contact" });

export default function ContactPage() {
  return <>
    <section className="page-hero contact-hero"><div className="container site-container"><HeroMotion className="page-hero-copy"><span className="eyebrow eyebrow-light">LET’S START A CONVERSATION</span><h1>Tell us what you’re<br /><em>planning.</em></h1><p>Share a little about your project and we’ll help you find a clear place to begin.</p><span className="page-hero-location">TIRUNELVELI · TAMIL NADU</span></HeroMotion><div className="page-hero-image"><ImageReveal src={image("photo-1504307651254-35680f356dfd", 1500)} alt="Construction professionals planning work at a building site" priority /></div></div></section>
    <section className="contact-content"><div className="container site-container"><div className="row g-5">
      <Reveal className="col-lg-5 contact-sidebar"><span className="eyebrow">CONTACT RS CONSTRUCTION</span><h2>We’re here to<br /><em>help you plan.</em></h2><p>Tell us about your project using the enquiry form. We’ll follow up using the contact details you provide.</p>
        <div className="contact-methods"><div className="contact-method"><span><MapPin size={18} /></span><div><strong>Location</strong><small>{site.city}, {site.region}, {site.country}</small></div></div><div className="contact-method"><span><Phone size={18} /></span><div><strong>Phone / WhatsApp</strong><small>{site.phone || "Contact number to be confirmed"}</small></div></div><div className="contact-method"><span><Mail size={18} /></span><div><strong>Email</strong><small>{site.email || "Email address to be confirmed"}</small></div></div></div>
        <div className="contact-note"><MessageCircle size={17} /><p>Form confirmation appears only after the email provider accepts your enquiry. If delivery is unavailable, the form will show an error so you can try again.</p></div>
      </Reveal>
      <Reveal className="col-lg-7" delay={.1}><div className="form-panel"><div className="form-panel-heading"><div className="form-heading-main"><span className="form-heading-icon"><Pencil size={17} /></span><div><span className="eyebrow project-enquiry-label">PROJECT ENQUIRY</span><h2>What can we help you build?</h2></div></div><span className="form-step">01 <i /> 01</span></div><ContactForm /></div></Reveal>
    </div></div></section>
    <section className="location-section"><div className="container site-container"><Reveal><div className="location-card"><div className="location-pin"><MapPin size={20} /></div><span className="eyebrow">LOCAL TO TIRUNELVELI</span><h2>Building in and around<br />{site.city}.</h2><p>RS Construction serves {site.city}, {site.region}. The map below shows the area near TM Puram.</p><span className="location-status">EXACT BUSINESS ADDRESS TO BE CONFIRMED</span></div></Reveal><Reveal delay={.1}><div className="contact-map-card"><div className="contact-map-heading"><div><span className="eyebrow">FIND US</span><h3>TM Puram, Tirunelveli</h3></div><a className="contact-map-link" href="https://www.google.com/maps/search/?api=1&query=TM%20PURAM%2C%20Tirunelveli" target="_blank" rel="noreferrer">Directions <ArrowUpRight size={14} /></a></div><div className="location-map"><iframe src={mapEmbedUrl} title="RS Construction map location near TM Puram, Tirunelveli" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /></div></div></Reveal></div></section>
  </>;
}
