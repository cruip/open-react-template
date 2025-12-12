"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Navigation links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/products"
                className="btn-sm bg-white py-[5px] text-gray-800 border border-gray-300 hover:bg-gray-50"
              >
                Каталог
              </Link>
            </li>
              <li>
              <Link
                href="/about"
                className="btn-sm bg-white py-[5px] text-gray-800 border border-gray-300 hover:bg-gray-50"
              >
                О нас
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                Контакты
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
