# CLAUDE.md — FuzeLoom Technologies Website

This file is the single source of truth for building fuzeloom.tech.
Read it fully before writing code. Follow it over general defaults.

---

## 0. How to work

- Build in PHASES (section 10). After each phase, STOP and give a short summary of what changed, which files changed, and what you need from me. Do not start the next phase until I say so.
- Never invent business facts: no fake clients, logos, testimonials, client counts, awards, certifications, stats, team members, or case studies. If content is missing, use a clearly marked placeholder (see section 11) and list it in your phase summary.
- Prefer minimal dependencies. Ask before adding any package not listed in section 2.
- Check installed versions of Next.js, React, and Tailwind before writing version-specific code.

---

## 1. Company

- Brand name: **FuzeLoom** (exactly this capitalization, always)
- Legal/full name: **FuzeLoom Technologies** (footer, legal pages, metadata)
- Domain: https://fuzeloom.tech
- What we do: we connect AI, automation, and software into the systems a business already runs (CRM, ERP, databases, internal tools), so new technology works with the team instead of beside it.
- Positioning line: "FuzeLoom connects AI, automation, and software into the systems your business already runs, so new technology works with your team instead of beside it."
- Tagline: **AI, woven into how you work.**
- Audience: startups, SMEs, and growing companies, international.
- Brand personality: precise, honest, calm, engineering-led. Not hype.

### Differentiation (important)
FuzeLoom design guardrails:
- NO dark navy + electric blue + violet + cyan neon look.
- NO "Trusted by 100+ clients" style counters.
- NO stock photos presented as clients.
- NO "20 industries" grid.
- Our identity is TEXTILE + ENGINEERING: indigo, linen, an amber "thread", woven grids, serif headings.

---

## 2. Tech stack

- Next.js (App Router), TypeScript (strict), Tailwind CSS
- Fonts via `next/font/google`
- Content stored as typed TypeScript data in `/content` (no CMS yet)
- Contact form: Server Action or Route Handler, server-side validation, honeypot field for spam. Email sending via Resend using `RESEND_API_KEY` and `CONTACT_TO_EMAIL` env vars. If the env vars are missing, the form must show a friendly fallback with a mailto link, never fail silently.
- Allowed extra packages: `zod` (validation), `resend` (email), `clsx`. Anything else: ask first.
- No heavy animation libraries. CSS transitions only.
- Provide `.env.example` with all required variables.

---

## 3. Design tokens

Define all tokens once (Tailwind theme / CSS variables). Never hardcode hex values in components.

### Colors
| Token | Hex | Use |
|---|---|---|
| indigo | #1E2A5A | Hero, footer, headings, primary links on light |
| indigo-dark | #141C3D | Hover/pressed states on indigo |
| amber | #F2A33A | Primary buttons (with ink text), highlights, logo thread |
| amber-dark | #D98A1F | Amber hover state |
| linen | #FAF8F4 | Main page background |
| white | #FFFFFF | Cards |
| ink | #1A1D24 | Body text |
| slate | #64748B | Secondary text |
| line | #E5E1D8 | Borders, dividers, woven grid lines |

### Contrast rules (WCAG AA, mandatory)
- Ink on linen/white: OK for all text.
- White or linen on indigo: OK for all text.
- Ink on amber: OK (use for primary button text).
- Amber on indigo: OK for text and accents.
- NEVER amber text on linen/white (fails contrast). Amber on light backgrounds is decorative only.
- Slate only on linen/white, never on indigo.
- Visible focus ring on every interactive element: 2px amber outline with offset on dark, 2px indigo outline on light.

### Typography
- Headings: **Fraunces** (serif). Weights 500–600. Tight but readable letter-spacing.
- Body: **Inter**. 16–18px base, line-height ~1.6.
- Labels, eyebrows, tech tags: **IBM Plex Mono**, uppercase, small, letter-spaced.
- Responsive type scale using clamp(). H1 roughly 40px mobile to 64px desktop.

### Layout
- 8px spacing system.
- Max content width ~1200px; text blocks max ~68ch.
- Generous section spacing (~96–128px desktop, ~64px mobile).
- Border radius: 8px buttons and inputs, 12px cards. No pill buttons.
- Shadows: minimal; prefer 1px `line` borders.

### Motion
- Subtle fade/translate on section entry, soft hover on cards and buttons.
- All motion disabled under `prefers-reduced-motion`.

---

## 4. Brand assets

### Logo (temporary until a designer delivers the final)
- Create an original SVG mark: a letter F built from 2–3 interlocking strands (like warp and weft), one strand in amber, the rest in indigo (or linen on dark).
- Must be readable at 16px.
- Wordmark "FuzeLoom" set in Fraunces, next to the mark.
- Variants: horizontal (nav), mark-only (favicon), light-on-dark, dark-on-light.
- Put all logo files in `/public/brand/` and add a `README.md` there stating the logo is a TEMPORARY placeholder.

### Graphic motif
- A subtle woven grid pattern (thin crossing lines in `line` color, or indigo at low opacity on dark sections). Use in the hero and as section dividers.
- "Threads": thin lines connecting elements, e.g. service pillars feeding into one system diagram.
- Use sparingly. Never more than one decorative motif per section.

### Other assets
- Favicon set + `apple-icon` from the mark.
- Default Open Graph image generated with `next/og` (indigo background, logo, tagline).

---

## 5. Site map

