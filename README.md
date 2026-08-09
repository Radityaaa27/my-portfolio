# Radit — Portfolio

Personal developer portfolio built with React, TypeScript, Tailwind CSS 4, and Vite.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Before you deploy

1. **Set your real email.** Open `src/components/Contact.tsx` and replace the
   `EMAIL` placeholder (currently `[EMAIL]`) with your actual address.
2. **Optional: add an OG image.** Drop a 1200x630 image at `public/og-image.png`
   and add an `og:image` meta tag in `index.html` for nicer link previews when
   your portfolio is shared.
3. **Add project screenshots (optional).** `ProjectCard` and the Currently
   Building card are designed to look complete without images, but if you want
   to add real screenshots of Seapedia, Resep-AI, or Cosmos Explorer, drop them
   in `src/assets/` and wire them into `src/data/projects.ts`.

## Adding a new project

All project content lives in `src/data/projects.ts` — add a new entry to the
`Project[]` array (or edit the `buildingProject` object for a work-in-progress)
and it renders automatically through the existing `ProjectCard` component. No
markup changes needed.

## Structure

```
src/
  data/           # structured content: projects, experience, skills
  components/     # one component per section, plus shared pieces
  index.css       # design tokens (color, type) as Tailwind v4 @theme
```
