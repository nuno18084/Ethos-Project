# ETHOS — Website

Marketing site for the ETHOS coaching & mentoring programme. Built with React, TypeScript, Vite, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Test Lighthouse and contact form against the preview URL (`http://localhost:4173`), not the dev server.

## Environment variables

Copy `.env.example` to `.env` and fill in:

| Variable | Description |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `VITE_SITE_URL` | Public site URL (canonical, Open Graph, sitemap) |

Set the same variables in your hosting provider before deploy.

## Deploy

Static SPA output in `dist/`. The `public/_redirects` file handles client-side routing on Netlify. For Vercel, add a matching rewrite to `index.html`.

Ensure `VITE_SITE_URL` matches your production domain (e.g. `https://ethosprogram.com`).
