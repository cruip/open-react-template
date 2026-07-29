"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projectsData = {
  en: [
    {
      id: "riverside-hq",
      title: "Riverside Corporate HQ",
      tag: "Commercial",
      location: "Business Bay, Dubai",
      year: "2024",
      client: "Regional Operations Group",
      scope: "Full fit-out, MEP, interior design",
      area: "12,500 sq ft",
      duration: "6 months",
      image: "/images/projects/riverside-hq.jpg",
      description: "A high-performance workplace designed for a regional operations team. The project involved complete interior fit-out, mechanical and electrical systems installation, and bespoke joinery across three floors.",
      highlights: [
        "Open-plan workstations for 150+ staff",
        "Executive boardroom with AV integration",
        "Breakout zones and collaborative spaces",
        "Energy-efficient LED lighting and HVAC",
      ],
    },
    {
      id: "marina-residences",
      title: "Marina Residences Fit-Out",
      tag: "Residential",
      location: "Dubai Marina",
      year: "2024",
      client: "Private Client",
      scope: "Luxury interior fit-out",
      area: "4,200 sq ft",
      duration: "4 months",
      image: "/images/projects/marina-residences.jpg",
      description: "Luxury interior delivery with premium finishes and coordinated MEP. The residence features custom millwork, marble flooring, smart home automation, and a fully integrated kitchen and bathroom package.",
      highlights: [
        "Custom Italian marble flooring",
        "Smart home automation system",
        "Designer kitchen with integrated appliances",
        "Spa-inspired master bathroom",
      ],
    },
    {
      id: "northgate-retail",
      title: "Northgate Retail Pavilion",
      tag: "Retail",
      location: "Al Barsha, Dubai",
      year: "2023",
      client: "Northgate Properties",
      scope: "Shell & core, fit-out",
      area: "8,000 sq ft",
      duration: "3 months",
      image: "/images/projects/northgate-retail.jpg",
      description: "A fast-track retail shell and fit-out delivered on a compressed schedule. The project included structural modifications, glazing, MEP rough-in, and final fit-out for a flagship retail space.",
      highlights: [
        "Full-height structural glass facade",
        "Custom display fixtures and shelving",
        "Integrated point-of-sale systems",
        "Brand-compliant interior design",
      ],
    },
    {
      id: "askar-logistics",
      title: "Askar Logistics Facility",
      tag: "Industrial",
      location: "Al Quoz, Dubai",
      year: "2023",
      client: "Askar Logistics LLC",
      scope: "Warehouse construction, MEP",
      area: "25,000 sq ft",
      duration: "8 months",
      image: "/images/projects/askar-logistics.jpg",
      description: "Robust operational space designed for storage, flow, and maintenance access. The facility includes a warehouse, office mezzanine, loading docks, and a dedicated maintenance workshop.",
      highlights: [
        "High-bay warehouse with racking system",
        "Office mezzanine with meeting rooms",
        "Loading docks with levelers",
        "Maintenance workshop with overhead crane",
      ],
    },
  ],
  ar: [
    {
      id: "riverside-hq",
      title: "المقر الرئيسي - ريفرسايد",
      tag: "تجاري",
      location: "الخليج التجاري، دبي",
      year: "2024",
      client: "مجموعة العمليات الإقليمية",
      scope: "تشطيب كامل، كهروميكانيك، تصميم داخلي",
      area: "12,500 قدم مربع",
      duration: "6 أشهر",
      image: "/images/projects/riverside-hq.jpg",
      description: "مساحة عمل عالية الأداء صممت لفريق العمليات الإقليمي. شمل المشروع تشطيباً داخلياً كاملاً، وتركيب أنظمة ميكانيكية وكهربائية، ونجارة مخصصة في ثلاثة طوابق.",
      highlights: [
        "محطات عمل مفتوحة لأكثر من 150 موظفاً",
        "قاعة مجلس إدارة مع تكامل سمعي بصري",
        "مناطق استراحة ومساحات تعاونية",
        "إضاءة LED موفرة للطاقة وتكييف",
      ],
    },
    {
      id: "marina-residences",
      title: "تجهيز مرسى السكنية",
      tag: "سكني",
      location: "مرسى دبي",
      year: "2024",
      client: "عميل خاص",
      scope: "تشطيب داخلي فاخر",
      area: "4,200 قدم مربع",
      duration: "4 أشهر",
      image: "/images/projects/marina-residences.jpg",
      description: "تسليم داخلي فاخر مع تشطيبات مميزة وتنسيق كامل للأنظمة. يتميز السكن بأعمال نجارة مخصصة، وأرضيات رخامية، وأتمتة منزلية ذكية، ومطبخ وحمامات متكاملة.",
      highlights: [
        "أرضيات رخام إيطالي مخصصة",
        "نظام أتمتة منزلية ذكي",
        "مطبخ مصمم مع أجهزة مدمجة",
        "حمام رئيسي مستوحى من المنتجعات",
      ],
    },
    {
      id: "northgate-retail",
      title: "منصة نورث جيت للتجزئة",
      tag: "تجزئة",
      location: "البرشاء، دبي",
      year: "2023",
      client: "شركة نورث جيت العقارية",
      scope: "هيكل أساسي وتشطيب",
      area: "8,000 قدم مربع",
      duration: "3 أشهر",
      image: "/images/projects/northgate-retail.jpg",
      description: "مشروع سريع التنفيذ مع تشطيب داخلي في جدول زمني مضغوط. تضمن المشروع تعديلات هيكلية، وزجاج واجهات، وتجهيزات كهروميكانيكية، وتشطيب نهائي لمساحة تجارية رئيسية.",
      highlights: [
        "واجهة زجاجية هيكلية بارتفاع كامل",
        "تركيبات عرض وأرفف مخصصة",
        "أنظمة نقاط بيع متكاملة",
        "تصميم داخلي متوافق مع العلامة التجارية",
      ],
    },
    {
      id: "askar-logistics",
      title: "منشأة عسكر اللوجستية",
      tag: "صناعي",
      location: "القوز، دبي",
      year: "2023",
      client: "شركة عسكر للخدمات اللوجستية",
      scope: "بناء مستودع، كهروميكانيك",
      area: "25,000 قدم مربع",
      duration: "8 أشهر",
      image: "/images/projects/askar-logistics.jpg",
      description: "مساحة تشغيلية قوية مصممة للتخزين والتدفق والصيانة. تشمل المنشأة مستودعاً، وميزانين مكتبي، وأرصفة تحميل، وورشة صيانة مخصصة.",
      highlights: [
        "مستودع عالي الارتفاع مع نظام رفوف",
        "ميزانين مكتبي مع غرف اجتماعات",
        "أرصفة تحميل مع موازنات",
        "ورشة صيانة مع رافعة علوية",
      ],
    },
  ],
};