| Route | Purpose |
|---|---|
| `/` | Homepage |
| `/services` | All services, grouped into 4 pillars, with anchors per pillar |
| `/industries` | Focus industries only (see section 11) |
| `/work` | Case studies / project write-ups (or honest empty state) |
| `/work/[slug]` | Single case study page |
| `/about` | Founder, approach, location, working hours |
| `/contact` | Contact form + direct email |
| `/privacy` | Privacy policy (DRAFT, marked for legal review) |
| `/terms` | Terms of service (DRAFT, marked for legal review) |
| `not-found` | Branded 404 |

Navigation: Services · Industries · Work · About · Contact · [Start a conversation] button.
Sticky header, accessible mobile menu (keyboard + screen reader, focus trapped while open, Esc closes).

---

## 6. Services (4 pillars)

1. **AI & Automation:** AI agents, RAG systems, LLM applications, business process automation.
2. **Software Engineering:** custom software, web and mobile apps, SaaS product development.
3. **Cloud & Data:** cloud infrastructure and DevOps, data engineering and analytics.
4. **Security & Consulting:** security-conscious development and reviews, IT consulting and digital transformation.

Each pillar: icon (consistent line-icon style, inline SVG), title, 1–2 sentence description, list of what's included, link to its anchor on `/services`.
Copy rule: describe outcomes plainly. Banned words: "cutting-edge", "revolutionary", "seamless", "powerful solutions", "next-gen", "unlock", "supercharge".

---

## 7. Homepage sections (in order)

1. **Hero** (indigo background, woven grid motif)
   - Eyebrow (mono): `AI · SOFTWARE · INTEGRATION`
   - H1: **AI, woven into how you work.**
   - Sub: "FuzeLoom connects AI, automation, and software into the systems your business already runs, so new technology works with your team instead of beside it."
   - Primary CTA (amber): "Start a conversation" → `/contact`
   - Secondary CTA (outline, linen): "See what we build" → `/services`
   - Visual: an abstract SVG showing several threads (labeled e.g. CRM, Database, AI model, Your team) weaving into one strand. No 3D blobs, no particles.

2. **The problem we solve** (linen): short section. Most businesses don't need another standalone tool; they need new technology to work with what they already have. 2–3 short points.

3. **Services:** the 4 pillars as cards.

4. **How we work:** 5 steps, horizontal timeline on desktop, vertical on mobile:
   Audit → Design → Build & Integrate → Launch → Support.
   Each step: one sentence. The "Audit" step explains we start by mapping the client's existing systems.

5. **Industries:** focus industries only (from section 11), each with one line on the type of problem we solve there.

6. **Work:** latest case studies from `/content/work.ts`. If none exist, show an honest empty state: "Case studies are being prepared. Ask us about relevant projects on a call." No fake cards.

7. **Why FuzeLoom:** 4 points, no numbers we can't prove: integration-first, engineering-led, security-conscious, transparent communication (we reply within one business day, ONLY if I confirm this in section 11).

8. **Contact CTA** (indigo):
   - Heading: "Have a system that should work smarter? Let's talk."
   - Sub: "Tell us what you're running today and what you want it to do. We'll suggest the right approach and next steps."
   - CTA: "Start a conversation"

9. **Footer** (indigo): logo, one-line description, nav links, service links, verified email, social links (only if provided), "© {current year} FuzeLoom Technologies", Privacy, Terms.

---

## 8. Content structure (`/content`)

- `site.ts`: name, legal name, tagline, description, email, social links, location, working hours
- `services.ts`: 4 pillars with items
- `industries.ts`: focus industries
- `work.ts`: case studies array, each with: slug, title, client (or "Confidential client"), industry, problem, approach, stack, outcome (only verified results), year, isInternalProject flag
- `process.ts`: 5 steps

Internal or demo projects must be labeled "Internal project" on the page. Never present them as client work.

---

## 9. Quality requirements

- Semantic HTML: one H1 per page, logical heading order, landmarks.
- Forms: visible labels, inline errors, success state, aria-live for status messages.
- Images: `next/image`, explicit sizes, meaningful alt text.
- SEO: Metadata API with `metadataBase: https://fuzeloom.tech`, unique title/description per page, canonical URLs, `sitemap.ts`, `robots.ts`, Organization JSON-LD on the homepage.
- Performance: no unused fonts or weights, no client components unless they need interactivity.
- Responsive at 360px, 768px, 1024px, 1440px.
- `npm run lint` and `npm run build` must pass with zero errors at the end of every phase.

---

## 10. Build phases (stop after each)

1. **Foundation:** inspect repo (or scaffold Next.js if empty), set up tokens, fonts, base styles, `/content` files, `.env.example`.
2. **Shared UI:** logo SVGs, header + mobile menu, footer, Button, Card, Section, Eyebrow, Container components, focus styles, favicon, OG image.
3. **Homepage:** all sections from section 7.
4. **Inner pages:** services, industries, work, work detail, about, contact (with working form), privacy, terms, 404.
5. **Polish & audit:** responsive check, accessibility pass (contrast, keyboard, screen reader labels), SEO check, lint + build. Report remaining TODOs.

---

## 11. Business details — FILL IN BEFORE PHASE 4

Anything still marked TODO must render as a visible, tasteful placeholder in development and be listed in every phase summary. Do not guess.

- Contact email: TODO (e.g. contact@fuzeloom.tech)
- Focus industries (3–4): TODO
- Founder name, role, photo, short bio, LinkedIn: TODO
- Location / time zone and working hours for client overlap: TODO
- Response-time promise (only if I can keep it): TODO
- Social links: TODO
- Case studies / internal projects: TODO
- Company registration details for footer/legal pages: TODO
