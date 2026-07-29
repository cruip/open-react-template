"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

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
        },
        {
          title: "تشطيب Marina Residences",
          tag: "سكني",
          blurb: "تسليم داخلي فاخر مع تشطيبات مميزة وتنسيق لأنظمة المرافق.",
          image: "/images/projects/marina-residences.jpg",
        },
        {
          title: "قبة Northgate للتجزئة",
          tag: "تجزئة",
          blurb: "مشروع سريع التنفيذ مع تشطيب داخلي في جدول زمني مضغوط.",
          image: "/images/projects/northgate-retail.jpg",
        },
        {
          title: "مرفق Askar اللوجستي",
          tag: "صناعي",
          blurb: "مساحة تشغيلية قوية مصممة لتسهيل التخزين والتدفق والصيانة.",
          image: "/images/projects/askar-logistics.jpg",
        },
      ]
    : [
        {
          title: "Riverside Corporate HQ",
          tag: "Commercial",
          blurb: "A high-performance workplace for a regional operations team.",
          image: "/images/projects/riverside-hq.jpg",
        },
        {
          title: "Marina Residences Fit-Out",
          tag: "Residential",
          blurb: "Luxury interior delivery with premium finishes and coordinated MEP.",
          image: "/images/projects/marina-residences.jpg",
        },
        {
          title: "Northgate Retail Pavilion",
          tag: "Retail",
          blurb: "A fast-track retail shell and fit-out delivered on a compressed schedule.",
          image: "/images/projects/northgate-retail.jpg",
        },
        {
          title: "Askar Logistics Facility",
          tag: "Industrial",
          blurb: "Robust operational space designed for storage, flow, and maintenance access.",
          image: "/images/projects/askar-logistics.jpg",
        },
      ];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-royal dark:text-gold">
          {isArabic ? "أعمالنا الأخيرة" : "Recent work"}
        </p>
        <h2 className="mt-3 font-nacelle text-3xl font-semibold text-navy dark:text-paper md:text-4xl">
          {isArabic ? "مشاريع مختارة." : "Selected projects."}
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-line overflow-hidden bg-white shadow-sm dark:border-line-dark dark:bg-navy-deep/80 hover:shadow-lg transition"
          >
            <div className="relative h-48 w-full bg-gradient-to-br from-royal/20 to-gold/20 dark:from-gold/10 dark:to-royal/10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
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
                className="mt-6 inline-flex text-sm font-semibold text-royal transition hover:text-royal-light dark:text-gold dark:hover:text-gold-light"
              >
                {isArabic ? "عرض المشروع →" : "View project →"}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
