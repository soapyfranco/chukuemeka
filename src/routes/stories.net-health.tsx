import { createFileRoute } from '@tanstack/react-router'
import { NetHealthStory } from '../components/Stories'

export const Route = createFileRoute('/stories/net-health')({
  head: () => ({ meta: [{ title: 'Net Health GTM — David Nkemere' }] }),
  component: NetHealthStory,
})
