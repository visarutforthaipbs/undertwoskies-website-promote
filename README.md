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
- `public/images/hero-satellite.webp`: transparent Godot render of the approved V3 satellite model. It follows a slow CSS orbit with a pause/resume button, a smaller path on mobile, and no motion when reduced motion is requested. No 3D runtime is loaded.

The silent 12-second video is a staged in-engine preview, not an uninterrupted playthrough or a performance claim. Playback is opt-in. The site describes a private Thai beta; no public download, signup, store URL, price, or release date has been announced. Add links only when confirmed.

## Cloudflare deployment preparation

Configured for [Cloudflare Workers static assets](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/). Only `dist/` is uploaded; no SSR adapter or runtime secrets are required.

```sh
npm run deploy:check
```

This builds, verifies local links and media, and performs a Wrangler dry run without deploying. GitHub Actions runs the same check on main and pull requests. It does not deploy automatically.

Before first deployment, authenticate Wrangler against the intended Cloudflare account and verify it with `npx wrangler whoami`. The MCP login and Wrangler login are separate. Confirm the intended account before publishing; no account ID is hardcoded in this repository.

Once the production origin and account are confirmed:

```sh
SITE_URL=https://YOUR_CONFIRMED_ORIGIN npm run deploy
```

Set `SITE_URL` to the real HTTPS origin for canonical and sharing metadata. Do not use the placeholder literally. For Workers Builds, select this repository, root `/`, production branch `main`, build command `npm run verify`, and deploy command `npx wrangler deploy`; set `SITE_URL` in its build environment. Connect automatic deployment only when ready to publish.

Keep API tokens in Cloudflare/GitHub secret settings, never in source files. No Cloudflare resources are created by cloning, building, or running the dry-run check.
