import { createFileRoute } from '@tanstack/react-router'
import { CaliforniaStory } from '../components/Stories'

export const Route = createFileRoute('/stories/california-deep-clean')({
  head: () => ({ meta: [{ title: 'California Deep Clean — David Nkemere' }] }),
  component: CaliforniaStory,
})
