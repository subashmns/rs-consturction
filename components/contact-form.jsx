"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [service, setService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submissionLock = useRef(false);

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("service");
    if (["New Construction", "Renovation & Repair", "Interior Works", "Civil Works", "Plan Approval", "Elevation", "Estimation", "Not sure yet"].includes(requested)) setService(requested);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (submissionLock.current) return;
    setError("");
    setNotice("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(["name", "email", "phone", "service", "location", "message", "website"].map((field) => [field, String(data.get(field) || "").trim()]));
    submissionLock.current = true;
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.success) {
        setError(result?.message || "We couldn't send your enquiry. Please try again shortly.");
        return;
      }
      setNotice("Thank you! Your enquiry has been submitted successfully.");
      form.reset();
      setService("");
    } catch {
      setError("We couldn't reach the enquiry service. Check your connection and try again.");
    } finally {
      submissionLock.current = false;
      setIsSubmitting(false);
    }
  }

  return <form className="contact-form" onSubmit={handleSubmit} noValidate>
    <div className="row g-3">
      <div className="col-md-6"><label htmlFor="name">Your name</label><input className="form-control" id="name" name="name" autoComplete="name" required minLength={2} placeholder="Name" /></div>
      <div className="col-md-6"><label htmlFor="email">Email address</label><input className="form-control" id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></div>
      <div className="col-12"><label htmlFor="phone">Phone number</label><input className="form-control" id="phone" name="phone" type="tel" autoComplete="tel" required minLength={8} maxLength={25} placeholder="Include your area code" /></div>
      <div className="col-12"><label htmlFor="service">What are you planning?</label><select className="form-select" id="service" name="service" value={service} onChange={e => setService(e.target.value)} required><option value="">Select a service</option>{["New Construction", "Renovation & Repair", "Interior Works", "Civil Works", "Plan Approval", "Elevation", "Estimation", "Not sure yet"].map(x => <option key={x}>{x}</option>)}</select></div>
      <div className="col-12"><label htmlFor="location">Project location</label><input className="form-control" id="location" name="location" autoComplete="address-level2" required maxLength={120} placeholder="Town or city" /></div>
      <div className="col-12"><label htmlFor="message">Tell us a little about your project</label><textarea className="form-control" id="message" name="message" rows="4" required minLength={10} maxLength={3000} placeholder="Project type, scope, and what you would like help with..." /></div>
      <div className="visually-hidden" aria-hidden="true"><label htmlFor="website">Leave this field blank</label><input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
      <div className="col-12"><button type="submit" className="button button-gold submit-button" disabled={isSubmitting}>{isSubmitting ? "Sending enquiry…" : "Submit Enquiry"} {!isSubmitting && <ArrowUpRight size={16} />}</button></div>
    </div>
    {error && <p className="form-feedback form-error" role="alert">{error}</p>}
    {notice && <p className="form-feedback form-success" role="status"><CheckCircle2 size={17} />{notice}</p>}
  </form>;
}
