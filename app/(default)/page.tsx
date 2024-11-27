
export const metadata = {
  title: "Lumunate - Home",
  description: "We specialize in web and mobile development, systems integration and digital marketing to help businesses thrive in today’s fast-paced digital world.",
  keywords: ["Lumunate", "Portfolio", "Next.js", "React", "Web Development"],
  author: "Fizo",
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Features />
      <WhyChooseUs />
      <Workflows />
      <Testimonials />
      <Cta />
    </>
  );
}
