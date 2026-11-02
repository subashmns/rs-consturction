# RS Construction

Premium, responsive five-page website built with Next.js App Router, JavaScript, Bootstrap 5, Tailwind CSS v4, Motion for React and Lucide icons.

## Run locally

```bash
pnpm install
pnpm dev
```

Open the local URL printed by Next.js. Create a production build with `pnpm build`, then serve it with `pnpm start`.

## Contact form email setup

The contact form posts to `/api/contact`. The server validates each submission and waits for Nodemailer to receive SMTP acceptance before returning success. Configure these values in an untracked `.env.local` file (see `.env.example`): `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, and `CONTACT_FROM_EMAIL`. `CONTACT_RECEIVER_EMAIL` defaults to `subashebanezer@gmail.com` for testing; change it to `rsconstruction419@gmail.com` when ready to deliver to the client's inbox. `CONTACT_FROM_EMAIL` must be an address allowed by your SMTP provider. Restart the Next.js server after changing environment variables. Never expose SMTP values as `NEXT_PUBLIC_*` variables.

The route applies a small in-process rate limit and duplicate-submission check plus a honeypot field. These limits are per running server process and are intended as basic protection; a multi-instance deployment should use shared rate-limit storage.

## Before launch

- Set `NEXT_PUBLIC_SITE_URL` in the production environment to the verified public domain. This is used for canonical URLs, social metadata, `robots.txt` and `sitemap.xml`.
- Confirm the public phone, email and WhatsApp details in `lib/site.js`.
- The portfolio images are illustrative stock photography. Replace them with real project photos and verified descriptions before presenting them as RS Construction work.
- Confirm the exact business address before adding an embedded map, plus real project history and any customer quotations or statistics before publishing those claims.
- The architectural images are served from Unsplash image URLs with responsive widths. Replace these with approved local project assets if offline availability or self-hosting is required.

## Content configuration

Edit `lib/site.js` to update the company details, service copy, project references and social image URLs. The logo lives in `public/images/rs-construction-logo.png`.
