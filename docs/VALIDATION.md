# Interactive revision — October 5, 2026

`npm run check` passes: production build and TypeScript validation.

The production application passed 19 interaction checks and 45 chapter-layout checks in Chromium. No application page errors were observed.

## Interaction verification

- Nine full-screen horizontal chapters; the document stays within the viewport.
- Next/previous controls, keyboard navigation, native touch swipe, wheel navigation and direct chapter hashes.
- Visual index opens and jumps to the selected chapter.
- Offscreen chapters are inert; dialogs close with Escape and restore focus, including nested source previews.
- Account Progression stages change their explanation. Model tabs work with clicks and arrow keys without advancing chapters.
- Pilot period switch displays the correct 2024 and 2025 observations.
- Executive exhibits and photo archive open; the lightbox responds to arrow keys.
- Dial Up archive film starts and pauses on request; playback was verified.
- KAIRO selector changes the film and uses the corresponding YouTube embed.
- Executive deck supports arrow/Home/End navigation.
- California Deep Clean immediately precedes KAIRO.
- Reduced-motion preferences disable smooth transitions.
- All local images load.

## Layout verification

All nine chapters were checked at 1280×720, 1024×768, 760×844, 390×844 and 320×568. No document-wide overflow or clipped horizontal chapter content was observed. Longer chapters scroll internally on small screens, while chapter controls remain visible. The mobile visual index fits its dialog.

YouTube embed sources and direct fallback links were checked; third-party playback was not independently verified. Contact uses a mailto link; no message was sent. Lovable connection and source transfer are now verified as described below.

## Motion and navigation

[Watch the 22-second walkthrough](previews/walkthrough.mp4)

The recording shows the production application: chapter transitions, an expanded exhibit, the pilot comparison, Account Progression, the visual index, archive playback, California Deep Clean and the KAIRO selector.

## Preview captures

![Desktop introduction](previews/desktop.png)

![Interactive Account Progression](previews/model.png)

![Visual chapter index](previews/index.png)

![KAIRO film chapter](previews/kairo.png)

![Executive deck](previews/deck.png)

![Mobile introduction](previews/mobile.png)

## Lovable transfer verification

Access to the existing project was verified. Its README project ID and GitHub commit matched the connected private repository, soapyfranco/happy-canvas-starter-18. The transfer preserved Lovable infrastructure and dependencies, added stricter TypeScript compatibility and self-hosted Newsreader font files, and synced commit `99ae87add3787781784cde03220cfd73abe203c6`. Lovable reported the matching commit, a ready preview and a screenshot of the interactive cover.

Publication was requested for https://happy-canvas-starter-18.lovable.app. The API returned `pending`; the latest request ID is `9ab4304e-3e90-4855-8dad-d7c533692570`. The available connection exposes no deployment-status query. External interaction verification was unavailable: the test browser received an empty response and the public web lookup could not access the domain. The local checks above are not claimed as live-site checks. No Lovable AI generation round was used.
