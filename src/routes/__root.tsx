import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import '@fontsource-variable/inter'
import '@fontsource-variable/newsreader'
import '@fontsource-variable/newsreader/wght-italic.css'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'David Nkemere — Growth, by design.' },
      { name: 'description', content: 'GTM strategy and creative direction. David Nkemere’s work across Net Health, Dial Up, California Deep Clean and KAIRO.' },
      { name: 'robots', content: 'noindex, nofollow' },
      { property: 'og:title', content: 'David Nkemere — Growth, by design.' },
      { property: 'og:description', content: 'GTM strategy. Organizational change. Creative direction.' },
      { property: 'og:type', content: 'website' },
    ],
    links: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  }),
  component: () => <html lang="en"><head><HeadContent /></head><body><Outlet /><Scripts /></body></html>,
  notFoundComponent: () => <main className="not-found"><p className="eyebrow">404 / David Nkemere</p><h1>Let’s get you<br />back to the story.</h1><a className="button" href="/">Return home ↗</a></main>,
})
