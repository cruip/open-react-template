import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Features from "@/components/features/Features";
import Regime from "@/components/regime/Regime";
import OurProjects from "@/components/ourProjects/OurProjects";
import Testimonials from "@/components/testimonials/Testimonials";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Features />
      <Regime />
      <OurProjects />
      <Testimonials />
      <Footer />
    </main>
  );
}
