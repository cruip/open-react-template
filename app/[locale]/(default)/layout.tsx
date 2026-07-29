"use client";

import { useEffect, ReactNode } from "react";
import { useParams } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

// Import messages statically so they're available at runtime
import enMessages from "@/messages/en.json";
import arMessages from "@/messages/ar.json";

const messagesMap = {
  en: enMessages,
  ar: arMessages,
};

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const dir = locale === "ar" ? "rtl" : "ltr";
  const messages = messagesMap[locale];

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  }, []);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={dir} lang={locale} className="min-h-screen">
        <Header />
        <main className="relative flex grow flex-col">{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}