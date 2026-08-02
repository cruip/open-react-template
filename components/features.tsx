"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

// Icons stay hardcoded — they're SVG JSX, not editable text content.
// Order must match s1-s6 in messages/*.json → servicesData.items
const icons = [
  <svg key="s1" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="s2" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="s3" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="s4" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="s5" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="s6" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

const serviceKeys = ["s1", "s2", "s3", "s4", "s5", "s6"] as const;

// ---- Config ----
const AUTOPLAY_INTERVAL_MS = 5500;
const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function Features() {
  const t = useTranslations("servicesData");
  const params = useParams<{ locale?: string }>();
  const isArabic = params?.locale === "ar";

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  const total = serviceKeys.length;

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const goTo = useCallback(
    (target: number) => {
      setIndex((current) => {
        const next = ((target % total) + total) % total;
        setDirection(target > current ? 1 : target < current ? -1 : 0);
        return next;
      });
    },
    [total]
  );

  const next = useCallback(() => {
    setIndex((current) => {
      setDirection(isArabic ? -1 : 1);
      return (current + 1) % total;
    });
  }, [total, isArabic]);

  const prev = useCallback(() => {
    setIndex((current) => {
      setDirection(isArabic ? 1 : -1);
      return (current - 1 + total) % total;
    });
  }, [total, isArabic]);

  // Autoplay — pauses on manual interaction, disables entirely for reduced motion
  useEffect(() => {
    if (reduceMotion) return;

    const startTimer = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (paused) return;
      timerRef.current = setTimeout(next, AUTOPLAY_INTERVAL_MS);
    };

    startTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, paused, next, reduceMotion]);

  // Pause autoplay while the user is hovering the slider
  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);

  // ---- Swipe on touch ----
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    const threshold = 60;
    if (Math.abs(delta) < threshold) return;

    if (delta < 0) {
      next();
    } else {
      prev();
    }
    touchStartX.current = null;
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("contact");
    if (target) {
      const offset = 100;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const key = serviceKeys[index];
  const imgSrc = t(`items.${key}.image`);
  const title = t(`items.${key}.title`);
  const body = t(`items.${key}.body`);

  const number = String(index + 1).padStart(2, "0");

  return (
    <section
      id="services"
      className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute left-0 top-1/3 -z-10 h-80 w-80 rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--color-gold), transparent 70%)",
        }}
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

      {/* ── Split-panel Slider ── */}
      <div
        className="group relative mt-12 overflow-hidden rounded-3xl border border-line bg-navy shadow-xl transition-all duration-500 hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/20 dark:border-line-dark dark:bg-navy-deep dark:hover:border-gold/30 dark:hover:shadow-gold/10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        dir={isArabic ? "rtl" : "ltr"}
      >
        {/* Golden shimmer sweep on hover */}
        <div className="pointer-events-none absolute inset-0 z-20 -translate-x-full bg-gradient-to-r from-transparent via-gold/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={serviceKeys[index]}
            custom={direction}
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, x: direction >= 0 ? "100%" : "-100%" }
            }
            animate={{ opacity: 1, x: 0 }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, x: direction >= 0 ? "-100%" : "100%" }
            }
            transition={{ duration: reduceMotion ? 0.3 : 0.55, ease: EASE }}
            className="grid md:grid-cols-[1fr_1.1fr]"
          >
            {/* ── Content panel (navy) ── */}
            <div className="relative flex flex-col justify-between bg-navy p-8 transition-colors duration-500 group-hover:bg-navy-light/5 md:p-12 dark:bg-navy-deep dark:group-hover:bg-navy-deep/80">
              {/* Slide index — small, gold, top-left */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-widest text-gold/70 transition-colors duration-300 group-hover:text-gold">
                  {number}/{String(total).padStart(2, "0")}
                </span>
              </div>

              {/* Icon badge */}
              <div className="mt-8 flex h-9 w-9 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/20 group-hover:shadow-lg group-hover:shadow-gold/20">
                {icons[index]}
              </div>

              {/* Title */}
              <h3 className="mt-5 font-nacelle text-3xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-gold-light md:text-4xl">
                {title}
              </h3>

              {/* Gold rule divider — expands on hover */}
              <div className="mt-4 h-0.5 w-10 bg-gold transition-all duration-500 group-hover:w-16 group-hover:shadow-md group-hover:shadow-gold/30" />

              {/* Body */}
              <p className="mt-5 max-w-md text-base leading-8 text-white/75 transition-colors duration-300 group-hover:text-white/90">
                {body}
              </p>

              {/* Learn more link */}
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-all duration-300 hover:gap-3 hover:text-gold-light group/link"
              >
                {t("learn_more")}
                <svg className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d={isArabic ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              {/* Navigation controls row — anchored at bottom of content panel */}
              <div className="mt-10 flex items-center gap-3">
                {/* Previous arrow — subtle */}
                <button
                  type="button"
                  onClick={prev}
                  aria-label={isArabic ? "السابق" : "Previous service"}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:border-gold hover:text-gold hover:scale-105 active:scale-95"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={isArabic ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Line indicators */}
                <div className="flex items-center gap-1.5">
                  {serviceKeys.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`${isArabic ? "الخدمة" : "Service"} ${i + 1}`}
                      aria-current={i === index}
                      onClick={() => goTo(i)}
                      className={`h-0.5 rounded-full transition-all duration-300 ${
                        i === index
                          ? "w-5 bg-gold"
                          : "w-4 bg-white/25 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>

                {/* Next arrow — emphasized gold */}
                <button
                  type="button"
                  onClick={next}
                  aria-label={isArabic ? "التالي" : "Next service"}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold transition-all duration-300 hover:bg-gold/20 hover:scale-105 active:scale-95"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={isArabic ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* ── Image panel ── */}
            <div className="relative h-64 overflow-hidden md:h-auto md:min-h-[480px]">
              <Image
                src={imgSrc}
                alt={title}
                fill
                priority={index === 0}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
              {/* Golden tint overlay on hover */}
              <div className="absolute inset-0 bg-gold/0 transition-colors duration-500 group-hover:bg-gold/10" />
              {/* Horizontal gradient fade from navy into transparent where panels meet */}
              <div
                className={`absolute inset-0 ${
                  isArabic
                    ? "bg-gradient-to-l from-navy via-navy/40 to-transparent dark:from-navy-deep dark:via-navy-deep/40"
                    : "bg-gradient-to-r from-navy via-navy/40 to-transparent dark:from-navy-deep dark:via-navy-deep/40"
                }`}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}