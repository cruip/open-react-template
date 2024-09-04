export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Brands from '@components/Brands'


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Brands />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
