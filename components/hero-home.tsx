"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function HeroHome() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const isArabic = locale === "ar";

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div data-aos="fade-up">
            <div className="mb-4 inline-flex rounded-full border border-royal/20 bg-royal/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-royal dark:border-gold/20 dark:bg-gold/10 dark:text-gold">
              {isArabic ? "شريك تشييد وتطوير" : "Est. structural & design partner"}
            </div>
            <h1 className="pb-5 font-nacelle text-4xl font-semibold leading-tight text-navy md:text-5xl dark:text-paper">
              {isArabic ? "نُبني ما يُدوم." : "We build what lasts."}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-navy/75 dark:text-paper/75">
              {isArabic
                ? "أعمال تشييد شاملة، تصميم داخلي، والتسليم الميداني — بتنفيذ دقيق ونتيجة متقنة."
                : "Full-scope contracting, interior design, and project delivery — engineered with precision, finished with intent."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="rounded-full bg-gold px-6 py-3 font-semibold text-white transition hover:bg-gold-light"
              >
                {isArabic ? "ابدأ مشروعًا" : "Start a project"}
              </Link>
              <Link
                href="#projects"
                className="rounded-full border border-line bg-paper-soft px-6 py-3 font-semibold text-navy transition hover:border-royal hover:text-royal dark:border-line-dark dark:bg-navy-deep/80 dark:text-paper"
              >
                {isArabic ? "اعرض أعمالنا" : "View our work"}
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[[
                isArabic ? "أكثر من 12 سنة خبرة" : "12+ Years delivering",
                isArabic ? "أكثر من 180 مشروعًا منجزًا" : "180+ Projects completed",
                isArabic ? "أكثر من 40 خبيرًا" : "40+ Specialists on team",
              ]]
                .flat()
                .map((stat, index) => (
                  <div
                    key={stat}
                    className="rounded-2xl border border-line bg-white/70 p-4 shadow-sm dark:border-line-dark dark:bg-navy-deep/70"
                  >
                    <div className="text-lg font-semibold text-navy dark:text-paper">
                      {stat}
                    </div>
                    <div className="mt-1 text-sm text-navy/65 dark:text-paper/65">
                      {isArabic ? ["خبرة", "تسليم", "فريق"][index] : ["Experience", "Delivery", "Team"][index]}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="rounded-[2rem] border border-line bg-white p-8 shadow-xl dark:border-line-dark dark:bg-navy-deep/80"
          >
            <div className="rounded-[1.5rem] border border-line bg-paper-soft p-6 dark:border-line-dark dark:bg-navy-deep/70">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-royal dark:text-gold">
                {isArabic ? "نموذج DAV للتسليم" : "DAV delivery model"}
              </p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-navy/80 dark:text-paper/80">
                <li>{isArabic ? "• تخطيط دقيق من الفكرة إلى التشغيل." : "• Precision planning from concept to commissioning."}</li>
                <li>{isArabic ? "• تصميم ومشتريات وتنفيذ متكامل." : "• Integrated design, procurement, and execution."}</li>
                <li>{isArabic ? "• جداول وموازنات ومتابعة شفافة." : "• Transparent schedules, budgets, and site oversight."}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
