import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './mobile-menu'
import headshotAvatar from '@/public/images/headshot-avatar.webp'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-24">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image src={headshotAvatar} alt="Headshot: Keith Nickas" className="head-shot" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {/* <li>
                <Link
                  href="/cv"
                  className="font-medium text-teal-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Resumé
                </Link>
              </li> */}
              {/* <li>
                <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Sign up
                </Link>
              </li> */}
            </ul>
          </nav>

          {/* <MobileMenu /> */}

        </div>
      </div>
    </header>
  )
}
