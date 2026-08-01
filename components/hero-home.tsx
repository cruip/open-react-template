"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function HeroHome() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const isArabic = locale === "ar";

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
    <section className="relative overflow-hidden pt-24 md:pt-32">
      {/* Background gradient effect */}
      <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl" 
        style={{ background: "radial-gradient(circle, var(--color-royal), transparent 70%)" }} 
      />
      <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[500px] w-[500px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-gold), transparent 70%)" }}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="mb-4 inline-flex rounded-full border border-royal/20 bg-royal/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-royal dark:border-gold/20 dark:bg-gold/10 dark:text-gold">
                {isArabic ? "شريك تشييد وتطوير" : "Est. structural & design partner"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pb-5 font-nacelle text-4xl font-semibold leading-tight text-navy md:text-5xl dark:text-paper"
            >
              {isArabic ? (
                <>نُبني ما <span className="gradient-text">يُدوم</span>.</>
              ) : (
                <>We build what <span className="gradient-text">lasts</span>.</>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl text-lg leading-8 text-navy/75 dark:text-paper/75"
            >
              {isArabic
                ? "أعمال تشييد شاملة، تصميم داخلي، والتسليم الميداني — بتنفيذ دقيق ونتيجة متقنة."
                : "Full-scope contracting, interior design, and project delivery — engineered with precision, finished with intent."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="group relative inline-flex items-center overflow-hidden rounded-full bg-gold px-6 py-3 font-semibold text-white transition-all hover:bg-gold-light active:scale-95"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">{isArabic ? "ابدأ مشروعًا" : "Start a project"}</span>
              </a>
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, "#projects")}
                className="group relative inline-flex items-center overflow-hidden rounded-full border border-line bg-paper-soft px-6 py-3 font-semibold text-navy transition-all hover:border-royal hover:text-royal active:scale-95 dark:border-line-dark dark:bg-navy-deep/80 dark:text-paper dark:hover:text-gold"
              >
                <span className="absolute inset-0 bg-royal/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 dark:bg-gold/10" />
                <span className="relative">{isArabic ? "اعرض أعمالنا" : "View our work"}</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              {[
                {
                  value: "12+",
                  label: isArabic ? "سنة خبرة" : "Years delivering",
                  sub: isArabic ? "خبرة" : "Experience",
                },
                {
                  value: "180+",
                  label: isArabic ? "مشروع منجز" : "Projects completed",
                  sub: isArabic ? "تسليم" : "Delivery",
                },
                {
                  value: "40+",
                  label: isArabic ? "متخصص في الفريق" : "Specialists on team",
                  sub: isArabic ? "فريق" : "Team",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group cursor-default rounded-2xl border border-line bg-white/70 p-4 shadow-sm transition-all hover:border-royal/30 hover:shadow-md dark:border-line-dark dark:bg-navy-deep/70 dark:hover:border-gold/30"
                >
                  <div className="text-2xl font-bold text-navy dark:text-paper">
                    <span className="gradient-text">{stat.value}</span>
                  </div>
                  <div className="mt-1 text-sm text-navy/70 dark:text-paper/70">
                    {stat.sub}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="gradient-border"
          >
            <div className="rounded-[2rem] border border-line bg-white p-8 shadow-xl dark:border-line-dark dark:bg-navy-deep/80">
              <div className="rounded-[1.5rem] border border-line bg-paper-soft p-6 dark:border-line-dark dark:bg-navy-deep/70">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-royal dark:text-gold">
                  {isArabic ? "نموذج DAM للتسليم" : "DAM delivery model"}
                </p>
                <ul className="mt-6 space-y-4 text-sm leading-7 text-navy/80 dark:text-paper/80">
                  {[
                    isArabic
                      ? "• تخطيط دقيق من الفكرة إلى التشغيل."
                      : "• Precision planning from concept to commissioning.",
                    isArabic
                      ? "• تصميم ومشتريات وتنفيذ متكامل."
                      : "• Integrated design, procurement, and execution.",
                    isArabic
                      ? "• جداول وموازنات ومتابعة شفافة."
                      : "• Transparent schedules, budgets, and site oversight.",
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.15 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}