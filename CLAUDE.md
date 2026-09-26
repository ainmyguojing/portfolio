# Portfolio – Jing Guo

## Project
Next.js + Tailwind CSS + Framer Motion portfolio site for Jing Guo, Lead Product Designer at Yelp.
Deployed on Vercel at **jingguodesign.com** via GitHub repo `ainmyguojing/portfolio`.
**Every push to `main` auto-deploys to production.** No manual Vercel steps needed.

## Stack
- Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion
- Shared components in `components/` (Card, Label, BulletList, VideoPlayer, etc.)
- Global styles in `app/globals.css` — accent color is `#FFFF05` (yellow)

## Key conventions
- Image paths with spaces must be URL-encoded: `/images/Smart%20Omix/` not `/images/Smart Omix/`
- Always use `{/* eslint-disable-next-line @next/next/no-img-element */}` above `<img>` tags
- SVGs are served as static files from `public/images/` — never use Next.js `<Image>` for them
- Videos use the `VideoPlayer` component (custom play/pause control), not raw `<video>`
- Captions go inside `<figure>` with `<figcaption className="text-xs text-neutral-400 mt-2 text-center">`
- Image borders use the `img-bordered` class (1px gray border, defined in globals.css)

## Workflow
- After any change: `git add <files> && git commit && git push origin main`
- **When the user sends an asset (image, PDF, video, etc.):** save it to the correct `public/` subfolder, `git add` it, commit it, and prompt the user to push. Never leave assets untracked.
- Commit untracked assets before pushing code that references them, or they'll 404 on Vercel

## Version bookmarks
Seven key eras in the site's evolution, newest last:

1. **Yellow + Triangle Mesh Grid** (`5de9eca` → `179258e`)
   Interactive triangle mesh background, cursor effects, card hover opacity. The original visual identity.
   To restore full era: `git checkout 179258e -- app/page.tsx app/globals.css components/TriangleMesh.tsx`
   To bring back just the mesh: `git checkout ca1f918 -- components/TriangleMesh.tsx`

2. **Polish & Content Cleanup** (`ce170ae` → `731b6f5`)
   Resume link, bio updates, entrance animations, removing em dashes.

3. **Pruning Old Work** (`9f17bac` → `731732f`)
   Removed unused pages (parks-togo, xiggit, style-shop), removed A_Portfolio source, trimmed CQA details.

4. **Chat Portfolio Mode** (`146fbde` → `4af9267`)
   Added the conversational AI chat feature + Vercel build fixes.
   To restore chat-only landing: `git checkout 4af9267 -- app/page.tsx`

5. **Chat UX Refinements** (`5b91aaa` → `bb7ca67`)
   Back button, deep links, mobile layout, font size, gradient fixes.

6. **Content Sensitivity Pass** (`f0e2f3d` → `25bd8da`)
   Removed metrics, team composition, AI strategy details. Added `/full/` case studies behind separate routes.
   Last commit before this pass: `bb7ca67`

7. **Layout Swap & New Color Scheme** (`d8c0c91` → `e08bbc9`)
   Moved chat to `/chat`, restored traditional landing page, then switched to teal + pink with half-circles.
   Last yellow version: `ca1f918`

## Site structure
- `/` — Home page (`app/page.tsx`)
- `/about` — About page (`app/about/page.tsx`)
- `/work/community-qa` — CQA case study
- `/work/recognition` — Recognition & Motivation
- `/work/elite` — Elite Ecosystem
- `/work/year-on-yelp` — Year on Yelp
- `/other-work/smart-omix` — Smart Omix (Doc.ai)
- `/other-work/design-system` — Design System (Doc.ai)
