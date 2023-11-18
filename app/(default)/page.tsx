"use client"

import dynamic from 'next/dynamic';
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

// Import the Hero component dynamically with SSR disabled
const HeroClient = dynamic(() => import('@/components/Hero.client'), {
  ssr: false
});

export default function Home() {
  return (
    <>
       <div style={{ 
        display: 'flex',        // Enables flexbox
        justifyContent: 'center', // Centers horizontally
        alignItems: 'center',     // Centers vertically
        minHeight: '86vh',       // Full viewport height
        flexDirection: 'column'   // Stacks children vertically
      }}>
        <HeroClient />
      </div>

      {/* Features Section */}
      <div style={{ minHeight: '95vh' }}> {/* Adjust this to ensure full viewport height */}
        <Features />
      </div>
      {/* <Zigzag /> */}
      {/* <Testimonials />
      <Newsletter /> */}
    </>
  )
}
