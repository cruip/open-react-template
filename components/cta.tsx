"use client";

import { FormEvent, useState } from "react";
import { useParams } from "next/navigation";
import emailjs from "@emailjs/browser";
import { siteConfig } from "@/config/site";

export default function Cta() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const isArabic = locale === "ar";
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    try {
      await emailjs.sendForm(
        siteConfig.emailJs.serviceId,
        siteConfig.emailJs.templateId,
        form,
        siteConfig.emailJs.publicKey,
      );
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24"
    >
      <div className="rounded-[2rem] border border-line bg-white p-8 shadow-sm dark:border-line-dark dark:bg-navy-deep/80 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-aos="fade-right">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-royal dark:text-gold">
              {isArabic ? "تواصل معنا" : "Let's talk"}
            </p>
            <h2 className="mt-3 font-nacelle text-3xl font-semibold text-navy dark:text-paper md:text-4xl">
              {isArabic ? "أخبرنا عن مشروعك." : "Tell us about your project."}
            </h2>
            <p className="mt-4 text-lg leading-8 text-navy/75 dark:text-paper/75">
              {isArabic
                ? "أرسل النموذج وسنعود إليك خلال يوم عمل واحد على الأقل."
                : "Fill in the form and our team will get back to you within one business day."}
            </p>
            <div className="mt-8 space-y-3 text-sm text-navy/70 dark:text-paper/70">
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
              <p>{siteConfig.address}</p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            data-aos="fade-left"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col text-sm font-medium text-navy dark:text-paper">
                <span className="mb-2">
                  {isArabic ? "الاسم الكامل" : "Full name"}
                </span>
                <input
                  required
                  name="from_name"
                  className="rounded-xl border border-line bg-paper-soft px-4 py-3 outline-none ring-0 dark:border-line-dark dark:bg-navy-deep/70"
                />
              </label>
              <label className="flex flex-col text-sm font-medium text-navy dark:text-paper">
                <span className="mb-2">
                  {isArabic ? "البريد الإلكتروني" : "Email address"}
                </span>
                <input
                  required
                  type="email"
                  name="reply_to"
                  className="rounded-xl border border-line bg-paper-soft px-4 py-3 outline-none ring-0 dark:border-line-dark dark:bg-navy-deep/70"
                />
              </label>
            </div>
            <label className="flex flex-col text-sm font-medium text-navy dark:text-paper">
              <span className="mb-2">
                {isArabic ? "تفاصيل المشروع" : "Project details"}
              </span>
              <textarea
                required
                name="message"
                rows={6}
                className="rounded-xl border border-line bg-paper-soft px-4 py-3 outline-none ring-0 dark:border-line-dark dark:bg-navy-deep/70"
              />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-gold px-6 py-3 font-semibold text-white transition hover:bg-gold-light disabled:opacity-70"
            >
              {status === "sending"
                ? isArabic
                  ? "جارٍ الإرسال…"
                  : "Sending…"
                : isArabic
                  ? "إرسال الرسالة"
                  : "Send message"}
            </button>
            {status === "success" && (
              <p className="text-sm text-royal dark:text-gold">
                {isArabic
                  ? "تم إرسال الرسالة — سنعاود التواصل قريبًا."
                  : "Message sent — we’ll be in touch shortly."}
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600">
                {isArabic
                  ? "حدث خطأ. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة."
                  : "Something went wrong. Please try again or email us directly."}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
