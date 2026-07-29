"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function Workflows() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const isArabic = locale === "ar";

  const items = isArabic
    ? [
        {
          title: "تخطيط دقيق",
          body: "يبدأ كل مشروع على الورق قبل أن يبدأ في الموقع.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 12h6M12 9v6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          title: "تنفيذ داخلي",
          body: "فريق التصميم والتشطيب والميكانيكا تحت سقف واحد.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          title: "تنفيذ شفاف",
          body: "تتابع الجدول والميزانية دائمًا وبوضوح.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
      ]
    : [
        {
          title: "Precision planning",
          body: "Every project starts on paper before it starts on site.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 12h6M12 9v6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          title: "In-house execution",
          body: "Design, fit-out, and mechanical teams under one roof.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          title: "Transparent delivery",
          body: "You see the schedule and the budget, always.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
      ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-64 w-64 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-royal), transparent 70%)" }}
      />

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-royal dark:text-gold">
            {isArabic ? "من نحن" : "Who we are"}
          </span>
          <h2 className="mt-3 font-nacelle text-3xl font-semibold text-navy dark:text-paper md:text-4xl">
            {isArabic
              ? "فريق يُبنى حول لوحة التصميم."
              : "A team built around the drawing board."}
          </h2>
          <p className="mt-5 text-lg leading-8 text-navy/75 dark:text-paper/75">
            {isArabic
              ? "نحن فريق متعدد التخصصات من المهندسين والمصممين ومديري الموقع، ونرى كل مشروع نظامًا لا مجرد قائمة مهام. ومن أول رسم إلى التسليم النهائي، نلتزم بنفس المعيار: بناء صحيح وفي الوقت المحدد دون مفاجآت."
              : "We're a multidisciplinary team of engineers, designers, and site managers who treat every project as a system — not a checklist. From first sketch to final handover, we hold the same standard: built right, on time, without surprises."}
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-line bg-white p-5 shadow-sm transition-all hover:border-royal/30 hover:shadow-md dark:border-line-dark dark:bg-navy-deep/80 dark:hover:border-gold/30"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-royal/10 text-royal dark:bg-gold/10 dark:text-gold">
                {item.icon}
              </div>
              <h3 className="font-semibold text-navy dark:text-paper">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-navy/70 dark:text-paper/70">
                {item.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}