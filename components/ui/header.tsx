import Link from 'next/link';
import MobileMenu from './mobile-menu';
import logo3 from '@/public/images/logo3.png';
import Image from 'next/image';

export default function Header() {
  // Define logo size for mobile and desktop
  const logoSize = {
    width: typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 150,
    height: typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 150,
  };

  return (
    <header className="absolute w-full z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 mt-16">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image 
                src={logo3} 
                width={logoSize.width} 
                height={logoSize.height} 
                alt="Logo" 
                style={{ display: 'block' }} // Ensure the image is not inline
              />
            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow ">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in (beta)
                </Link>
              </li>
              <li>
                <Link href="/experiment" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Sign up (beta)
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
