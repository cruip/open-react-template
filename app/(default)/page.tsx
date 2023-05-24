export const metadata = {
  title: 'Ciellie - Your Solar Surveyor',
  description: 'get a solar survey schedule completed as soon as tomorrow',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Newsletter />
    </>
  )
}
