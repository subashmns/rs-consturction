import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return <section className="not-found"><span className="eyebrow">404 · PAGE NOT FOUND</span><h1>This page is still<br /><em>under construction.</em></h1><p>The address may have changed, or the page may not exist yet.</p><Link href="/" className="button button-gold"><ArrowLeft size={16} /> Back to home</Link></section>;
}
