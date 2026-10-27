# FuzeLoom Technologies — fuzeloom.tech

Next.js App Router + TypeScript + Tailwind. Original textile identity: indigo / linen / amber thread.

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

## Env vars

```
RESEND_API_KEY=          # required for contact form email, else mailto fallback
CONTACT_TO_EMAIL=hello@fuzeloom.tech
NEXT_PUBLIC_SITE_URL=https://fuzeloom.tech
```

Without `RESEND_API_KEY` the `/api/contact` route returns 503 with a friendly mailto fallback — never fails silently.

## Quality

```bash
npm run lint
npm run build
```

Both must pass. Content lives in `/content` — no invented clients, no stock-as-client photos.

## Deploy on Vercel

1. Push to GitHub (`umairinayat/fuzeloom`, branch `main`).
2. Vercel → Add New → Project → Import `fuzeloom`. Framework preset: Next.js (auto from `vercel.json`).
3. Environment Variables → add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`.
4. Deploy. Then Settings → Domains → add `fuzeloom.tech` + `www.fuzeloom.tech`.
5. DNS at your registrar:
   - `A @ 76.76.21.21`
   - `CNAME www cname.vercel-dns.com`
6. Resend → verify `hello@fuzeloom.tech` (SPF/DKIM/DMARC) so form mail lands in inbox.
7. Re-deploy after setting custom domain so `sitemap.xml` / OG use `https://fuzeloom.tech`.
