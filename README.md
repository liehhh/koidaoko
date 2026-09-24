# lika — portfolio

React + Vite + React Router.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Adding artwork
1. Put images in `public/art/` (e.g. `public/art/moth-saint.jpg`).
2. In `src/data/works.js`, set `image: '/art/moth-saint.jpg'` on that work.
   Works without an image show a striped placeholder.
3. Portrait: set `PORTRAIT` in `src/data/works.js`.

## Structure
- `src/data/works.js` — all artworks, categories, bio copy
- `src/pages/` — Home, Works (archive), Work (single piece), About
- `src/components/` — Nav, Footer, ArtCard, Art, Cursor, Particles, PageTransition, Reveal, ArrowLink
- `src/styles.css` — all styling and animation

## Toggles
`src/config.js` — custom cursor, particles, film grain, page transition.

## Deploying
Uses `BrowserRouter`. On static hosts, add a SPA fallback (all routes → `index.html`),
e.g. Netlify `_redirects`: `/*  /index.html  200`, or Vercel rewrites.
