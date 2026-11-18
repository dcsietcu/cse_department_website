# CSE Department · IET Calicut

The original 10-page department site converted to Next.js App Router using JavaScript.

## Run locally

Use Node.js 20.9 or later.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. For a production build, run `npm run build` and then `npm start`.

## Project structure

- `app/page.js` contains the home page. Each other page has its own `app/<route>/page.js` file.
- `app/template.js`, `app/site-header.js`, and `app/site-footer.js` provide the shared navigation and footer.
- `app/globals.css` contains the original visual styles and responsive fixes.
- `app/site-interactions.js` handles GSAP and ScrollTrigger animations, the gallery marquee, event disclosures, and the mobile menu.
- `public/photo/` contains the original local photos. The Google Fonts and remote photos still load from their source URLs.
- `next.config.mjs` redirects the former `.html` URLs to their matching Next.js routes.

The original placeholder buttons, project and event links, and phone number can be populated once their official destinations are available.
