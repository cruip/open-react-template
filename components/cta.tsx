"use client";

import { FormEvent, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
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
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 -z-10 h-80 w-80 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-gold), transparent 70%)" }}
      />

      <motion.div
        className="rounded-[2rem] border border-line bg-white p-8 shadow-sm dark:border-line-dark dark:bg-navy-deep/80 md:p-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-royal dark:text-gold">
              {isArabic ? "تواصل معنا" : "Let's talk"}
            </span>
            <h2 className="mt-3 font-nacelle text-3xl font-semibold text-navy dark:text-paper md:text-4xl">
              {isArabic ? "أخبرنا عن مشروعك." : "Tell us about your project."}
            </h2>
            <p className="mt-4 text-lg leading-8 text-navy/75 dark:text-paper/75">
              {isArabic
                ? "أرسل النموذج وسنعود إليك خلال يوم عمل واحد على الأقل."
                : "Fill in the form and our team will get back to you within one business day."}
            </p>
            <div className="mt-8 space-y-3 text-sm text-navy/70 dark:text-paper/70">
              {[
                { icon: "phone", value: siteConfig.phone },
                { icon: "email", value: siteConfig.email },
                { icon: "location", value: siteConfig.address },
              ].map((item) => (
                <div key={item.icon} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-royal/10 text-royal dark:bg-gold/10 dark:text-gold">
                    {item.icon === "phone" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {item.icon === "email" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {item.icon === "location" && (
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col text-sm font-medium text-navy dark:text-paper">
                <span className="mb-2">
                  {isArabic ? "الاسم الكامل" : "Full name"}
                </span>
                <input
                  required
                  name="from_name"
                  className="rounded-xl border border-line bg-paper-soft px-4 py-3 outline-none ring-0 transition-all focus:border-royal focus:ring-2 focus:ring-royal/20 dark:border-line-dark dark:bg-navy-deep/70 dark:focus:border-gold dark:focus:ring-gold/20"
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
                  className="rounded-xl border border-line bg-paper-soft px-4 py-3 outline-none ring-0 transition-all focus:border-royal focus:ring-2 focus:ring-royal/20 dark:border-line-dark dark:bg-navy-deep/70 dark:focus:border-gold dark:focus:ring-gold/20"
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
                className="rounded-xl border border-line bg-paper-soft px-4 py-3 outline-none ring-0 transition-all focus:border-royal focus:ring-2 focus:ring-royal/20 dark:border-line-dark dark:bg-navy-deep/70 dark:focus:border-gold dark:focus:ring-gold/20"
              />
            </label>
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-gold px-6 py-3 font-semibold text-white transition-all hover:bg-gold-light disabled:opacity-70"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                {status === "sending" && (
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {status === "sending"
                  ? isArabic ? "جارٍ الإرسال…" : "Sending…"
                  : isArabic ? "إرسال الرسالة" : "Send message"}
              </span>
            </motion.button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-royal dark:text-gold"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {isArabic
                  ? "تم إرسال الرسالة — سنعاود التواصل قريبًا."
                  : "Message sent — we'll be in touch shortly."}
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-red-600"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {isArabic
                  ? "حدث خطأ. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة."
                  : "Something went wrong. Please try again or email us directly."}
              </motion.p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}