"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Logo() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const isArabic = locale === "ar";
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && (resolvedTheme ?? "light") === "dark";
  const logoSrc = isDark
    ? "/images/Dam%20Assets/Logo%201.png"
    : "/images/Dam%20Assets/Logo%202.png";

  return (
    <Link
      href={`/${locale}`}
      className="inline-flex shrink-0 items-center gap-3"
      aria-label="DAM"
    >
      <Image
        src={logoSrc}
        alt="DAM Logo"
        width={144}
        height={64}
        className="h-8 w-auto object-contain"
        sizes="144px"
        priority
      />
      {isArabic ? (
        <span className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
          دعم
        </span>
      ) : (
        <span className="hidden text-sm font-semibold uppercase tracking-[0.3em] text-navy dark:text-paper sm:inline">
          DAM
        </span>
      )}
    </Link>
  );
}