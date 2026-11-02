import { createHash } from "node:crypto";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 5;
const DUPLICATE_WINDOW_MS = 2 * 60 * 1000;
const rateBuckets = new Map();
const recentSubmissions = new Map();
let transporter;

const services = new Set([
  "New Construction",
  "Renovation & Repair",
  "Interior Works",
  "Civil Works",
  "Plan Approval",
  "Elevation",
  "Estimation",
  "Not sure yet",
]);

function json(body, status, headers = {}) {
  return Response.json(body, { status, headers });
}

function clientKey(request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || "unknown";
}

function takeRateLimit(key, now) {
  for (const [bucketKey, bucket] of rateBuckets) {
    if (now - bucket.startedAt >= RATE_WINDOW_MS) rateBuckets.delete(bucketKey);
  }
  const bucket = rateBuckets.get(key);
  if (!bucket || now - bucket.startedAt >= RATE_WINDOW_MS) {
    rateBuckets.set(key, { startedAt: now, count: 1 });
    return null;
  }
  if (bucket.count >= RATE_MAX) return Math.max(1, Math.ceil((RATE_WINDOW_MS - (now - bucket.startedAt)) / 1000));
  bucket.count += 1;
  return null;
}

function clean(value) {
  return value.trim().replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function getTransporter() {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const port = Number(process.env.SMTP_PORT || 587);
  if (!host || !user || !pass || !from || !Number.isInteger(port) || port < 1 || port > 65535) return null;
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE?.toLowerCase() === "true",
      auth: { user, pass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });
  }
  return { transporter, from };
}

export async function POST(request) {
  const now = Date.now();
  const key = clientKey(request);
  const retryAfter = takeRateLimit(key, now);
  if (retryAfter) return json({ success: false, message: "Too many enquiries. Please try again later." }, 429, { "Retry-After": String(retryAfter) });

  let body;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > 16_384) return json({ success: false, message: "The submitted enquiry is too large." }, 413);
    body = JSON.parse(rawBody);
  } catch {
    return json({ success: false, message: "Please submit a valid enquiry." }, 400);
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) return json({ success: false, message: "Please submit a valid enquiry." }, 400);
  if (typeof body.website === "string" && body.website.trim()) return json({ success: false, message: "Unable to submit this enquiry." }, 400);

  const values = Object.fromEntries(["name", "phone", "email", "service", "location", "message"].map((field) => [field, typeof body[field] === "string" ? clean(body[field]) : ""]));
  const { name, phone, email, service, location, message } = values;
  const phoneDigits = phone.replace(/\D/g, "");
  if (name.length < 2 || name.length > 100) return json({ success: false, message: "Enter a name between 2 and 100 characters." }, 400);
  if (!/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(email) || email.length > 254) return json({ success: false, message: "Enter a valid email address." }, 400);
  if (!/^[+\d().\-\s]{7,25}$/.test(phone) || phoneDigits.length < 8 || phoneDigits.length > 15) return json({ success: false, message: "Enter a valid phone number with 8 to 15 digits." }, 400);
  if (!services.has(service)) return json({ success: false, message: "Choose a valid project service." }, 400);
  if (location.length < 2 || location.length > 120) return json({ success: false, message: "Enter a project location between 2 and 120 characters." }, 400);
  if (message.length < 10 || message.length > 3000) return json({ success: false, message: "Your message must be between 10 and 3,000 characters." }, 400);

  const receiver = process.env.CONTACT_RECEIVER_EMAIL?.trim() || "subashebanezer@gmail.com";
  const signature = createHash("sha256").update(`${key}\n${name.toLowerCase()}\n${email.toLowerCase()}\n${phone}\n${service}\n${location.toLowerCase()}\n${message}`).digest("hex");
  for (const [hash, timestamp] of recentSubmissions) if (now - timestamp >= DUPLICATE_WINDOW_MS) recentSubmissions.delete(hash);
  if (recentSubmissions.has(signature)) return json({ success: false, message: "This enquiry was already submitted. Please wait a moment before trying again." }, 409);

  const mailConfig = getTransporter();
  if (!mailConfig) return json({ success: false, message: "Email delivery is not configured yet. Please try again later or contact RS Construction directly." }, 503);

  recentSubmissions.set(signature, now);
  const lineMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");
  const fields = [
    ["Name", name], ["Email", email], ["Phone", phone], ["Service", service], ["Project location", location],
  ];
  const html = `<h2>New enquiry from the RS Construction website</h2><table cellpadding="8" cellspacing="0" border="0">${fields.map(([label, value]) => `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join("")}</table><h3>Project details</h3><p>${lineMessage}</p>`;
  const text = `New enquiry from the RS Construction website\n\n${fields.map(([label, value]) => `${label}: ${value}`).join("\n")}\n\nProject details:\n${message}`;

  try {
    const info = await mailConfig.transporter.sendMail({
      from: mailConfig.from,
      to: receiver,
      replyTo: email,
      subject: "New Enquiry - RS Construction",
      text,
      html,
    });
    const accepted = Array.isArray(info.accepted) && info.accepted.some((address) => String(address).toLowerCase() === receiver.toLowerCase());
    if (!accepted) {
      recentSubmissions.delete(signature);
      return json({ success: false, message: "The email provider did not accept this enquiry. Please try again shortly." }, 502);
    }
    return json({ success: true, message: "Enquiry email sent successfully" }, 200);
  } catch {
    recentSubmissions.delete(signature);
    return json({ success: false, message: "We couldn't send your enquiry right now. Please try again shortly." }, 502);
  }
}
