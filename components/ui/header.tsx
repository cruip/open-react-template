"use client";

import { useState } from "react";
import Logo from "./logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    {
      name: "Services",
      href: "#services",
      dropdown: [
        { name: "Surveying & Mapping", href: "#services" },
        { name: "Inspection & Monitoring", href: "#services" },
        { name: "Security & Surveillance", href: "#services" },
        { name: "Aerial Photography", href: "#services" },
        { name: "Thermal Imaging", href: "#services" },
        { name: "Engineering Services", href: "#services" },
        { name: "Training & Consulting", href: "#services" },
      ],
    },
    {
      name: "Industries",
      href: "#industries",
      dropdown: [
        { name: "Oil & Gas", href: "#industries" },
        { name: "Construction", href: "#industries" },
        { name: "Energy & Utilities", href: "#industries" },
        { name: "Mining", href: "#industries" },
        { name: "Agriculture", href: "#industries" },
        { name: "Real Estate", href: "#industries" },
        { name: "Defense & Security", href: "#industries" },
      ],
    },
    { name: "Products", href: "#products" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-[#1e2a32]/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,#3a4a55,#4a5a65,#3a4a55)_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-cadet-blue hover:text-warm-sand transition-colors"
                >
                  {item.name}
                  {item.dropdown && (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-[#1e2a32] rounded-lg border border-[#3a4a55] shadow-xl py-2 z-50">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-cadet-blue hover:text-warm-sand hover:bg-charcoal-blue transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="btn-sm bg-warm-sand text-[#1e2a32] font-semibold py-[5px] px-4 rounded-lg hover:bg-[#d4b89a] transition-colors"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 text-cadet-blue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-[#1e2a32] rounded-xl border border-[#3a4a55] overflow-hidden">
            <nav className="py-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 text-cadet-blue hover:text-warm-sand hover:bg-charcoal-blue transition-colors"
                    onClick={() => {
                      if (!item.dropdown) setMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                    {item.dropdown && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>
                  {item.dropdown && (
                    <div className="bg-charcoal-blue/50 py-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-8 py-2 text-sm text-cadet-blue/80 hover:text-warm-sand transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4 border-t border-[#3a4a55] mt-4">
                <a
                  href="#contact"
                  className="block w-full text-center bg-warm-sand text-[#1e2a32] font-semibold py-3 rounded-lg hover:bg-[#d4b89a] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
