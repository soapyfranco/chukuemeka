import { createFileRoute } from '@tanstack/react-router'
import { CreativeStory } from '../components/Stories'

export const Route = createFileRoute('/stories/creative-work')({
  head: () => ({ meta: [{ title: 'Creative work — David Nkemere' }] }),
  component: CreativeStory,
})
