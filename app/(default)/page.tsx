
export const metadata = {
    title: 'Home - Alliance',
    description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import ConnectForm from "@/components/connectForm";

export default function Home() {
    return (
        <>
            <Hero/>
            <Features/>
            <Zigzag/>
            <Testimonials/>
            <ConnectForm/>
        </>
    )
}
