"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <header className="site-header">
    <nav className="navbar navbar-expand-lg site-nav" aria-label="Main navigation">
      <div className="container site-container">
        <Link href="/" className="brand" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
          <img src="/images/rs-construction-logo.png" alt="RS Construction — Building Your Dreams" />
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation menu" : "Open navigation menu"} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        <div className="desktop-links d-none d-lg-flex" id="desktop-menu">
          {navLinks.map((item) => <Link key={item.href} href={item.href} className={`nav-link-custom ${pathname === item.href ? "active" : ""}`}>{item.label}</Link>)}
          <Link href="/contact" className="button button-gold nav-cta">Get a Quote <ArrowUpRight size={15} /></Link>
        </div>
      </div>
      <AnimatePresence>
        {open && <motion.div id="mobile-menu" className="mobile-panel" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.24 }}>
          <div className="container mobile-panel-inner">
            {navLinks.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={pathname === item.href ? "active" : ""}>{item.label}</Link>)}
            <Link href="/contact" onClick={() => setOpen(false)} className="button button-gold mobile-cta">Plan your project <ArrowUpRight size={16} /></Link>
          </div>
        </motion.div>}
      </AnimatePresence>
    </nav>
  </header>;
}
