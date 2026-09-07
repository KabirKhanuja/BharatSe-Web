# BharatSe Web

Ministry dashboard for BharatSe, the market linkage and cataloguing platform for
government supported artisans. SIH 2026, problem statement 26090.

This repository is the ministry facing surface only. The artisan app and the
buyer storefront both come out of the Flutter repository, and the API is
separate again.

## Stack

Next.js 16 with the App Router, TypeScript, Tailwind v4, shadcn/ui on Radix,
Recharts for the charts, Lucide for icons.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Theme

`src/app/globals.css` carries the palette. The values are the same ones in
`AppColors` in the Flutter app, so the dashboard and the artisan app read as one
product. If a colour changes it changes in both places or in neither.

| Token | Value | Used for |
| --- | --- | --- |
| `--background` | `#FAF6F0` | page ground, the app's cream |
| `--primary` | `#16324F` | navy, buttons and the wordmark |
| `--ring` / `--chart-1` | `#B4522C` | terracotta, the accent |
| `--destructive` | `#8F1D24` | maroon |
| `--chart-3` | `#C6A24C` | gold |
| `--brand-success` | `#2E6B4F` | positive movement |

Type is IBM Plex Sans, with IBM Plex Mono available for figures. Plex was drawn
for dense institutional interfaces and its numerals are unambiguous at small
sizes, which matters more here than personality. The Flutter app uses a display
serif for the storefront; this surface is an instrument panel and does not.

Use the `.tabular` class on any number that sits in a column, so figures do not
wobble as digits change.

## Data

`src/lib/data.ts` stands in for the API. Every figure is fabricated for the
prototype, and the page says so at the foot. When the API lands, replace that
module with fetches and nothing above it moves.

## What is built

Only the Overview page. The other sidebar sections are marked as planned and
are deliberately inert rather than linking to routes that do not exist.

Overview covers the four headline measures, median artisan income against
income at intake, beneficiaries by scheme against target, listings against
orders fulfilled, sales by channel, cluster performance, and Craft Passport
issuance and verification.
