export const metadata = {
    title: 'Home - Open PRO',
    description: 'Page description',
  }
  
  import Hero from '@/components/hero'
  import Features from '@/components/features'
  import Newsletter from '@/components/newsletter'
  import Zigzag from '@/components/zigzag'
  import Testimonials from '@/components/testimonials'
  import CoreProblem from '@/components/core-problem'
import LogoCarousel from '@/components/logo-carousel'
import VideoComponent from '@/components/demo-features'
import Pricing from '@/components/pricing'
  
  export default function Home() {
    return (
      <>
        <Hero />
        <LogoCarousel />
        <VideoComponent />
        <Pricing />
        <Testimonials />
        <Newsletter />
        {/* <CoreProblem /> */}
        {/* <Features /> */}
        {/* <Zigzag /> */}
      </>
    )
  }
  