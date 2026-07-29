"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function LanguageSwitcher() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const nextLocale = locale === "ar" ? "en" : "ar";
  const href = `/${nextLocale}`;

  return (
    <Link
      href={href}
      className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-line bg-paper-soft/80 px-3 text-sm font-semibold text-navy transition hover:border-royal hover:text-royal dark:border-line-dark dark:bg-navy-deep/80 dark:text-paper"
    >
      {locale === "ar" ? "EN" : "ع"}
    </Link>
  );
}
