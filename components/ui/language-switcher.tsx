"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const nextLocale = locale === "ar" ? "en" : "ar";
  const href = `/${nextLocale}`;

  return (
    <motion.div
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link
        href={href}
        className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-line bg-paper-soft/80 px-3 text-sm font-semibold text-navy transition hover:border-royal hover:text-royal dark:border-line-dark dark:bg-navy-deep/80 dark:text-paper"
      >
        <motion.span
          key={locale}
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {locale === "ar" ? "EN" : "ع"}
        </motion.span>
      </Link>
    </motion.div>
  );
}