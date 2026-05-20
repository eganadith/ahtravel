# A&H Travel and Tourism LLC

Premium travel, tourism, and admin services website for Dubai, UAE.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS + Framer Motion (Lato typeface)
- next-intl (EN, AR, BN, TL)
- Resend (contact form)
- AWS Amplify (deployment)

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/en`.

## Environment variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key for contact form |
| `RESEND_FROM_EMAIL` | Verified sender address |
| `CONTACT_TO_EMAIL` | Recipient for enquiries |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number (default: 971529615154) |
| `NEXT_PUBLIC_GA_ID` | Optional Google Analytics ID |
| `NEXT_PUBLIC_HERO_VIDEO` | Optional hero video path (e.g. `/videos/hero.mp4`) |

## Assets

- Brand logo: `public/images/Logo/logo.png` (also used for favicon via `app/icon.png`)
- Replace SVG placeholders in `public/images/` with WebP photos (see `public/images/README.md` for AI prompts)

## Build

```bash
npm run build
npm start
```

## Routes

- `/en`, `/ar`, `/bn`, `/tl` — Home
- `/[locale]/tourism` — Tourism services
- `/[locale]/admin-services` — Visa & admin services
- `/[locale]/about` — About
- `/[locale]/contact` — Contact form

## Deploy (AWS Amplify)

1. Connect repository to Amplify
2. Set environment variables from `.env.example`
3. Build uses `amplify.yml` automatically
