"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const isArabic = locale === "ar";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 100;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const quickLinks = isArabic
    ? [
        { href: "#about", label: "من نحن" },
        { href: "#services", label: "الخدمات" },
        { href: "#projects", label: "مشاريعنا" },
        { href: "#contact", label: "تواصل معنا" },
      ]
    : [
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
      ];

  return (
    <footer className="relative border-t border-line bg-paper-soft/80 dark:border-line-dark dark:bg-navy-deep/90">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-32 w-32 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-royal), transparent 70%)" }}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2"
            >
              <span className={`text-lg font-bold uppercase tracking-[0.3em] ${isArabic ? 'text-gold' : 'text-navy dark:text-paper'}`}>
                {isArabic ? "دعم" : "DAM"}
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-6 text-navy/60 dark:text-paper/60">
              {isArabic
                ? "شريكك الهندسي والتصميمي في أعمال التشييد والتطوير."
                : "Your structural & design partner in construction and development."}
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-navy dark:text-paper">
              {isArabic ? "روابط سريعة" : "Quick links"}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-navy/70 transition hover:text-royal dark:text-paper/70 dark:hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-navy dark:text-paper">
              {isArabic ? "معلومات الاتصال" : "Contact info"}
            </h3>
            <ul className="space-y-3 text-sm text-navy/70 dark:text-paper/70">
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-royal dark:text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-royal dark:text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-royal dark:text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 dark:border-line-dark md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xs text-navy/50 dark:text-paper/50">
            &copy; {new Date().getFullYear()} {isArabic ? "دعم" : "DAM"}. {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>
          <p className="text-xs text-navy/40 dark:text-paper/40">
            {isArabic ? "تصميم وتطوير دعم" : "Designed & built by DAM"}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}