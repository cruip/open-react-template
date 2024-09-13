"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="sticky top-0 w-full">
      <div className="w-full">
        <div className="relative flex h-28 items-center justify-between gap-3 bg-gray-900/90 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm px-10">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Navbar links */}
          <ul className="flex flex-1 items-center justify-end gap-6 px-6">
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#events"
                className="text-gray-300 hover:text-white"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="#team"
                className="text-gray-300 hover:text-white"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-gray-300 hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
