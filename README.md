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

### Custom domain

In Firebase Console → Hosting → Add custom domain, point DNS to Firebase and set:

```env
VITE_SITE_URL=https://ethosprogram.com
```

(rebuild and redeploy after changing)

### SPA routing

Client-side routes (`/privacy`, `/terms`) are handled by `firebase.json` rewrites to `index.html`.
