# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server.
- `npm run build` — Runs `fetch-posts`, then `vite build`. Must run in this order since the build reads `src/posts.json`.
- `npm run preview` — Preview the static build locally.
- `npm run check` — `svelte-kit sync` + `svelte-check` against `jsconfig.json`. Use `check:watch` while iterating.
- `npm run lint` — Prettier check + ESLint. `npm run format` writes Prettier fixes.
- `npm run deploy` — Manual deploy via `gh-pages` (normally unnecessary; GitHub Actions does this on push to `master`, see [.github/workflows/deploy.yml](.github/workflows/deploy.yml)).

No test runner is configured.

## Architecture

Static SvelteKit 2 / Svelte 5 site deployed to GitHub Pages as `joshlopez.me`. Uses `@sveltejs/adapter-static` — everything must prerender; no runtime server.

### Posts pipeline (important)

Markdown posts live in [src/posts/](src/posts/) with gray-matter frontmatter (`published`, `date`, etc.). The build is driven by one generated JSON file that **must** exist before `vite build` runs:

1. [scripts/fetch-posts.js](scripts/fetch-posts.js) reads `src/posts/*.md`, filters `published: true`, sorts by date desc, writes `src/posts.json`.
2. [svelte.config.js](svelte.config.js) imports `src/posts.json` at config-load time to populate `prerender.entries` for `/writings/[slug]`. Route `load()` functions import `posts.json` directly. If you edit a post's frontmatter or add a post, rerun `npm run fetch-posts` (or just `npm run build`) — `vite dev` alone won't regenerate this JSON.

Posts are preprocessed by `mdsvex` (`.md` is registered as a Svelte extension) with Shiki (`synthwave-84` theme) for syntax highlighting. The `[slug]` route dynamically `import()`s the `.md` module at load time ([src/routes/writings/[slug]/+page.js](src/routes/writings/%5Bslug%5D/+page.js)).

### Routing & layout

Global prerender + `trailingSlash: "always"` is set in [src/routes/+layout.js](src/routes/+layout.js). Top-level routes: `/` (home), `/connect`, `/projects`, `/writings`, `/writings/[slug]`. Structured project data lives in [src/lib/data/projects.json](src/lib/data/projects.json).

Components are organized by surface under [src/lib/components/](src/lib/components/): `home/`, `layout/`, `fun/`. Shared state is in [src/lib/stores/](src/lib/stores/).

### Styling

Tailwind v4 via `@tailwindcss/vite` (no `tailwind.config.js`; configuration is inline in `src/app.css`). Uses Tailwind v4 canonical class names — see commit `71cde9c4`. `prettier-plugin-tailwindcss` enforces class order.

### Paths

Use `import { base } from "$app/paths"` for any internal links (noted in [README.md](README.md)). `paths.base` is `""` today, but this keeps links correct if the site ever moves off the apex domain.

### CI quirk

[scripts/install-rolldown-binding.js](scripts/install-rolldown-binding.js) runs on `postinstall` to work around npm failing to install rolldown's platform-specific native binary (Vite 8 bundler). If a CI build fails with a missing `@rolldown/binding-*` package, that's the mechanism that was supposed to recover it.
