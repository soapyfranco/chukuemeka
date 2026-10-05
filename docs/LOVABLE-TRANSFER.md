# Lovable source transfer

The completed portfolio is currently in GitHub, not in a Lovable project. This document prepares a code-preserving transfer through the official Lovable integration. It does not mean a deployment has occurred.

## Existing project target

Use the existing **Fresh Start Site** project supplied by the user:

`https://lovable.dev/projects/89621581-cd07-40d9-8406-9a50921e37bd`

Project ID: `89621581-cd07-40d9-8406-9a50921e37bd`.

Update this project; do not create another project. Replace its fictional Alex Morgan portfolio with the completed Chukuemeka / David Nkemere portfolio. This is a transfer of an already implemented and tested application. Keep the completed portfolio's design, writing, interactions, responsive layouts and real imagery.

## Transfer message

Source repository: `https://github.com/soapyfranco/chukuemeka`

Source ref: latest `main`. The interactive revision supersedes the original vertical-page implementation at `7ade592953fa9270a11421664025c156c1f241c2`.

Use the latest `main` source, including the interactive revision. Read `AGENTS.md`, `docs/BUILD-BRIEF.md` and `docs/EVIDENCE.md`. Copy the application files and public assets into the existing Fresh Start Site project. This is a source-file transfer, not an attempt to link an existing repository through Lovable's GitHub import UI.

The application already uses React, TypeScript, TanStack Start and Vite. Retain Lovable's supported generated scaffold and build infrastructure wherever required for deployment; adapt only the routing, entry point or build configuration needed to run the transferred application. Preserve the body of `Portfolio`, the content module, the CSS and all interaction behavior. Do not substitute a newly generated landing page.

Runtime source:

- `src/content/portfolio.ts`
- `src/components/Portfolio.tsx`
- `src/styles.css`
- `src/routes/index.tsx`
- `src/routes/__root.tsx`
- `src/router.tsx`
- `src/routeTree.gen.ts`
- `public/favicon.svg`
- All files in `public/media/`

Read `package.json` for dependencies. The site imports `@fontsource-variable/inter` and `@fontsource-variable/newsreader`; preserve self-hosted typography, including Newsreader italic. The existing Nitro/Vite setup is for independent hosting; adjust it only if Lovable requires its own adapter. Do not transfer `vercel.json` as a Lovable hosting requirement.

Retrieve files from:

`https://raw.githubusercontent.com/soapyfranco/chukuemeka/main/<path>`

Retrieve a complete source archive from:

`https://github.com/soapyfranco/chukuemeka/archive/refs/heads/main.zip`

If source retrieval fails, report that failure and request the source attachment. Do not approximate the site from a description or invent missing images.

Preserve these requirements:

- White space, large type, warm white and charcoal, restrained coral accents, real project photography and thin editorial rules.
- Nine-slide executive deck mode with keyboard controls, evidence overlays, click-to-load YouTube players and article source previews.
- The primary experience is nine full-screen horizontal chapters with swipe, wheel and keyboard navigation, a visual index and shareable chapter links. Do not flatten it back into a vertical landing page.
- Preserve clickable photography compositions, the archive lightbox, user-controlled inline Dial Up film, full-screen KAIRO selector, interactive Account Progression stages and switchable pilot comparison.
- California Deep Clean immediately before KAIRO in the website and deck.
- David's autobiographical voice, Nigerian parents story, creative origin, Net Health transformation, seller-led pilot, Account Progression, outbound and GTM commissioning.
- Metric context and attribution footnotes. Observations and test hypotheses remain distinct.
- No database, CMS, authentication, new paid integrations or generated portrait.
- No original confidential Net Health decks, raw private screenshots or named customer material.

This transfer is explicitly requested for public Lovable hosting. Remove the draft `noindex, nofollow` directive once the application is ready to publish. Do not change copy or claims to accomplish the transfer.

Validate the build and TypeScript, media loading, narrow mobile layouts, overlays, deck keyboard behavior and chapter order. Return the existing project ID and its updated preview URL. Publishing will be performed through the integration's deploy capability after verification.

## Connection and publishing state

The user connected Lovable to ChatGPT, and installation is confirmed. This running Work session still does not expose Lovable editing or deployment tools. No Lovable source transfer or publication is claimed. The supported integration can edit and deploy projects when its tools are available, without using the blocked cloud-browser sign-in route.

Agent editing consumes Lovable build credits; deployment through the official MCP server does not. Prefer direct source transfer into this project's confirmed GitHub sync repository when available, to avoid an agent rebuild. Actual credit use must be read from the connected workspace rather than estimated or promised.

Only the user-specified Fresh Start Site sample portfolio is authorized for replacement. Other Lovable projects must remain untouched. Confirm Fresh Start Site's GitHub sync target before transferring code or continuing local edits; the standalone `soapyfranco/chukuemeka` repository does not automatically become the sync target.
