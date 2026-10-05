import { createFileRoute } from '@tanstack/react-router'
import { KairoStory } from '../components/Stories'

export const Route = createFileRoute('/stories/kairo')({
  head: () => ({ meta: [{ title: 'KAIRO — David Nkemere' }] }),
  component: KairoStory,
})
