import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
import ContactForm from "@/components/contact-form";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "Contact RS Construction", description: `Start an enquiry with RS Construction about your building, renovation or interior project in ${site.city}, ${site.region}.`, path: "/contact" });

export default function ContactPage() {
  return <>
    <section className="contact-page-hero"><div className="container site-container"><span className="eyebrow eyebrow-light">LET’S START A CONVERSATION</span><h1>Tell us what you’re<br /><em>planning.</em></h1><p>Share a little about your project and we’ll help you find a clear place to begin.</p></div></section>
    <section className="contact-content"><div className="container site-container"><div className="row g-5">
      <div className="col-lg-5 contact-sidebar"><span className="eyebrow">CONTACT RS CONSTRUCTION</span><h2>We’re here to<br /><em>help you plan.</em></h2><p>Tell us about your project using the enquiry form. We’ll follow up using the contact details you provide.</p>
        <div className="contact-methods"><div className="contact-method"><span><MapPin size={18} /></span><div><strong>Location</strong><small>{site.city}, {site.region}, {site.country}</small></div></div><div className="contact-method"><span><Phone size={18} /></span><div><strong>Phone / WhatsApp</strong><small>{site.phone || "Contact number to be confirmed"}</small></div></div><div className="contact-method"><span><Mail size={18} /></span><div><strong>Email</strong><small>{site.email || "Email address to be confirmed"}</small></div></div></div>
        <div className="contact-note"><MessageCircle size={17} /><p>Form confirmation appears only after the email provider accepts your enquiry. If delivery is unavailable, the form will show an error so you can try again.</p></div>
      </div>
      <div className="col-lg-7"><div className="form-panel"><div className="form-panel-heading"><div><span className="eyebrow">PROJECT ENQUIRY</span><h2>What can we help you build?</h2></div><span className="form-step">01 <i /> 01</span></div><ContactForm /></div></div>
    </div></div></section>
    <section className="location-section"><div className="container site-container"><div className="location-card"><div className="location-pin"><MapPin size={20} /></div><span className="eyebrow">LOCAL TO TIRUNELVELI</span><h2>Building in and around<br />{site.city}.</h2><p>RS Construction serves {site.city}, {site.region}. A map will be added when the business location is confirmed.</p><span className="location-status">EXACT BUSINESS ADDRESS TO BE CONFIRMED</span></div></div></section>
  </>;
}
