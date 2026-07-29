"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && (resolvedTheme ?? "light") === "dark";
  const logoSrc = isDark
    ? "/images/Dam%20Assets/Logo%201.png"
    : "/images/Dam%20Assets/Logo%202.png";

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-3"
      aria-label="DAV"
    >
      {mounted ? (
        <Image
          src={logoSrc}
          alt="DAV Logo"
          width={72}
          height={32}
          className="h-8 w-auto object-contain"
          priority
        />
      ) : (
        <div className="h-8 w-16 bg-navy/10 dark:bg-paper/10 rounded" />
      )}
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-navy dark:text-paper">
        DAV
      </span>
    </Link>
  );
}
