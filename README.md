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

## Deploy (Firebase Hosting)

### First-time setup

1. Install dependencies: `npm install`
2. Create a project at [Firebase Console](https://console.firebase.google.com/) (or use an existing one)
3. Log in: `npx firebase login`
4. Link the project (replace `YOUR_PROJECT_ID` with your Firebase project ID):

```bash
npx firebase use --add
```

5. Ensure `.env` is filled in — Vite embeds `VITE_*` variables **at build time**

### Deploy

```bash
npm run deploy
```

This runs `npm run build` then uploads `dist/` to Firebase Hosting.

### Custom domain (future)

Live site: [https://ethos-program.web.app](https://ethos-program.web.app)

When you connect `ethosprogram.com` in Firebase Console → Hosting → Add custom domain:

1. Update `.env`: `VITE_SITE_URL=https://ethosprogram.com`
2. Update `public/sitemap.xml` and `public/robots.txt` URLs
3. Add the new domain in EmailJS Security settings
4. Run `npm run deploy`

### SPA routing

Client-side routes (`/privacy`, `/terms`) are handled by `firebase.json` rewrites to `index.html`.

### Contact form (EmailJS) after deploy

Vite embeds `VITE_*` variables **during `npm run build`**. The `.env` file is not uploaded to Firebase — only the built `dist/` folder is.

1. Always deploy with: `npm run deploy` (builds locally with your `.env`)
2. In [EmailJS → Account → Security](https://dashboard.emailjs.com/admin/account/security), add your live origin under **Allowed referrers / domains**:

```
https://ethos-program.web.app
https://ethos-program.firebaseapp.com
http://localhost:5173
```

Add `https://ethosprogram.com` and `https://www.ethosprogram.com` when the custom domain goes live.

3. If using Gmail via EmailJS, reconnect the service and enable “Send email on your behalf” (fixes HTTP 412 errors)

After changing EmailJS settings or `.env`, run `npm run deploy` again.
