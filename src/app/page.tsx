import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Features from "@/components/features/Features";
import Regime from "@/components/regime/Regime";
import OurProjects from "@/components/ourProjects/OurProjects";
import Testimonials from "@/components/testimonials/Testimonials";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <main className="bg-[#00030A]">
      {/* <Navbar /> */}
      <Hero />
      <Services />
      <Features />
      <Regime />
      <OurProjects />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
