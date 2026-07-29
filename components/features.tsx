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
          title: "خدمات المحتوى",
          body: "استراتيجيات المحتوى، صياغة الرسائل التسويقية، ومحتوى الحملات الإعلانية.",
          image: "/images/services/content-strategy.jpg",
          icon: (
            <svg
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
            </svg>
          ),
        },
        {
          title: "الحلول الرقمية",
          body: "مواقع إلكترونية، متاجر، أنظمة ERP وCRM، وصفحات هبوط ذكية.",
          image: "/images/services/digital-solutions.jpg",
          icon: (
            <svg
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
            </svg>
          ),
        },
        {
          title: "الهوية والتصميم الإبداعي",
          body: "هوية بصرية متكاملة، إعلانات رقمية ومطبوعة، وملفات الشركات.",
          image: "/images/services/brand-identity.jpg",
          icon: (
            <svg
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
            </svg>
          ),
        },
        {
          title: "التدريب والتطوير",
          body: "التدريب على المنصات الحكومية، تدريب فرق المبيعات، ومهارات التسويق الرقمي.",
          image: "/images/services/training-development.jpg",
          icon: (
            <svg
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
            </svg>
          ),
        },
        {
          title: "تمكين الموارد البشرية",
          body: "الاستقطاب والتوظيف، إدارة عمليات الموارد البشرية، والمنصات الحكومية.",
          image: "/images/services/hr-enablement.jpg",
          icon: (
            <svg
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
            </svg>
          ),
        },
        {
          title: "إدارة المناقصات والعقود",
          body: "تأهيل الموردين، متابعة المناقصات، وإعداد العروض الفنية والمالية.",
          image: "/images/services/tenders-contracts.jpg",
          icon: (
            <svg
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
            </svg>
          ),
        },
      ]
    : [
        {
          title: "Content Services",
          body: "Content strategy, marketing messaging, and campaign content that gets read.",
          image: "/images/services/content-strategy.jpg",
          icon: (
            <svg
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
            </svg>
          ),
        },
        {
          title: "Digital Solutions",
          body: "Websites, online stores, ERP and CRM systems, and smart landing pages.",
          image: "/images/services/digital-solutions.jpg",
          icon: (
            <svg
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
            </svg>
          ),
        },
        {
          title: "Brand & Creative Design",
          body: "Visual identity, digital and print ads, and corporate collateral.",
          image: "/images/services/brand-identity.jpg",
          icon: (
            <svg
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
            </svg>
          ),
        },
        {
          title: "Training & Development",
          body: "Government platform training, sales coaching, and digital marketing upskilling.",
          image: "/images/services/training-development.jpg",
          icon: (
            <svg
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
            </svg>
          ),
        },
        {
          title: "HR Enablement",
          body: "Recruitment, hiring support, HR operations, and government platform management.",
          image: "/images/services/hr-enablement.jpg",
          icon: (
            <svg
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
            </svg>
          ),
        },
        {
          title: "Tender & Contract Management",
          body: "Vendor qualification, tender tracking, and technical/financial proposal preparation.",
          image: "/images/services/tenders-contracts.jpg",
          icon: (
            <svg
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
          {isArabic ? "ماذا نقدم" : "What we do"}
        </span>
        <h2 className="mt-3 font-nacelle text-3xl font-semibold text-navy dark:text-paper md:text-4xl">
          {isArabic
            ? "ست خدمات، فريق واحد مسؤول."
            : "Six services, one accountable team."}
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
