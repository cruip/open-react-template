import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import IconTransparent from "../../public/images/logo_long_transparent.png";

export default function Header() {
  return (
    <header className="absolute w-full z-30 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" aria-label="Cruip">
              <Image src={IconTransparent} alt="Logo-Home" className="h-16 w-full" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <Link
              href="/"
              className="font-medium text-black hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="/calendar"
              className="font-medium text-black hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
            >
              App
            </Link>
            <Link
              href="/pricing"
              className="font-medium text-black hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
            >
              Pricing
            </Link>
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                {/* <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link> */}
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-emerald-600 hover:bg-purple-700 ml-3">
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
