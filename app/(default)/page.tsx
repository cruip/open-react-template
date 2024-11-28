
export const metadata = {
  title: "Lumunate - Home",
  description: "Partner with Lumunate, a full-service digital agency offering web and mobile app development, IT consulting, cloud solutions, systems integration, digital marketing and custom CMS development. Delivering innovative, scalable, and user-centric technology solutions to drive your business growth.",
  keywords: ["Lumunate", "Portfolio", "Next.js", "React", "Web Development",
    "Mobile App Development",
    "IT Consulting",
    "Cloud Solutions",
    "Digital Marketing",
    "CMS Development",
    "Custom Software",
    "API Integration",
    "SEO Optimization",
    "UX/UI Design",],
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
