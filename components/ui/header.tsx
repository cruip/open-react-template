"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./logo";
import ThemeToggle from "./theme-toggle";
import LanguageSwitcher from "./language-switcher";

interface NavItem {
  href: string;
  label: string;
  isPage?: boolean;
}

type ScrollState = "top" | "compact" | "hidden";

// ---- Scroll thresholds (px) ----
const TOP_SCROLL_THRESHOLD = 10; // scrollY <= this → "top" size
const COMPACT_SCROLL_THRESHOLD = 120; // scrollY > this → can be "compact" or "hidden"

// ---- Sizing (px) ----
const TOP_MIN_HEIGHT = 104;
const TOP_PADDING = 30;
const COMPACT_MIN_HEIGHT = 56;
const COMPACT_PADDING = 8;

// ---- Logo scale ----
const TOP_LOGO_SCALE = 1.8;
const COMPACT_LOGO_SCALE = 1;

// ---- Transition durations (seconds) ----
const RESIZE_TRANSITION_S = 0.4; // top ↔ compact
const HIDE_TRANSITION_S = 0.25; // compact ↔ hidden (snappier)

// Shared easing signature used across the site
const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function Header() {
  const params = useParams<{ locale?: string }>();
  const pathname = usePathname();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const isArabic = locale === "ar";
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollState, setScrollState] = useState<ScrollState>("top");
  const prevScrollY = useRef(0);
  const scrollDirection = useRef<"up" | "down">("down");
  const rafId = useRef<number | null>(null);

  const isHomePage =
    !pathname.includes("/projects") && !pathname.includes("/blog");

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

  // Section highlight tracking
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
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

  // Combined scroll handler: size states + direction-aware hide/show
  // Same behavior on ALL pages — home, projects, blog, etc.
  useEffect(() => {
    setScrollState("top");

    const handleScroll = () => {
      // Throttle with a single rAF frame
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        const currentY = window.scrollY;

        // Track direction
        if (currentY > prevScrollY.current) {
          scrollDirection.current = "down";
        } else if (currentY < prevScrollY.current) {
          scrollDirection.current = "up";
        }

        prevScrollY.current = currentY;

        // Three explicit states — same on every page
        if (currentY <= TOP_SCROLL_THRESHOLD) {
          setScrollState("top");
        } else if (currentY > COMPACT_SCROLL_THRESHOLD) {
          if (scrollDirection.current === "down" && !mobileMenuOpen) {
            setScrollState("hidden");
          } else {
            setScrollState("compact");
          }
        } else {
          // Between threshold and hero-bottom → transition zone, keep visible
          setScrollState("compact");
        }

        rafId.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [mobileMenuOpen]);

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

  // Never hide the navbar while the mobile drawer is open
  const effectiveState: ScrollState =
    mobileMenuOpen && scrollState === "hidden" ? "compact" : scrollState;

  const isTop = effectiveState === "top";
  const isCompact = effectiveState === "compact";
  const isHidden = effectiveState === "hidden";

  const minHeight = isTop ? TOP_MIN_HEIGHT : COMPACT_MIN_HEIGHT;
  const padding = isTop ? TOP_PADDING : COMPACT_PADDING;
  const logoScale = isTop ? TOP_LOGO_SCALE : COMPACT_LOGO_SCALE;

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 w-full"
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isHidden ? "-100%" : 0,
      }}
      transition={{ duration: HIDE_TRANSITION_S, ease: "easeOut" }}
      style={{ pointerEvents: isHidden ? "none" : "auto" }}
      aria-hidden={isHidden}
      tabIndex={isHidden ? -1 : undefined}
    >
      <motion.div
        className={`w-full border-b backdrop-blur transition-all duration-300 ${
          isTop
            ? "border-transparent bg-transparent"
            : "border-line/80 bg-paper/90 shadow-sm dark:border-line-dark/60 dark:bg-navy-deep/90"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            className="flex items-center justify-between gap-3"
            animate={{
              minHeight,
              paddingTop: padding,
              paddingBottom: padding,
            }}
            transition={{ duration: RESIZE_TRANSITION_S, ease: EASE }}
          >
            <div className="flex flex-1 items-center">
              <motion.div
                animate={{
                  scale: logoScale,
                }}
                transition={{ duration: RESIZE_TRANSITION_S, ease: EASE }}
                style={{ transformOrigin: "left center" }}
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