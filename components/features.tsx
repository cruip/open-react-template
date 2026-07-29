"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

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
        },
        {
          title: "التصميم الداخلي والتشطيب",
          body: "أفكار وتصاميم تتناسب مع طريقة استخدام الناس للمساحات.",
          image: "/images/services/interior-design.jpg",
        },
        {
          title: "المرافق والعاكسات",
          body: "أنظمة ميكانيكية وكهربائية وحرارية تبنى وفق المواصفات واللوائح.",
          image: "/images/services/mep.jpg",
        },
        {
          title: "مشاريع المعارض والتجزئة",
          body: "هياكل مؤقتة ودائمة للعلامات التجارية التي تحتاج إلى الظهور.",
          image: "/images/services/retail.jpg",
        },
        {
          title: "المشتريات والتوريد",
          body: "sourcing واللوجستيات للمواد والمعدات والتجهيزات.",
          image: "/images/services/procurement.jpg",
        },
        {
          title: "الدعم بعد التسليم",
          body: "صيانة واستجابة سريعة بعد تسليم المفاتيح.",
          image: "/images/services/support.jpg",
        },
      ]
    : [
        {
          title: "General Contracting",
          body: "Civil, structural, and finishing works for commercial and residential builds.",
          image: "/images/services/general-contracting.jpg",
        },
        {
          title: "Interior Design & Fit-Out",
          body: "Spaces designed around how people actually use them.",
          image: "/images/services/interior-design.jpg",
        },
        {
          title: "MEP & Insulation",
          body: "Mechanical, electrical, and thermal systems built to spec and code.",
          image: "/images/services/mep.jpg",
        },
        {
          title: "Exhibition & Retail Builds",
          body: "Temporary and permanent structures for brands that need to show up.",
          image: "/images/services/retail.jpg",
        },
        {
          title: "Procurement & Supply",
          body: "Sourcing and logistics for materials, fixtures, and equipment.",
          image: "/images/services/procurement.jpg",
        },
        {
          title: "Post-Handover Support",
          body: "Maintenance and rapid response after the keys change hands.",
          image: "/images/services/support.jpg",
        },
      ];

  return (
    <section
      id="services"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-royal dark:text-gold">
          {isArabic ? "ماذا نقدم" : "What we do"}
        </p>
        <h2 className="mt-3 font-nacelle text-3xl font-semibold text-navy dark:text-paper md:text-4xl">
          {isArabic
            ? "خدماتنا من البداية إلى النهاية."
            : "Services, end to end."}
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-line overflow-hidden bg-white shadow-sm dark:border-line-dark dark:bg-navy-deep/80 hover:shadow-lg transition"
          >
            <div className="relative h-40 w-full bg-gradient-to-br from-royal/20 to-gold/20 dark:from-gold/10 dark:to-royal/10">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-navy dark:text-paper">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-navy/70 dark:text-paper/70">
                {service.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
