# ZELVA Interiors

A modern, premium one-page website for **ZELVA Interiors**, a luxury interior design studio.

## Tech stack

| Technology | Purpose |
| --- | --- |
| React 18 | Components and logic |
| Plain CSS | Styling, responsive layout, animations, CSS 3D transforms |
| Vite 5 | Dev server and production build |
| Google Fonts | Cormorant Garamond (headings), Manrope (body) |

The only runtime dependencies are `react` and `react-dom`.

## Getting started

Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install        # install dependencies
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # create a production build in /dist
npm run preview    # preview the production build locally
```

## Project structure

```
zelva-interiors/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── assets/              # logos and project photos
└── src/
    ├── main.jsx             # React entry point
    ├── App.jsx              # assembles all sections
    ├── styles.css           # all styles (colours are CSS variables in :root)
    ├── utils.js             # asset path helper, smooth scroll helper
    ├── data/
    │   └── index.js         # all site content (projects, services, testimonials...)
    ├── hooks/
    │   └── index.js         # useInView, useScrollFrame, useParallax
    └── components/
        ├── Navbar.jsx  Progress.jsx  Hero.jsx  Marquee.jsx
        ├── About.jsx   Stats.jsx     Services.jsx
        ├── Portfolio.jsx   Banner.jsx   Process.jsx
        ├── Testimonials.jsx   Contact.jsx   Footer.jsx
        └── Reveal.jsx  Tilt.jsx  Counter.jsx  SectionHead.jsx   # reusable helpers
```

## Page sections

1. **Hero**: headline, call-to-action buttons and floating 3D image cards that follow the mouse
2. **Studio (About)**: story and parallax images
3. **Stats**: animated counters
4. **Services**: six service cards with 3D tilt (swipeable row on mobile)
5. **Portfolio**: filterable gallery (Living, Bedroom, Kitchen, Bathroom) with a fullscreen lightbox (keyboard arrows and Esc supported)
6. **Philosophy banner**: parallax image with a quote
7. **Process**: four steps with rotating 3D cubes
8. **Testimonials**: auto-rotating client quotes
9. **Contact**: consultation request form and studio details
10. **Footer**

## Customising

### Change text and content
Open `src/data/index.js`. It holds:

- `NAV`: navigation links
- `PROJECTS`: portfolio images, titles, categories
- `SERVICES`, `PROCESS`, `STATS`, `TESTIMONIALS`

Some text lives directly in the components:

- Hero headline and intro: `src/components/Hero.jsx`
- About copy: `src/components/About.jsx`
- Contact details (**email and phone are placeholders**): `src/components/Contact.jsx`
- Footer text: `src/components/Footer.jsx`

### Change colours and fonts
Colours are CSS variables at the top of `src/styles.css`:

```css
:root {
  --ink: #0b0a09;     /* background */
  --ivory: #f3ede3;   /* main text */
  --gold: #c9a96b;    /* accent */
  --gold-2: #e6cf9c;  /* light accent */
}
```

Fonts are loaded in `index.html` and set with `--serif` and `--sans` in `styles.css`.

### Add or replace photos
1. Put the image in `public/assets/`.
2. Add an entry to `PROJECTS` in `src/data/index.js`:

```js
{ img: "My_New_Room.jpg", title: "My New Room", cat: "Living", tag: "Modern" }
```

`cat` must be one of `Living`, `Bedroom`, `Kitchen`, `Bathroom` for the filters to work.
Tip: compress photos (for example with [squoosh.app](https://squoosh.app)) to keep the site fast.

### Logos
`public/assets/logo-white-crop.png` (navbar and footer) and `logo-crop.png` (dark version). Replace them with your own files of the same name.

## Contact form

The form is currently **front-end only**: it shows a thank-you message but does not send anything.
To receive enquiries, connect it to a service such as [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com) or your own API by handling the form's `onSubmit` in `src/components/Contact.jsx`.

## Deployment

Run `npm run build`, then upload the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages or regular web hosting). Before going live, update the page title and description in `index.html` and replace the placeholder email and phone number.

