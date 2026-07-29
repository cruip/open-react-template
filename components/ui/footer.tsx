"use client";

import { useParams } from "next/navigation";
import Logo from "./logo";

export default function Footer() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const isArabic = locale === "ar";

  return (
    <footer className="border-t border-line bg-paper/80 py-10 dark:border-line-dark dark:bg-navy-deep/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-navy/70 dark:text-paper/70">
            {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>
        </div>
        <div className="grid gap-6 text-sm md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-navy dark:text-paper">
              {isArabic ? "روابط سريعة" : "Quick links"}
            </h3>
            <ul className="mt-2 space-y-2 text-navy/70 dark:text-paper/70">
              <li>
                <a
                  href="#about"
                  className="hover:text-royal dark:hover:text-gold"
                >
                  {isArabic ? "من نحن" : "About"}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-royal dark:hover:text-gold"
                >
                  {isArabic ? "الخدمات" : "Services"}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-royal dark:hover:text-gold"
                >
                  {isArabic ? "الأعمال" : "Projects"}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-navy dark:text-paper">
              {isArabic ? "تواصل" : "Contact"}
            </h3>
            <ul className="mt-2 space-y-2 text-navy/70 dark:text-paper/70">
              <li>hello@davbuilds.com</li>
              <li>+971 4 123 4567</li>
              <li>Abu Dhabi, UAE</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
