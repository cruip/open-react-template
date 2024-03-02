export const metadata = {
  title: 'The GCSE Computer Science Tutor',
  description: 'Page description',
}
import { SpeedInsights } from "@vercel/speed-insights/next"
import Hero from '@/components/hero'
import GCSEpaper from '@/components/gcsePapers'
import ALevelpaper from '@/components/aLevelPapers'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Blocks from "@/components/blocks"
import Cheatsheets from "@/components/cheatsheets"
import GCSEPredicted from "@/components/gcsePredicted"

export default function Home() {
  return (
    <>
      <Hero />
      <GCSEpaper />
      <Blocks/>
      <Cheatsheets/>
      <GCSEPredicted/>
      <Zigzag/>
    </>
  )
}
