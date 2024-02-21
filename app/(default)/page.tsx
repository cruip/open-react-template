export const metadata = {
  title: "Masjid IMAAN",
  description: "The place to practice your deen, to teach your kids and more. Certified scholars both males and females are present to learn from!",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      {/* <Newsletter /> */}
    </>
  );
}
