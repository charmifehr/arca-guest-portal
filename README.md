# Arca Guest Portal

<!-- redeploy trigger -->

Mobile-first guest experience portal for [Arca, Roatán](https://www.arcaroatan.com). Guests scan a QR code in their room to browse in-room dining, weekly events, island tips, and curated excursions.

Built with **Next.js 15** (App Router), **TypeScript**, and **Tailwind CSS**.

## Getting started

**Prerequisite:** [Node.js](https://nodejs.org) (LTS) must be installed. Without it, `localhost:3000` will not work.

1. Open Terminal in this project folder and run:

```bash
./scripts/dev.sh
```

Or manually:

```bash
npm install
cp .env.example .env.local   # skip if .env.local already exists
npm run dev
```

2. Open in your browser:

- Guest portal: [http://localhost:3000](http://localhost:3000)
- Admin panel: [http://localhost:3000/admin](http://localhost:3000/admin)

Keep the Terminal window open while viewing the site — closing it stops the server.

Default admin credentials (change in `.env.local` before deploying):

- Username: `arca`
- Password: `arca-admin`

## Deployment

Deploy to Vercel, Netlify, or any Node host. Set `ADMIN_USERNAME`, `ADMIN_PASSWORD`, and `SESSION_SECRET` in production.

Point the GoDaddy DNS CNAME for `guests.arcaroatan.com` to your hosting provider.

Editable content is stored in `data/content.json` on the server filesystem. For serverless hosts, use a persistent volume or migrate to a database/blob store.

## Project structure

```
src/
  app/              # Routes (guest home, admin, API)
  components/       # UI sections and admin editors
  lib/              # Content, auth, types, defaults
data/               # Runtime content (created on first save)
```

## Specification

See [ARCA_Guest_Portal_Specification.md](./ARCA_Guest_Portal_Specification.md) for full product requirements.
