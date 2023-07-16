export const metadata = {
  title: "Adeoba Digital",
  description:
    "award winning social media professional",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      {/* <Contact /> */}
      {/* <Features /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </>
  );
}
