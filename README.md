# Alex Liao · Selected Work

What did I do? This portfolio collects eight projects I've worked on and explains what each one was built to do.

| Project | Focus |
| --- | --- |
| Tiris | Crypto trading and strategy tools |
| Upglow | AI-assisted daily logging |
| Easygrin Pool | Grin mining infrastructure |
| Easygrin Wallet | A web wallet for Grin mining payouts |
| Zytxl | A directory for military veterans |
| Reindeer | An Android VPN client |
| Wangcard | Chinese character learning cards |
| Tetragram | Augmented reality photo sharing |

## Develop locally

Use Node.js 24 LTS and npm.

```sh
npm ci
npm run dev
```

Vite prints the local URL. Run `npm run build` to generate the production site in `dist/`, then run `npm run preview` to serve that build locally.

## Update the catalog

All project copy lives in [src/projects.json](src/projects.json). Edit entries there to change what the cards display. The order of the entries determines the order on the page.

| Field | What to enter |
| --- | --- |
| `id` | A unique, stable slug such as `easygrin-pool`. It also selects the cover illustration. |
| `title` | The project's display name. |
| `category` | A short label shown above the title. |
| `description` | A one-sentence summary shown on the card. |
| `highlights` | An array of strings describing what the project does or what you contributed. |
| `techniques` | An array of strings for technologies or methods used. |
| `link` | An object with `url` and `label`, or `null` if there is no public link. |
| `logo` | A public image path such as `/projects/upglow/logo.webp`, or `null` to show the project's first letter. |
| `screenshots` | An array of objects with `src`, descriptive `alt` text, and a short `caption`. Use `[]` if there are no screenshots. |

Place local images under `public/projects/<id>/` and omit `public` from the config paths. Screenshots, highlights, techniques, and the link appear when a visitor expands a card. To edit the layout or the illustrative covers, use [src/App.jsx](src/App.jsx) or [src/Artwork.jsx](src/Artwork.jsx), respectively.

The site uses React, Vite, and Tailwind CSS. The project content lives in the source tree and the built site is fully static.

## Deploy to GitHub Pages

1. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
2. Push the portfolio to `main`, or run **Deploy portfolio** from the **Actions** tab after the workflow is on `main`.
3. Check the workflow's `github-pages` deployment for the result.

The workflow builds with `npm ci` and `npm run build`, then deploys `dist/` to [alexliao.github.io](https://alexliao.github.io/). Vite's default root base matches this user-site repository.
