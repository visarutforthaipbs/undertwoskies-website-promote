# Under Two Skies — promotion website

Bilingual static Astro website for **Under Two Skies : ไร่หมุนเวียนใต้เงาดาวเทียม**.
This repository contains only the promotion website and its presentation media. The game source, model pipeline, builds, and internal planning records are not included.

## Development

Use Node.js 22.12 or later (Node 22 recommended).

```sh
npm ci
npm exec astro dev -- --background
npm run verify
```

Manage the background server with `npm exec astro dev -- status`, `npm exec astro dev -- logs`, and `npm exec astro dev -- stop`.
Routes: `/`, `/th/`, `/press/`, `/th/press/`.

## Content

- `src/i18n/content.ts`: English and Thai copy and release status.
- `src/components/`: landing page and media page.
- `src/layouts/BaseLayout.astro`: navigation, logo, language links, metadata.
- `src/styles/global.css`: responsive presentation.
- `public/`: approved logo, portraits, fonts, screenshots, and video.
- `public/images/hero-satellite.webp`: transparent Godot render of the approved V3 satellite model. It circles the central halo in a slow CSS orbit (about one lap every 36 seconds) with a pause/resume button, a smaller path on mobile, and no motion when reduced motion is requested. No 3D runtime is loaded.

The silent 12-second video is a staged in-engine preview, not an uninterrupted playthrough or a performance claim. Playback is opt-in. The site links to the free public Thai beta download page. Game archives live in the Cloudflare R2 bucket `undertwoskies-beta`, served by the `undertwoskies-download` Worker in the game repository (`server/download/`). Update that release and verify its downloads before publishing a new beta number here. No store price or full release date has been announced.

## Cloudflare deployment preparation

Configured for [Cloudflare Workers static assets](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/). Only `dist/` is uploaded; no SSR adapter or runtime secrets are required.

```sh
npm run deploy:check
```

This builds, verifies local links and media, and performs a Wrangler dry run without deploying. GitHub Actions runs the same check on main and pull requests. The separate deployment workflow publishes verified pushes to main once account setup is complete and the repository variable `CLOUDFLARE_DEPLOY_ENABLED` is `true`.

Before first deployment, authenticate Wrangler against the intended Cloudflare account and verify it with `npx wrangler whoami`. The MCP login and Wrangler login are separate. Confirm the intended account before publishing; the configured deployment account is `37985e3dbd0d5cc809f4740dec81dbfc` (Under Two Skies - Game).

## Live website

- [English](https://undertwoskies-website-promote.undertwoskies-game.workers.dev/)
- [ภาษาไทย](https://undertwoskies-website-promote.undertwoskies-game.workers.dev/th/)

Hosted in **Under Two Skies - Game**. The GitHub repository variable `SITE_URL` holds this production origin; `CLOUDFLARE_ACCOUNT_ID` is stored in GitHub Secrets. Local manual deployment uses the same verified account and origin with `npm run deploy`.

Keep API tokens in Cloudflare/GitHub secret settings, never in source files. No Cloudflare resources are created by cloning, building, or running the dry-run check.

### Automatic deployment setup

The `Deploy website` workflow is enabled for pushes to `main`; account authentication and deployment secrets are configured. Required repository secrets: `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN` (scoped to Workers deployment in the intended account). Required repository variables: `SITE_URL` (confirmed HTTPS origin), `CLOUDFLARE_DEPLOY_ENABLED=true`. Each main push rebuilds and verifies before deployment, then checks both live homepages. Pull requests only run validation. Do not enable a second Workers Builds deployment trigger alongside this workflow.

### Player guidance and language consistency

Both homepages and press pages include shared `PlaytestHelp.astro`: game-language
and platform caveats, mobile guidance, and a copyable Discord feedback template.
English download buttons lead to the download Worker's `/en/` route; Thai buttons
lead to `/`. Website translation does not imply an English game build.
`public/website-ux.js` is also copied to the game repository's
`server/download/public/website-ux.js`; keep those identical. It only suggests a
platform, shows mobile advice, and copies a template after a click. It does not
transmit device information or automatically download anything.
The verification task rejects stale beta-1 copy and mismatched download-language
links on all four routes. Minimum hardware requirements remain explicitly
unconfirmed until measured; Linux/Steam Deck remains untested.
