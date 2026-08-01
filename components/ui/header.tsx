"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./logo";
import ThemeToggle from "./theme-toggle";
import LanguageSwitcher from "./language-switcher";

interface NavItem {
  href: string;
  label: string;
  isPage?: boolean;
}

export default function Header() {
  const params = useParams<{ locale?: string }>();
  const pathname = usePathname();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const isArabic = locale === "ar";
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHomePage = !pathname.includes("/projects") && !pathname.includes("/blog");

  const items: NavItem[] = isArabic
    ? [
        { href: `/${locale}`, label: "الرئيسية" },
        { href: `${isHomePage ? "" : `/${locale}`}#about`, label: "من نحن" },
        { href: `${isHomePage ? "" : `/${locale}`}#services`, label: "الخدمات" },
        { href: `${isHomePage ? "" : `/${locale}`}#projects`, label: "الأعمال" },
        { href: `${isHomePage ? "" : `/${locale}`}#contact`, label: "تواصل" },
        { href: `/${locale}/projects`, label: "المشاريع", isPage: true },
        { href: `/${locale}/blog`, label: "المدونة", isPage: true },
      ]
    : [
        { href: `/${locale}`, label: "Home" },
        { href: `${isHomePage ? "" : `/${locale}`}#about`, label: "About" },
        { href: `${isHomePage ? "" : `/${locale}`}#services`, label: "Services" },
        { href: `${isHomePage ? "" : `/${locale}`}#projects`, label: "Projects" },
        { href: `${isHomePage ? "" : `/${locale}`}#contact`, label: "Contact" },
        { href: `/${locale}/projects`, label: "All Projects", isPage: true },
        { href: `/${locale}/blog`, label: "Blog", isPage: true },
      ];

  useEffect(() => {
    if (!isHomePage) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["about", "services", "projects", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    
    if (href.includes("/projects") || href.includes("/blog")) {
      return;
    }
    
    e.preventDefault();
    
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) {
      window.location.href = href;
      return;
    }
    
    const basePath = href.substring(0, hashIndex);
    const targetId = href.substring(hashIndex + 1);
    
    if (basePath && basePath !== window.location.pathname) {
      window.location.href = href;
      return;
    }
    
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 100;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const isCompact = !isHomePage || isScrolled;

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 w-full"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        className={`w-full border-b backdrop-blur transition-all duration-300 ${
          isScrolled
            ? "border-line/80 bg-paper/95 shadow-sm dark:border-line-dark/60 dark:bg-navy-deep/95"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            className="flex items-center justify-between gap-3"
            animate={{
              minHeight: isCompact ? 56 : 80,
              paddingTop: isCompact ? 8 : 16,
              paddingBottom: isCompact ? 8 : 16,
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex flex-1 items-center">
              <motion.div
                animate={{
                  scale: isCompact ? 1 : 1.2,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ transformOrigin: 'left center' }}
              >
                <Logo />
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center md:flex">
              <ul
                className="flex items-center"
                style={{ direction: isArabic ? "rtl" : "ltr" }}
              >
                {items.map((item) => (
                  <li key={item.href}>
                    {item.isPage ? (
                      <Link
                        href={item.href}
                        className="relative px-2 py-2 text-sm font-medium text-navy/80 transition hover:text-royal dark:text-paper/80 dark:hover:text-gold"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`relative px-2 py-2 text-sm font-medium transition-colors ${
                          activeSection === item.href
                            ? "text-royal dark:text-gold"
                            : "text-navy/80 hover:text-royal dark:text-paper/80 dark:hover:text-gold"
                        }`}
                      >
                        {item.label}
                        {activeSection === item.href && (
                          <motion.span
                            layoutId="activeNav"
                            className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-royal dark:bg-gold"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Actions */}
            <div className="flex flex-1 items-center justify-end gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
              
              {/* Mobile Menu Toggle */}
              <button
                type="button"
                aria-label="Toggle menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper-soft/80 text-navy transition hover:border-royal hover:text-royal dark:border-line-dark dark:bg-navy-deep/80 dark:text-paper md:hidden"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
                  )}
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-auto max-w-6xl px-4 sm:px-6"
          >
            <div className="overflow-hidden rounded-2xl border border-line/80 bg-paper/95 shadow-lg backdrop-blur dark:border-line-dark/60 dark:bg-navy-deep/95">
              <ul className="flex flex-col p-4" style={{ direction: isArabic ? "rtl" : "ltr" }}>
                {items.map((item) => (
                  <li key={item.href}>
                    {item.isPage ? (
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-navy/80 hover:bg-royal/5 hover:text-royal dark:text-paper/80 dark:hover:bg-gold/5 dark:hover:text-gold"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-navy/80 hover:bg-royal/5 hover:text-royal dark:text-paper/80 dark:hover:bg-gold/5 dark:hover:text-gold"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}