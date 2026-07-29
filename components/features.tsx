"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function Features() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const isArabic = locale === "ar";

  const services = isArabic
    ? [
        {
          title: "المقاولات العامة",
          body: "أعمال مدنية وإنشائية وتشطيب للمشروعات التجارية والسكنية.",
          image: "/images/services/general-contracting.jpg",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          title: "التصميم الداخلي والتشطيب",
          body: "أفكار وتصاميم تتناسب مع طريقة استخدام الناس للمساحات.",
          image: "/images/services/interior-design.jpg",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          title: "المرافق والعاكسات",
          body: "أنظمة ميكانيكية وكهربائية وحرارية تبنى وفق المواصفات واللوائح.",
          image: "/images/services/mep.jpg",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          title: "مشاريع المعارض والتجزئة",
          body: "هياكل مؤقتة ودائمة للعلامات التجارية التي تحتاج إلى الظهور.",
          image: "/images/services/retail.jpg",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          title: "المشتريات والتوريد",
          body: "sourcing واللوجستيات للمواد والمعدات والتجهيزات.",
          image: "/images/services/procurement.jpg",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          title: "الدعم بعد التسليم",
          body: "صيانة واستجابة سريعة بعد تسليم المفاتيح.",
          image: "/images/services/support.jpg",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M11.42 15.17l-2.49 2.49m0 0l-2.49-2.49m2.49 2.49V3m5.66 5.66l2.49-2.49m0 0l2.49 2.49M16.5 12h6m-6 3.75h6M16.5 8.25h6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
      ]
    : [
        {
          title: "General Contracting",
          body: "Civil, structural, and finishing works for commercial and residential builds.",
          image: "/images/services/general-contracting.jpg",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          title: "Interior Design & Fit-Out",
          body: "Spaces designed around how people actually use them.",
          image: "/images/services/interior-design.jpg",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          title: "MEP & Insulation",
          body: "Mechanical, electrical, and thermal systems built to spec and code.",
          image: "/images/services/mep.jpg",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          title: "Exhibition & Retail Builds",
          body: "Temporary and permanent structures for brands that need to show up.",
          image: "/images/services/retail.jpg",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          title: "Procurement & Supply",
          body: "Sourcing and logistics for materials, fixtures, and equipment.",
          image: "/images/services/procurement.jpg",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          title: "Post-Handover Support",
          body: "Maintenance and rapid response after the keys change hands.",
          image: "/images/services/support.jpg",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M11.42 15.17l-2.49 2.49m0 0l-2.49-2.49m2.49 2.49V3m5.66 5.66l2.49-2.49m0 0l2.49 2.49M16.5 12h6m-6 3.75h6M16.5 8.25h6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
      ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section
      id="services"
      className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-80 w-80 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-gold), transparent 70%)" }}
      />

      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-royal dark:text-gold">
          {isArabic ? "ماذا نقدم" : "What we do"}
        </span>
        <h2 className="mt-3 font-nacelle text-3xl font-semibold text-navy dark:text-paper md:text-4xl">
          {isArabic
            ? "خدماتنا من البداية إلى النهاية."
            : "Services, end to end."}
        </h2>
      </motion.div>

      <motion.div
        className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {services.map((service) => (
          <motion.article
            key={service.title}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group rounded-2xl border border-line overflow-hidden bg-white shadow-sm transition-all hover:border-royal/30 hover:shadow-lg dark:border-line-dark dark:bg-navy-deep/80 dark:hover:border-gold/30"
          >
            <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-royal/20 to-gold/20 dark:from-gold/10 dark:to-royal/10">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-royal/10 text-royal dark:bg-gold/10 dark:text-gold">
                {service.icon}
              </div>
              <h3 className="font-semibold text-navy dark:text-paper">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-navy/70 dark:text-paper/70">
                {service.body}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}