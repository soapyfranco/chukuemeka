import { createFileRoute } from '@tanstack/react-router'
import { SellerTestStory } from '../components/Stories'

export const Route = createFileRoute('/stories/seller-led-test')({
  head: () => ({ meta: [{ title: 'The seller-led test — David Nkemere' }] }),
  component: SellerTestStory,
})
