import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './mobile-menu'
import headshotAvatar from '@/public/images/headshot-avatar.webp'

export default function Header() {
  return (
    <header className="w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-24">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block">
              <Image src={headshotAvatar} alt="Headshot: Keith Nickas" className="head-shot" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/cv"
                  className="btn-sm font-medium text-white hover:border-teal-600 flex items-center transition duration-150 ease-in-out hover:btn-lift"
                >
                  Resumé
                </Link>
              </li>
              <li>
                <Link href="/contact" className="btn-sm text-white bg-teal-600 hover:border-teal-600 hover:bg-transparent ml-3 hover:btn-lift">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* <MobileMenu /> */}

        </div>
      </div>
    </header>
  )
}
