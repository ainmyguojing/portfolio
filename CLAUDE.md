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
- New image/video assets must be explicitly `git add`ed — they won't auto-commit
- Commit untracked assets before pushing code that references them, or they'll 404 on Vercel

## Site structure
- `/` — Home page (`app/page.tsx`)
- `/about` — About page (`app/about/page.tsx`)
- `/work/community-qa` — CQA case study
- `/work/recognition` — Recognition & Motivation
- `/work/elite` — Elite Ecosystem
- `/work/year-on-yelp` — Year on Yelp
- `/other-work/smart-omix` — Smart Omix (Doc.ai)
- `/other-work/design-system` — Design System (Doc.ai)
