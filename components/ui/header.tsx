import Link from 'next/link'
import MobileMenu from './mobile-menu'
import "./style.css"

// icons
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Header() {
    return (
        <header className="absolute w-full z-30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Site branding */}
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="flex items-center justify-between h-20">
                            {/* Site branding */}
                            <div className="shrink-0 mr-4">
                                {/* Logo */}
                                <p className="logoText">Alliance</p>
                            </div>

                        </div>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex md:grow">
                        {/* Desktop sign in links */}
                        <ul className="flex grow justify-end flex-wrap items-center">
                            <li>
                                <Link href="tel:+998903001070"
                                      className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
                                      title="Connect by phone"
                                      target="_blank"
                                      style={{borderRadius: "10px"}}>
                                    <LocalPhoneIcon/>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/alliance_uzb?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                                      className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
                                      target="_blank"
                                      title="Connect by instagram"
                                      style={{borderRadius: "10px"}}>
                                    <InstagramIcon/>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://t.me/Alliance_Uzbekistan"
                                      target="_blank"
                                      className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
                                      style={{borderRadius: "10px"}}>
                                    <TelegramIcon/>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <MobileMenu/>

                </div>
            </div>
        </header>
    )
}
