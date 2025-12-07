export const metadata = {
  title: "Drone Based Services",
  description: "Professional drone services for aerial photography, surveying, inspection, and more. Safe, accurate inspections in the harshest environments.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Services from "@/components/services";
import WhyChoose from "@/components/why-choose";
import Industries from "@/components/industries";
import Products from "@/components/products";
import Statistics from "@/components/statistics";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Services />
      <WhyChoose />
      <Industries />
      <Products />
      <Statistics />
      <Projects />
      <Testimonials />
      <Contact />
      <Cta />
    </>
  );
}
