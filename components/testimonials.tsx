"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const projectKeys = ["p1", "p2", "p3", "p4"] as const;

export default function Testimonials() {
  const t = useTranslations("projectsData");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 100;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-royal), transparent 70%)" }}
      />

      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-royal dark:text-gold">
          {t("eyebrow")}
        </span>
        <h2 className="mt-3 font-nacelle text-3xl font-semibold text-navy dark:text-paper md:text-4xl">
          {t("title")}
        </h2>
      </motion.div>

      <motion.div
        className="mt-12 grid gap-6 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projectKeys.map((key) => (
          <motion.article
            key={key}
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } }}
            className="group relative rounded-3xl border border-line overflow-hidden bg-white shadow-sm transition-all duration-300 hover:border-royal/40 hover:shadow-2xl hover:shadow-royal/10 dark:border-line-dark dark:bg-navy-deep/80 dark:hover:border-gold/40 dark:hover:shadow-gold/10"
          >
            {/* Shimmer sweep on hover */}
            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full dark:via-gold/10" />

            <div className={`relative h-52 w-full overflow-hidden bg-gradient-to-br ${t(`items.${key}.color`)} dark:opacity-80`}>
              <Image
                src={t(`items.${key}.image`)}
                alt={t(`items.${key}.title`)}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-1"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-royal/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:bg-gold/10" />
              
              {/* Hover overlay with view button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "#contact")}
                  className="translate-y-4 scale-95 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 rounded-full bg-white/90 px-6 py-2 text-sm font-semibold text-navy shadow-lg backdrop-blur hover:bg-white hover:shadow-xl"
                >
                  {t("view")}
                </a>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-semibold text-navy transition-colors duration-300 group-hover:text-royal dark:text-paper dark:group-hover:text-gold">
                  {t(`items.${key}.title`)}
                </h3>
                <span className="rounded-full bg-royal/10 px-3 py-1 text-sm font-medium text-royal transition-all duration-300 group-hover:bg-royal group-hover:text-white dark:bg-gold/10 dark:text-gold dark:group-hover:bg-gold dark:group-hover:text-navy-deep whitespace-nowrap">
                  {t(`items.${key}.tag`)}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-navy/70 dark:text-paper/70">
                {t(`items.${key}.blurb`)}
              </p>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-royal transition-all duration-300 group-hover:gap-3 hover:text-royal-light dark:text-gold dark:hover:text-gold-light group/link"
              >
                {t("view")}
                <svg className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}