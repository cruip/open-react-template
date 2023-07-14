import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";

import Logo from "@/public/images/ade_wht.png";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center"
              aria-label="Ade"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Image
                className="max-w-full mx-auto md:max-w-none h-auto"
                src={Logo}
                width={40}
                height={40}
                alt="ade image"
              />
              <h6 className="p-1 font-bold ml-2">
                👋 Hello & Welcome
              </h6>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            {/* <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="#about"
                  className="font-medium text-gray-500 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="btn-sm text-white bg-purple-800 hover:bg-purple-700 ml-3"
                >
                  Contact
                </a>
              </li>
            </ul> */}
          </nav>

          {/* <MobileMenu /> */}
        </div>
      </div>
    </header>
  );
}
