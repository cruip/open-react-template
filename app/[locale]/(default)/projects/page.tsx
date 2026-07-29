"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const projectsData = {
  en: [
    {
      id: "regional-content-messaging",
      title: "Regional Content & Messaging Overhaul",
      tag: "Content Services",
      location: "Multi-market rollout",
      year: "2024",
      client: "Regional Retail Group",
      scope: "Content strategy, messaging framework, campaign content",
      volume: "6 markets, 40+ assets/month",
      duration: "5 months",
      image: "/images/projects/content-strategy.jpg",
      description:
        "A ground-up content overhaul for a retail group expanding across six markets. We rebuilt the messaging framework from scratch, aligned every campaign brief to one voice, and stood up a repeatable content pipeline the internal team now runs independently.",
      highlights: [
        "Unified messaging framework across all markets",
        "Monthly campaign content calendar and briefs",
        "Project and case-study storytelling for sales",
        "Internal handover with content playbook",
      ],
    },
    {
      id: "digital-platform-build",
      title: "Full-Stack Digital Platform Build",
      tag: "Digital Solutions",
      location: "Cairo, Egypt",
      year: "2024",
      client: "B2B Distribution Company",
      scope: "Website, e-commerce store, ERP + CRM integration",
      volume: "3 systems, single sign-on",
      duration: "7 months",
      image: "/images/projects/digital-solutions.jpg",
      description:
        "A complete digital backbone for a distribution company still running on spreadsheets. We delivered a public website, a B2B ordering storefront, and connected both to a new ERP and CRM so sales, inventory, and customer data finally live in one place.",
      highlights: [
        "Corporate website and B2B e-commerce store",
        "ERP system for inventory and operations",
        "CRM system for the sales team",
        "Smart landing pages for lead generation",
      ],
    },
    {
      id: "corporate-rebrand",
      title: "Corporate Rebrand & Identity System",
      tag: "Brand & Design",
      location: "Cairo, Egypt",
      year: "2023",
      client: "Financial Services Firm",
      scope: "Visual identity, brand guidelines, collateral suite",
      volume: "Full identity system",
      duration: "3 months",
      image: "/images/projects/brand-identity.jpg",
      description:
        "A full identity system built for a financial services firm outgrowing its original logo. The engagement covered brand strategy, mark design, a documented guideline set, and every piece of collateral the team touches day to day.",
      highlights: [
        "Complete visual identity and brand guidelines",
        "Social media content design templates",
        "Digital and print advertising assets",
        "Corporate brochures and company profile",
      ],
    },
    {
      id: "tender-qualification-program",
      title: "Government Tender Qualification Program",
      tag: "Tenders & Contracts",
      location: "Cairo, Egypt",
      year: "2023",
      client: "Industrial Supply Company",
      scope: "Vendor qualification, tender tracking, proposal prep",
      volume: "12 government tenders",
      duration: "Ongoing retainer",
      image: "/images/projects/tenders-contracts.jpg",
      description:
        "An ongoing engagement qualifying an industrial supplier as an approved government vendor and managing its tender pipeline end to end — from opportunity tracking through technical and financial proposal submission and post-award dues recovery.",
      highlights: [
        "Vendor qualification and compliance documentation",
        "Continuous tracking of relevant government tenders",
        "Technical and financial proposal preparation",
        "Post-award government dues recovery support",
      ],
    },
  ],
  ar: [
    {
      id: "regional-content-messaging",
      title: "إعادة هيكلة المحتوى والرسائل الإقليمية",
      tag: "خدمات المحتوى",
      location: "طرح متعدد الأسواق",
      year: "2024",
      client: "مجموعة تجزئة إقليمية",
      scope: "استراتيجية المحتوى، إطار الرسائل، محتوى الحملات",
      volume: "6 أسواق، أكثر من 40 مادة شهرياً",
      duration: "5 أشهر",
      image: "/images/projects/content-strategy.jpg",
      description:
        "إعادة هيكلة كاملة للمحتوى لمجموعة تجزئة تتوسع في ستة أسواق. أعدنا بناء إطار الرسائل من الصفر، ووحّدنا صوت كل موجز حملة، وأسسنا خط إنتاج محتوى متكرر يديره الفريق الداخلي الآن باستقلالية.",
      highlights: [
        "إطار رسائل موحد عبر جميع الأسواق",
        "تقويم ومواجيز محتوى حملات شهرية",
        "صياغة قصص المشاريع ودراسات الحالة لفريق المبيعات",
        "تسليم داخلي مع دليل عمل للمحتوى",
      ],
    },
    {
      id: "digital-platform-build",
      title: "بناء منصة رقمية متكاملة",
      tag: "الحلول الرقمية",
      location: "القاهرة، مصر",
      year: "2024",
      client: "شركة توزيع بين الشركات",
      scope: "موقع إلكتروني، متجر إلكتروني، تكامل ERP وCRM",
      volume: "3 أنظمة، تسجيل دخول موحد",
      duration: "7 أشهر",
      image: "/images/projects/digital-solutions.jpg",
      description:
        "بنية رقمية كاملة لشركة توزيع كانت لا تزال تعتمد على جداول البيانات. سلّمنا موقعاً إلكترونياً، ومتجراً للطلبات بين الشركات، وربطنا كليهما بنظام ERP وCRM جديدين حتى تجتمع بيانات المبيعات والمخزون والعملاء أخيراً في مكان واحد.",
      highlights: [
        "موقع إلكتروني للشركة ومتجر إلكتروني بين الشركات",
        "نظام ERP لإدارة المخزون والعمليات",
        "نظام CRM لفريق المبيعات",
        "صفحات هبوط ذكية لتوليد العملاء المحتملين",
      ],
    },
    {
      id: "corporate-rebrand",
      title: "إعادة تصميم الهوية المؤسسية",
      tag: "الهوية والتصميم",
      location: "القاهرة، مصر",
      year: "2023",
      client: "شركة خدمات مالية",
      scope: "الهوية البصرية، دليل العلامة التجارية، مواد الشركة",
      volume: "نظام هوية متكامل",
      duration: "3 أشهر",
      image: "/images/projects/brand-identity.jpg",
      description:
        "نظام هوية متكامل لشركة خدمات مالية تجاوز نموها شعارها الأصلي. شمل المشروع استراتيجية العلامة التجارية، تصميم الشعار، دليل موثق للهوية، وكل مادة تسويقية يتعامل معها الفريق يومياً.",
      highlights: [
        "هوية بصرية كاملة ودليل علامة تجارية",
        "قوالب تصميم محتوى منصات التواصل",
        "مواد إعلانية رقمية ومطبوعة",
        "بروشورات الشركة والملف التعريفي",
      ],
    },
    {
      id: "tender-qualification-program",
      title: "برنامج تأهيل المناقصات الحكومية",
      tag: "المناقصات والعقود",
      location: "القاهرة، مصر",
      year: "2023",
      client: "شركة توريدات صناعية",
      scope: "تأهيل الموردين، متابعة المناقصات، إعداد العروض",
      volume: "12 مناقصة حكومية",
      duration: "تعاقد مستمر",
      image: "/images/projects/tenders-contracts.jpg",
      description:
        "تعاقد مستمر لتأهيل مورد صناعي كمورد حكومي معتمد وإدارة خط مناقصاته من الألف إلى الياء — من متابعة الفرص وحتى تقديم العروض الفنية والمالية واسترداد المستحقات بعد الترسية.",
      highlights: [
        "تأهيل الموردين وتوثيق الامتثال",
        "متابعة مستمرة للمناقصات ذات الصلة",
        "إعداد العروض الفنية والمالية",
        "دعم استرداد المستحقات الحكومية بعد الترسية",
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
        <div
          className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-royal), transparent 70%)",
          }}
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
                ? "نماذج من مشاريعنا عبر المحتوى، الحلول الرقمية، الهوية، والمناقصات — تعكس خبرتنا كشريك تشغيلي متكامل."
                : "A selection of work across content, digital solutions, brand, and tenders — reflecting our role as a full operational partner."}
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
                      {isArabic ? "العميل" : "Client"}
                    </span>
                    <p className="mt-1 text-sm text-navy/80 dark:text-paper/80">
                      {project.client}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-royal dark:text-gold">
                      {isArabic ? "السنة" : "Year"}
                    </span>
                    <p className="mt-1 text-sm text-navy/80 dark:text-paper/80">
                      {project.year}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-royal dark:text-gold">
                      {isArabic ? "النطاق" : "Volume"}
                    </span>
                    <p className="mt-1 text-sm text-navy/80 dark:text-paper/80">
                      {project.volume}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-royal dark:text-gold">
                      {isArabic ? "المدة" : "Duration"}
                    </span>
                    <p className="mt-1 text-sm text-navy/80 dark:text-paper/80">
                      {project.duration}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-royal dark:text-gold">
                    {isArabic ? "أبرز المميزات" : "Highlights"}
                  </span>
                  <ul className="mt-2 space-y-1">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-navy/70 dark:text-paper/70"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-royal dark:text-gold"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
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
