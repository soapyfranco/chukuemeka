# Chukuemeka / David Nkemere

A personal GTM portfolio: an interactive chapter experience with an executive deck view.

![Desktop design preview](docs/previews/desktop.png)

[See the interaction walkthrough, previews and validation](docs/VALIDATION.md).

React 19, TypeScript, TanStack Start, Vite and Nitro. The project runs independently of Lovable and does not need a backend, API key or database. Vercel deployment configuration is included.

## Start locally

Install Node.js 24 LTS, then clone this repository into the folder you use for projects:

```bash
git clone https://github.com/soapyfranco/chukuemeka.git
cd chukuemeka
npm ci
npm run dev
```

Open `http://localhost:3000`. Open the same folder in VS Code or the Codex desktop app. VS Code extension recommendations are included; extensions have not been installed on your computer by this setup.

```bash
npm run check   # Production build and TypeScript
npm start       # Serve the completed production build locally
```

## Where to work

| File | Purpose |
| --- | --- |
| `src/content/portfolio.ts` | Story, metrics, source context, case studies, links and deck slides |
| `src/components/Portfolio.tsx` | Horizontal chapters, visual index, interactive models, media and deck controls |
| `src/styles.css` | Design tokens, layouts, motion, mobile and print styles |
| `public/media/` | Optimized real project imagery and portfolio diagrams |
| `docs/BUILD-BRIEF.md` | Creative direction and roadmap for further work |
| `docs/EVIDENCE.md` | Sources, claim boundaries and publication decisions |

## Keep iteration inexpensive

GitHub is the shared source of truth. Use Codex and VS Code for content, layout, interactions, fixes and testing. Commit small changes and use branches for larger experiments. Avoid editing the same files simultaneously in multiple tools.

The user connected Lovable to ChatGPT; the current Work session still does not expose its editing or publishing tools. This repository remains an independent TanStack Start project. The supplied Fresh Start Site project needs a source transfer or an update through its confirmed GitHub sync repository; connecting this repository alone does not import the site. See `docs/LOVABLE-TRANSFER.md` for the existing project target and transfer instructions. No Lovable credits were used for this revision.

## Deploy

The repository includes `vercel.json` and the Nitro Vite integration. Vercel can detect TanStack Start when importing this Git repository. No runtime secrets are required. The code has not been deployed or connected to a custom domain.

The site currently has `noindex, nofollow` metadata while the copy and evidence are reviewed. This is an indexing preference, not access control. Review `docs/EVIDENCE.md` before publishing; remove the draft robots directive when the public version is ready.

## Experience included

- Nine full-screen chapters with horizontal swipe, keyboard and wheel navigation, shareable chapter links and a visual index.
- Photography compositions, photo lightbox, an inline Dial Up archive film and a full-screen KAIRO film selector.
- Interactive Account Progression stages and a switchable seller-led pilot readout.
- Nine-slide executive deck mode.
- Keyboard-accessible evidence overlays, video popups and external source previews.
- Three operating model exhibits: Account Progression, outbound and commissioning.
- Seller-led pilot, autobiographical chapter, California Deep Clean immediately before KAIRO, and contact link.
- Self-hosted font, optimized images, reduced-motion support and basic SEO metadata.

## Project status

This is an interactive revision for design and content review. Personal portrait photography, richer California Deep Clean project screenshots, approved original deck excerpts, final reporting periods, a downloadable resume and domain choice are remaining editorial inputs. Existing source decks and private chat screenshots are not committed to this public repository.