export default function ProjectsPage() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const isArabic = locale === "ar";
  const projects = projectsData[locale];

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

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero section */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl" 
          style={{ background: "radial-gradient(circle, var(--color-royal), transparent 70%)" }} 
        />
        
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-royal dark:text-gold">
              {isArabic ? "أعمالنا" : "Our work"}
            </span>
            <h1 className="mt-3 font-nacelle text-4xl font-semibold text-navy dark:text-paper md:text-5xl">
              {isArabic ? "مشاريعنا" : "Our projects"}
            </h1>
            <p className="mt-4 text-lg leading-8 text-navy/75 dark:text-paper/75">
              {isArabic
                ? "نفخر بتقديم مجموعة من مشاريعنا المختارة التي تعكس خبرتنا والتزامنا بالجودة."
                : "We take pride in presenting a selection of our projects that reflect our expertise and commitment to quality."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="group rounded-3xl border border-line overflow-hidden bg-white shadow-sm transition-all hover:shadow-xl dark:border-line-dark dark:bg-navy-deep/80"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-navy backdrop-blur">
                    {project.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-navy dark:text-paper">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-navy/70 dark:text-paper/70">
                  {project.description}
                </p>

                {/* Project details grid */}
                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-6 dark:border-line-dark">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-royal dark:text-gold">
                      {isArabic ? "الموقع" : "Location"}
                    </span>
                    <p className="mt-1 text-sm text-navy/80 dark:text-paper/80">{project.location}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-royal dark:text-gold">
                      {isArabic ? "السنة" : "Year"}
                    </span>
                    <p className="mt-1 text-sm text-navy/80 dark:text-paper/80">{project.year}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-royal dark:text-gold">
                      {isArabic ? "المساحة" : "Area"}
                    </span>
                    <p className="mt-1 text-sm text-navy/80 dark:text-paper/80">{project.area}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-royal dark:text-gold">
                      {isArabic ? "المدة" : "Duration"}
                    </span>
                    <p className="mt-1 text-sm text-navy/80 dark:text-paper/80">{project.duration}</p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-royal dark:text-gold">
                    {isArabic ? "أبرز المميزات" : "Highlights"}
                  </span>
                  <ul className="mt-2 space-y-1">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-navy/70 dark:text-paper/70">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-royal dark:text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}