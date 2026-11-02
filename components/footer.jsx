import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return <footer className="site-footer">
    <div className="container site-container">
      <div className="footer-top row g-5">
        <div className="col-lg-5">
          <Link href="/" className="footer-brand"><img src="/images/rs-construction-logo.png" alt="RS Construction" /></Link>
          <p className="footer-intro">Thoughtful construction, clear communication and a home built around the way you want to live.</p>
          <span className="footer-location"><MapPin size={15} /> Tirunelveli, Tamil Nadu</span>
        </div>
        <div className="col-6 col-lg-2 offset-lg-1"><p className="footer-label">Explore</p><ul>{navLinks.map(x => <li key={x.href}><Link href={x.href}>{x.label}</Link></li>)}</ul></div>
        <div className="col-6 col-lg-3"><p className="footer-label">Start a conversation</p><p className="footer-note">Contact details are being confirmed. Use the enquiry form and we’ll show you what happens next.</p><Link href="/contact" className="footer-contact-link">Go to contact <ArrowUpRight size={15} /></Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span><span>Designed for considered building.</span></div>
    </div>
  </footer>;
}
