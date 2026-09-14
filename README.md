# Portfolio — Home page (in progress)

This is just the Home page, built and refined against a reference design.
Other pages (Projects, Experience, Achievements, Leadership, About, Contact)
aren't built yet, so their nav links will 404 for now, that's expected.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Hot reload is on, so any edits you or I make
show up instantly.

## Stack

Next.js (App Router) + TypeScript, Tailwind CSS v4, GSAP + ScrollTrigger,
Lenis (smooth scroll), Framer Motion. No other libraries.

## Structure

```
app/
  layout.tsx        fonts, smooth scroll wrapper
  page.tsx           assembles the Home page sections
  globals.css        design tokens (dark/cream alternating theme)
components/
  Nav.tsx            top navigation
  home/
    Hero.tsx           section 01
    QuickIntro.tsx      section 02 (about teaser)
    SelectedWork.tsx    section 03
    ProjectPanel.tsx    project thumbnail used in 03
    TechStreams.tsx     section 04
    TimelineArchive.tsx section 05
    FinalCTA.tsx        section 06 + footer
    DoorwayScene.tsx    hero SVG illustration
    OpenSkyScene.tsx    final CTA SVG illustration
    MountainGlimpse.tsx about section SVG illustration
lib/
  data.ts            all real content (profile, projects, experience, etc.)
  gsap.ts            registers ScrollTrigger once, shared import
```

## Note on visuals

The atmospheric scenes (mountains, doorway, figure) are custom SVG/gradient
art, not real photography, since the build environment couldn't reach image
CDNs. Drop real photos into `public/` and swap them into the relevant
component (`<img>` or `next/image`) whenever you're ready, current layout
and sizing will still work.
