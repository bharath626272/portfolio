# Bharath Kumar Reddy — Portfolio (Awwwards-tier)

## Original problem statement
Build a high-level professional resume website for Bharath Kumar Reddy Mukthapuram. Reference site: souravdash151.netlify.app. System reminder: make it Awwwards Site-of-the-Day level with kinetic hero, masked line reveal, numbered manifesto chapters, editorial marquee, spotlight-framed imagery, framer-motion + lenis smooth scroll, subtle parallax, and premium motion.

## Persona
- Bharath — recent MCA graduate looking for full-time full-stack roles. Wants a memorable single-page portfolio linkable from resumes / LinkedIn / bios.

## Static requirements
- Single-page React app, no backend beyond existing FastAPI status template
- Dark editorial art direction — ink/bone/acid palette, Instrument Serif + Geist + Geist Mono
- Sections: Preloader, Nav (live IST clock, available dot), Hero (masked line reveal + parallax orb + diagonal stripes), Marquee (slow big serif ticker), Manifesto (numbered chapters 01–04), About (spotlight frame with monogram, stats), Skills (numbered columns), Experience (timeline), Projects (alternating spotlight frames + hover cover parallax), Education (row table), Contact (huge type CTA), Footer (giant name mark).
- Lenis smooth scroll + framer-motion scroll-linked parallax + micro-interactions.
- Sourced data from uploaded resume PDF. Resume PDF linked as download in hero.

## What's implemented (2025-12-30)
- Portfolio page at `/` with 11 assembled components in `/app/frontend/src/components/portfolio/`.
- Lenis smooth scroll wrapper.
- Preloader (bar + name mark).
- All data centralized in `/app/frontend/src/lib/data.js`.
- data-testid on every interactive element.
- Mobile responsive.

## What's mocked / deferred
- LinkedIn URL is placeholder `#` (user did not provide).
- Real personal photo — replaced with a stylized monogram inside a conic-gradient ring (honest placeholder).
- Brain-tumor project image is stock imagery (Unsplash) since no artefact.
- No backend integration beyond existing status route — pure static portfolio.

## Backlog (P1 → P2)
- P1: Real personal photo when Bharath provides one → drop in About spotlight frame.
- P1: LinkedIn URL when provided.
- P2: Working contact form via Resend/mailto with UI feedback.
- P2: MDX-powered "Notes" / mini-blog section.
- P2: OG-image / social share meta tags per section.
- P2: Case-study detail pages for each project.
