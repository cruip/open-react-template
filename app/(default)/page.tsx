export const metadata = {
  title: "Главная - АЛМ",
  description: "Описание страницы",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Certificates from "@/components/certificates";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Certificates/>
      <Cta />
    </>
  );
}
