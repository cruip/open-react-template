"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function Testimonials() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const isArabic = locale === "ar";

  const projects = isArabic
    ? [
        {
          title: "المكتب الرئيسي Riverside",
          tag: "تجاري",
          blurb: "مكتب عالي الأداء لفريق عمليات إقليمي.",
          image: "/images/projects/riverside-hq.jpg",
          color: "from-royal/30 to-blue-500/20",
        },
        {
          title: "تشطيب Marina Residences",
          tag: "سكني",
          blurb: "تسليم داخلي فاخر مع تشطيبات مميزة وتنسيق لأنظمة المرافق.",
          image: "/images/projects/marina-residences.jpg",
          color: "from-gold/30 to-amber-500/20",
        },
        {
          title: "قبة Northgate للتجزئة",
          tag: "تجزئة",
          blurb: "مشروع سريع التنفيذ مع تشطيب داخلي في جدول زمني مضغوط.",
          image: "/images/projects/northgate-retail.jpg",
          color: "from-emerald-500/20 to-teal-500/20",
        },
        {
          title: "مرفق Askar اللوجستي",
          tag: "صناعي",
          blurb: "مساحة تشغيلية قوية مصممة لتسهيل التخزين والتدفق والصيانة.",
          image: "/images/projects/askar-logistics.jpg",
          color: "from-slate-500/20 to-gray-500/20",
        },
      ]
    : [
        {
          title: "Riverside Corporate HQ",
          tag: "Commercial",
          blurb: "A high-performance workplace for a regional operations team.",
          image: "/images/projects/riverside-hq.jpg",
          color: "from-royal/30 to-blue-500/20",
        },
        {
          title: "Marina Residences Fit-Out",
          tag: "Residential",
          blurb: "Luxury interior delivery with premium finishes and coordinated MEP.",
          image: "/images/projects/marina-residences.jpg",
          color: "from-gold/30 to-amber-500/20",
        },
        {
          title: "Northgate Retail Pavilion",
          tag: "Retail",
          blurb: "A fast-track retail shell and fit-out delivered on a compressed schedule.",
          image: "/images/projects/northgate-retail.jpg",
          color: "from-emerald-500/20 to-teal-500/20",
        },
        {
          title: "Askar Logistics Facility",
          tag: "Industrial",
          blurb: "Robust operational space designed for storage, flow, and maintenance access.",
          image: "/images/projects/askar-logistics.jpg",
          color: "from-slate-500/20 to-gray-500/20",
        },
      ];

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
          {isArabic ? "أعمالنا الأخيرة" : "Recent work"}
        </span>
        <h2 className="mt-3 font-nacelle text-3xl font-semibold text-navy dark:text-paper md:text-4xl">
          {isArabic ? "مشاريع مختارة." : "Selected projects."}
        </h2>
      </motion.div>

      <motion.div
        className="mt-12 grid gap-6 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative rounded-3xl border border-line overflow-hidden bg-white shadow-sm transition-all hover:border-royal/30 hover:shadow-xl dark:border-line-dark dark:bg-navy-deep/80 dark:hover:border-gold/30"
          >
            <div className={`relative h-52 w-full overflow-hidden bg-gradient-to-br ${project.color} dark:opacity-80`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Hover overlay with view button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "#contact")}
                  className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 rounded-full bg-white/90 px-6 py-2 text-sm font-semibold text-navy shadow-lg backdrop-blur hover:bg-white"
                >
                  {isArabic ? "عرض المشروع" : "View project"}
                </a>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-semibold text-navy dark:text-paper">
                  {project.title}
                </h3>
                <span className="rounded-full bg-royal/10 px-3 py-1 text-sm font-medium text-royal dark:bg-gold/10 dark:text-gold whitespace-nowrap">
                  {project.tag}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-navy/70 dark:text-paper/70">
                {project.blurb}
              </p>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-royal transition hover:text-royal-light dark:text-gold dark:hover:text-gold-light group/link"
              >
                {isArabic ? "عرض المشروع" : "View project"}
                <svg className="h-4 w-4 transition-transform group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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