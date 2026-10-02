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

The silent 12-second video is a staged in-engine preview, not an uninterrupted playthrough or a performance claim. Playback is opt-in. The site describes a private Thai beta; no public download, signup, store URL, price, or release date has been announced. Add links only when confirmed.

## Cloudflare deployment preparation

Configured for [Cloudflare Workers static assets](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/). Only `dist/` is uploaded; no SSR adapter or runtime secrets are required.

```sh
npm run deploy:check
```

This builds, verifies local links and media, and performs a Wrangler dry run without deploying. GitHub Actions runs the same check on main and pull requests. The separate deployment workflow publishes verified pushes to main once account setup is complete and the repository variable `CLOUDFLARE_DEPLOY_ENABLED` is `true`.

Before first deployment, authenticate Wrangler against the intended Cloudflare account and verify it with `npx wrangler whoami`. The MCP login and Wrangler login are separate. Confirm the intended account before publishing; no account ID is hardcoded in this repository.

## Live website

- [English](https://undertwoskies-website-promote.undertwoskies-game.workers.dev/)
- [ภาษาไทย](https://undertwoskies-website-promote.undertwoskies-game.workers.dev/th/)

Hosted in **Under Two Skies - Game**. The GitHub repository variable `SITE_URL` holds this production origin; `CLOUDFLARE_ACCOUNT_ID` is stored in GitHub Secrets. Local manual deployment uses the same verified account and origin with `npm run deploy`.

Keep API tokens in Cloudflare/GitHub secret settings, never in source files. No Cloudflare resources are created by cloning, building, or running the dry-run check.

### Automatic deployment setup

The `Deploy website` workflow is prepared but remains disabled until account authentication and secrets are configured. Required repository secrets: `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN` (scoped to Workers deployment in the intended account). Required repository variables: `SITE_URL` (confirmed HTTPS origin), `CLOUDFLARE_DEPLOY_ENABLED=true`. Each main push rebuilds and verifies before deployment, then checks both live homepages. Pull requests only run validation. Do not enable a second Workers Builds deployment trigger alongside this workflow.
