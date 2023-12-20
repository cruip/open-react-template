"use client"

import dynamic from 'next/dynamic';
import Features from '@/components/features'
// Import the Hero component dynamically with SSR disabled
const HeroClient = dynamic(() => import('@/components/Hero.client'), {
  ssr: false
});
const Instructions = dynamic(() => import('@/components/Instructions.client'), {
  ssr: false
});

const Demo = dynamic(() => import('@/components/Demo.client'), {
  ssr: false
});

export default function Home() {
  return (
    <>
      <div style={{
      background: 'linear-gradient(to bottom, #000000, #2a004f 50%, #3a0037)', // Gradual transition from black to a darker purple
    }}>
        <div style={{
          display: 'flex',        // Enables flexbox
          alignItems: 'center',     // Centers vertically
          minHeight: '60vh',  
               // Full viewport height
          flexDirection: 'column',
        }}>
          <HeroClient />
        </div>

        <div style={{ minHeight: '28vh' }}> {/* Adjust this to ensure full viewport height */}
          <Demo />
        </div>

        {/* Features Section */}
        <div style={{ minHeight: '95vh' }}> {/* Adjust this to ensure full viewport height */}
          <Features />
        </div>
        <div>
          <Instructions/>
        </div>
        {/* <Zigzag /> */}
        {/* <Testimonials />
      <Newsletter /> */}
      </div>
    </>
  )
}
