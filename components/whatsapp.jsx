import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function WhatsAppButton() {
  if (!site.whatsapp) return <Link href="/contact" className="floating-contact" aria-label="Enquire with RS Construction"><MessageCircle size={22} /><span className="floating-tooltip">Send an enquiry</span></Link>;
  return <a href={`https://wa.me/${site.whatsapp}`} className="floating-contact" aria-label="Chat with RS Construction on WhatsApp"><MessageCircle size={22} /><span className="floating-tooltip">Chat on WhatsApp</span></a>;
}
