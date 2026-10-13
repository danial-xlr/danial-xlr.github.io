# danial-xlr.github.io

Personal website of Danial Nahofteh, served at <https://danial-xlr.github.io>.

Built with Vite + React + MUI. The visual design (dark palette, Public Sans / Barlow
typography, cards, labels) follows the Minimal UI kit.

## Content

All content lives in [`src/data/resume.js`](src/data/resume.js) and mirrors the LaTeX
résumé (`../resume.tex`). When the résumé changes:

1. Update `src/data/resume.js`.
2. Rebuild the résumé PDF and copy it to `public/Danial_Nahofteh_CV.pdf`
   (this is the file behind the "Download CV" buttons).

The profile photo is `src/assets/avatar.jpg`. The phone number is in the CV PDF; it is
hidden on the page unless `profile.showPhone` is set to `true`.

## Develop

Requires Node.js 20 (see `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the production build
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to GitHub Pages.

One-time setup: in the repository on GitHub go to **Settings → Pages → Build and
deployment → Source** and choose **GitHub Actions**.
