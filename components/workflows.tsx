"use client";

import { useParams } from "next/navigation";

export default function Workflows() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const isArabic = locale === "ar";

  const items = isArabic
    ? [
        {
          title: "تخطيط دقيق",
          body: "يبدأ كل مشروع على الورق قبل أن يبدأ في الموقع.",
        },
        {
          title: "تنفيذ داخلي",
          body: "فريق التصميم والتشطيب والميكانيكا تحت سقف واحد.",
        },
        {
          title: "تنفيذ شفاف",
          body: "تتابع الجدول والميزانية دائمًا وبوضوح.",
        },
      ]
    : [
        {
          title: "Precision planning",
          body: "Every project starts on paper before it starts on site.",
        },
        {
          title: "In-house execution",
          body: "Design, fit-out, and mechanical teams under one roof.",
        },
        {
          title: "Transparent delivery",
          body: "You see the schedule and the budget, always.",
        },
      ];

  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24"
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div data-aos="fade-right">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-royal dark:text-gold">
            {isArabic ? "من نحن" : "Who we are"}
          </p>
          <h2 className="mt-3 font-nacelle text-3xl font-semibold text-navy dark:text-paper md:text-4xl">
            {isArabic
              ? "فريق يُبنى حول لوحة التصميم."
              : "A team built around the drawing board."}
          </h2>
          <p className="mt-5 text-lg leading-8 text-navy/75 dark:text-paper/75">
            {isArabic
              ? "نحن فريق متعدد التخصصات من المهندسين والمصممين ومديري الموقع، ونرى كل مشروع نظامًا لا مجرد قائمة مهام. ومن أول رسم إلى التسليم النهائي، نلتزم بنفس المعيار: بناء صحيح وفي الوقت المحدد دون مفاجآت."
              : "We’re a multidisciplinary team of engineers, designers, and site managers who treat every project as a system — not a checklist. From first sketch to final handover, we hold the same standard: built right, on time, without surprises."}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3" data-aos="fade-left">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-line bg-white p-5 shadow-sm dark:border-line-dark dark:bg-navy-deep/80"
            >
              <h3 className="font-semibold text-navy dark:text-paper">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-navy/70 dark:text-paper/70">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
