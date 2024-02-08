import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <svg xmlns="http://www.w3.org/2000/svg" width="103" height="28" viewBox="0 0 103 28" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M31 6L1 2L2 21H8.5L14 27L13 21H28L31 6Z" fill="#F12B15" />
                <path d="M43.194 19.065C41.478 19.065 40.165 18.6707 39.255 17.882C38.345 17.0847 37.89 15.906 37.89 14.346C37.89 12.7947 38.345 11.6203 39.255 10.823C40.165 10.0257 41.478 9.63133 43.194 9.64L47.874 9.666V11.33H43.337C42.2103 11.33 41.374 11.5683 40.828 12.045C40.282 12.5217 40.009 13.2887 40.009 14.346C40.009 15.4033 40.282 16.1747 40.828 16.66C41.374 17.1367 42.2103 17.375 43.337 17.375H48.004V19.065H43.194ZM54.2796 19V15.685L49.3526 9.705H51.9266L55.3196 13.917L58.6996 9.705H61.2736L56.3726 15.672V19H54.2796ZM66.9499 19.065C65.2339 19.065 63.9209 18.6707 63.0109 17.882C62.1009 17.0847 61.6459 15.906 61.6459 14.346C61.6459 12.7947 62.1009 11.6203 63.0109 10.823C63.9209 10.0257 65.2339 9.63133 66.9499 9.64L71.6299 9.666V11.33H67.0929C65.9663 11.33 65.1299 11.5683 64.5839 12.045C64.0379 12.5217 63.7649 13.2887 63.7649 14.346C63.7649 15.4033 64.0379 16.1747 64.5839 16.66C65.1299 17.1367 65.9663 17.375 67.0929 17.375H71.7599V19.065H66.9499ZM74.0185 19V9.705H76.0985V17.31H82.8975V19H74.0185ZM85.1602 19V9.705H95.3522V11.395H87.2402V13.449H94.5982V15.139H87.2402V17.31H95.3522V19H85.1602Z" fill="#F12B15" />
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-red-100 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-red-100 hover:bg-red-100/75 ml-3">
                  Sign up
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
