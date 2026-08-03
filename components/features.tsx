"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

// Icons stay hardcoded — order must match s1-s6 in messages/*.json → servicesData.items
const icons = [
  <svg
    key="s1"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg
    key="s2"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg
    key="s3"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg
    key="s4"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg
    key="s5"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg
    key="s6"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
];

const serviceKeys = ["s1", "s2", "s3", "s4", "s5", "s6"] as const;

function ChevronIcon({
  direction,
  className = "h-5 w-5",
}: {
  direction: "left" | "right";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden="true"
    >
      <path
        d="M15 19l-7-7 7-7"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform={direction === "right" ? "rotate(180 12 12)" : undefined}
      />
    </svg>
  );
}

const AUTOPLAY_INTERVAL_MS = 5500;

export default function Features() {
  const t = useTranslations("servicesData");
  const params = useParams<{ locale?: string }>();
  const isArabic = params?.locale === "ar";

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const total = serviceKeys.length;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // The browser's own scroll-snap does the alignment — no pixel math to get
  // out of sync with the container. We just tell it which item to center.
  const scrollToIndex = useCallback((target: number, smooth = true) => {
    const scroller = scrollerRef.current;
    const item = itemRefs.current[target];
    if (!scroller || !item) return;
    const scrollerRect = scroller.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const currentScrollLeft = scroller.scrollLeft;
    const delta =
      itemRect.left -
      scrollerRect.left -
      (scrollerRect.width - itemRect.width) / 2;
    scroller.scrollTo({
      left: currentScrollLeft + delta,
      behavior: smooth ? "smooth" : "auto",
    });
  }, []);

  const goTo = useCallback(
    (target: number) => {
      const nextIndex = ((target % total) + total) % total;
      setIndex(nextIndex);
      scrollToIndex(nextIndex);
    },
    [total, scrollToIndex],
  );

  const next = useCallback(() => {
    goTo(isArabic ? index - 1 : index + 1);
  }, [goTo, index, isArabic]);

  const prev = useCallback(() => {
    goTo(isArabic ? index + 1 : index - 1);
  }, [goTo, index, isArabic]);

  // Autoplay
  useEffect(() => {
    if (reduceMotion || paused) return;
    const timer = setTimeout(next, AUTOPLAY_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [index, paused, next, reduceMotion]);

  // Re-center the active card if the viewport resizes (e.g. rotation, devtools resize)
  useEffect(() => {
    const onResize = () => scrollToIndex(index, false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index, scrollToIndex]);

  const cardContent = (key: string, itemIndex: number) => {
    const imgSrc = t(`items.${key}.image`);
    const title = t(`items.${key}.title`);
    const body = t(`items.${key}.body`);
    const number = String(itemIndex + 1).padStart(2, "0");

    return (
      <div className="group/card grid h-full overflow-hidden rounded-[1.9rem] border border-white/10 bg-[#0a1020] shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition-all duration-500 hover:border-gold/30 hover:shadow-[0_0_0_1px_rgba(233,144,40,0.18),0_28px_90px_rgba(0,0,0,0.34)] md:grid-cols-[1fr_1.1fr]">
        {/* Content panel */}
        <div className="relative order-2 flex flex-col justify-between overflow-hidden bg-navy p-8 md:order-none md:p-12 dark:bg-navy-deep">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,144,40,0.14),transparent_40%),linear-gradient(180deg,rgba(23,35,68,0.96),rgba(9,15,28,0.98))] opacity-90" />
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/0 to-transparent opacity-0 transition-opacity duration-700 group-hover/card:via-gold/10 group-hover/card:opacity-100" />

          <div className="relative z-10 flex flex-col justify-between">
            <span className="text-sm font-semibold tracking-widest text-gold/70">
              {number}/{String(total).padStart(2, "0")}
            </span>

            <div className="mt-8 flex h-9 w-9 items-center justify-center rounded-xl bg-gold/10 text-gold">
              {icons[itemIndex]}
            </div>

            <h3 className="mt-5 font-nacelle text-3xl font-semibold leading-tight text-white md:text-4xl">
              {title}
            </h3>

            <div className="mt-4 h-0.5 w-10 bg-gold" />

            <p className="mt-5 max-w-md text-base leading-8 text-white/75">
              {body}
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-all duration-300 hover:gap-3 hover:text-gold-light"
            >
              {t("learn_more")}
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d={
                    isArabic
                      ? "M19 12H5M12 19l-7-7 7-7"
                      : "M5 12h14M12 5l7 7-7 7"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Image panel */}
        <div className="relative order-1 h-[20rem] overflow-hidden md:order-none md:h-auto md:min-h-[540px]">
          <Image
            src={imgSrc}
            alt={title}
            width={1200}
            height={900}
            priority={itemIndex === 0}
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-navy/10 transition-colors duration-700 group-hover/card:to-gold/10" />
          <div
            className={`absolute inset-0 ${
              isArabic
                ? "bg-gradient-to-l from-navy via-navy/40 to-transparent dark:from-navy-deep dark:via-navy-deep/40"
                : "bg-gradient-to-r from-navy via-navy/40 to-transparent dark:from-navy-deep dark:via-navy-deep/40"
            }`}
          />
        </div>
      </div>
    );
  };

  return (
    <section
      id="services"
      className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24"
    >
      <div
        className="pointer-events-none absolute left-0 top-1/3 -z-10 h-80 w-80 rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-gold), transparent 70%)",
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

      {/* ── Frame — the ONLY thing controlling visible edges. Everything inside
          it, including peek slivers, is clipped by this single overflow-hidden. ── */}
      <div
        className="relative mt-12 overflow-hidden rounded-[2rem] border border-line bg-navy py-6 shadow-xl transition-all duration-500 hover:border-gold/30 hover:shadow-[0_0_0_1px_rgba(233,144,40,0.15),0_24px_70px_rgba(9,15,28,0.45)] dark:border-line-dark dark:bg-navy-deep"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ perspective: "1600px" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(233,144,40,0.08),transparent_40%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        <button
          type="button"
          onClick={isArabic ? next : prev}
          aria-label={isArabic ? "التالي" : "Previous service"}
          className={`absolute top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-navy/70 text-gold shadow-lg transition-transform hover:scale-105 active:scale-95 md:h-14 md:w-14 ${isArabic ? "right-3 md:right-5" : "left-3 md:left-5"}`}
        >
          <ChevronIcon
            direction={isArabic ? "right" : "left"}
            className="h-5 w-5 md:h-6 md:w-6"
          />
        </button>

        <button
          type="button"
          onClick={isArabic ? prev : next}
          aria-label={isArabic ? "السابق" : "Next service"}
          className={`absolute top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-gold text-navy shadow-lg transition-transform hover:scale-105 active:scale-95 md:h-14 md:w-14 ${isArabic ? "left-3 md:left-5" : "right-3 md:right-5"}`}
        >
          <ChevronIcon
            direction={isArabic ? "left" : "right"}
            className="h-5 w-5 md:h-6 md:w-6"
          />
        </button>

        {/* Native horizontal scroll-snap. Peek amount = 100% - item width
            (86% mobile / 78% desktop), centered by snap-center — the browser
            guarantees alignment, so this can't drift out of sync the way
            JS pixel math can. */}
        <div
          ref={scrollerRef}
          dir="ltr"
          className="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-[4%] md:px-[8%]"
          style={{ scrollbarWidth: "none" }}
        >
          {serviceKeys.map((key, pos) => (
            <div
              key={key}
              ref={(el) => {
                itemRefs.current[pos] = el;
              }}
              className="h-full w-[90%] shrink-0 snap-center md:w-[95%]"
            >
              <motion.div
                animate={{
                  opacity: pos === index ? 1 : 0.45,
                  scale: pos === index ? 1 : 0.95,
                  rotateY: pos === index ? 0 : pos < index ? 14 : -14,
                  y: pos === index ? -8 : 12,
                }}
                transition={{ duration: 0.4 }}
                className="h-[460px] md:h-[500px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {cardContent(key, pos)}
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-1.5">
          {serviceKeys.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`${isArabic ? "الخدمة" : "Service"} ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-gold"
                  : "w-3 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
