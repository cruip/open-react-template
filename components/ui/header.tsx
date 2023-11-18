import Link from 'next/link'
import MobileMenu from './mobile-menu'
import logo3 from '@/public/images/logo3.png'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="absolute w-full z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos="fade-up">
        <div className="flex items-center justify between h-60">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image className="max-w-full mx-auto md:max-w-none h-auto" src={logo3} width={150} height={150} alt="Features 01" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign-in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
