import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 my-4 mr-4">
            {/* Logo */}
            <Link href="/" className="block flex items-center text-purple-600 font-extrabold" aria-label="AppZenith">
              <Image className="rounded-full" src={Logo} width={80} height={80} alt="AppZenith" />
              AppZenith
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop nav links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/get-started" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3 rounded">
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
