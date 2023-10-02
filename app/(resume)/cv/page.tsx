export const metadata = {
  title: 'Keith Nickas - Software Engineer',
  description: 'A personal website showcasing professional, and, personal works developed by Keith Nickas.',
}

import Contact from '@/components/contact'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Resume() {
  return (
    <>
      <Zigzag />
      <Testimonials />
      <Contact />
    </>
  )
}
