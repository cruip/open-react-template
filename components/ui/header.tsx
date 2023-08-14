import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Logo from "@/icons/logo";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-16">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Logo />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="list-none flex gap-12">
            <li>
              <Link href={""}>Home</Link>
            </li>
            <li>
              <Link href={""}>Solutions</Link>
            </li>
            <li>
              <Link href={""}>About us</Link>
            </li>
            <li>
              <Link href={""}>Contact us</Link>
            </li>
            </ul>
          </nav>
          
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
