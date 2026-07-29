"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Logo from "./logo";
import ThemeToggle from "./theme-toggle";
import LanguageSwitcher from "./language-switcher";

export default function Header() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const isArabic = locale === "ar";

  const items = isArabic
    ? [
        { href: "#about", label: "من نحن" },
        { href: "#services", label: "الخدمات" },
        { href: "#projects", label: "الأعمال" },
        { href: "#contact", label: "تواصل" },
      ]
    : [
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
      ];

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl border border-line/80 bg-paper/90 px-3 shadow-sm backdrop-blur dark:border-line-dark/60 dark:bg-navy-deep/90">
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          <ul className="flex flex-1 items-center justify-end gap-2">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-navy/80 transition hover:text-royal dark:text-paper/80 dark:hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <LanguageSwitcher />
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
