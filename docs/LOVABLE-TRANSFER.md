# Lovable source transfer

The completed portfolio is currently in GitHub, not in a Lovable project. This document prepares a code-preserving transfer through the official Lovable integration. It does not mean a deployment has occurred.

## Initial project message

Create one new Lovable project named **Chukuemeka — GTM & Creative Direction**. This is a transfer of an already implemented and tested portfolio. Keep the existing design, writing, interactions, responsive layouts and real imagery.

Source repository: `https://github.com/soapyfranco/chukuemeka`

Validated source commit: `7ade592953fa9270a11421664025c156c1f241c2`

Use this exact commit as the source. Read `AGENTS.md`, `docs/BUILD-BRIEF.md` and `docs/EVIDENCE.md`. Copy the application files and public assets into this new project. This is a source-file transfer, not an attempt to link an existing repository through Lovable's GitHub import UI.

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

Read the pinned `package.json` for dependencies. The site imports `@fontsource-variable/inter`; preserve self-hosted typography. The existing Nitro/Vite setup is for independent hosting; adjust it only if Lovable requires its own adapter. Do not transfer `vercel.json` as a Lovable hosting requirement.

Retrieve files from:

`https://raw.githubusercontent.com/soapyfranco/chukuemeka/7ade592953fa9270a11421664025c156c1f241c2/<path>`

Retrieve a complete source archive from:

`https://github.com/soapyfranco/chukuemeka/archive/7ade592953fa9270a11421664025c156c1f241c2.zip`

If source retrieval fails, report that failure and request the source attachment. Do not approximate the site from a description or invent missing images.

Preserve these requirements:

- White space, large type, warm white and charcoal, restrained coral accents, real project photography and thin editorial rules.
- Nine-slide executive deck mode with keyboard controls, evidence overlays, click-to-load YouTube players and article source previews.
- California Deep Clean immediately before KAIRO in the website and deck.
- David's autobiographical voice, Nigerian parents story, creative origin, Net Health transformation, seller-led pilot, Account Progression, outbound and GTM commissioning.
- Metric context and attribution footnotes. Observations and test hypotheses remain distinct.
- No database, CMS, authentication, new paid integrations or generated portrait.
- No original confidential Net Health decks, raw private screenshots or named customer material.

This transfer is explicitly requested for public Lovable hosting. Remove the draft `noindex, nofollow` directive once the application is ready to publish. Do not change copy or claims to accomplish the transfer.

Validate the build and TypeScript, media loading, narrow mobile layouts, overlays, deck keyboard behavior and chapter order. Return the new project ID and preview URL. Publishing will be performed through the integration's deploy capability after verification.

## Connection and publishing state

The official Lovable app has been discovered for this ChatGPT environment but its installation and connection are not yet confirmed. The supported integration can create and deploy projects without using the blocked cloud-browser sign-in route.

Only the initial project creation or agent editing consumes Lovable build credits; deployment through the official MCP server does not. Actual credit use must be read from the connected workspace rather than estimated or promised.

No existing Lovable projects should be overwritten. After this project exists, confirm its GitHub sync target before continuing local edits; Lovable creates its own linked repository, so the standalone source repository does not automatically become the sync target.
