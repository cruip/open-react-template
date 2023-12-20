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
      <div data-aos="fade-up">
          {/* Site branding */}
          <div className="shrink-0 ml-32 mt-8">
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
          {/* Desktop navigation */}
        </div>
      </div>
    </header>
  )
}
