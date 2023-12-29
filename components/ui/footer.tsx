import React from 'react'
import Link from 'next/link'

// style
import "./style.css"

// icons
import TelegramIcon from '@mui/icons-material/Telegram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return (
        <footer>
            <div className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    {/* Top area: Blocks */}
                    <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

                        {/* 1st block */}
                        <div className="md:col-span-4 lg:col-span-5">
                            <div className="mb-2">
                                {/* Logo */}
                                <Link href="/" className="inline-block" aria-label="Cruip">
                                    <p className="logoText">Alliance</p>
                                </Link>
                            </div>
                            <div style={{position: "relative", overflow: "hidden"}}><a
                                href="https://yandex.uz/maps?utm_medium=mapframe&utm_source=maps"
                                style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0px",}}>Яндекс
                                Карты</a><a
                                href="https://yandex.uz/maps/?from=api-maps&ll=71.213413%2C40.460485&mode=routes&origin=jsapi_2_1_79&rtext=~40.460485%2C71.213413&rtt=pd&ruri=~&utm_medium=mapframe&utm_source=maps&z=17"
                                style={{color: "#eee", fontSize: "12px", position: "absolute", top: "14px"}}>улица
                                Мустакиллик: как
                                доехать на автомобиле, общественным транспортом или пешком – Яндекс Карты</a>
                                <iframe
                                    src="https://yandex.uz/map-widget/v1/?from=api-maps&ll=71.213413%2C40.460485&mode=routes&origin=jsapi_2_1_79&rtext=~40.460485%2C71.213413&rtt=pd&ruri=~&z=17"
                                    width="560" height="400" frameBorder="1"
                                    style={{position: "relative"}}></iframe>
                            </div>
                        </div>

                        {/* 2nd, 3rd and 4th blocks */}
                        <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

                            {/* 2nd block */}
                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1"
                                >Manzilimiz</h6>
                                <ul>
                                    <li>Bog'dod Tumani , Davlat Xizmatlar markzining 4-Qavatida</li>
                                </ul>
                            </div>

                            {/* 3rd block */}
                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">Bo'glanish</h6>
                                <ul>
                                    <li className="mb-1">
                                        <Link href="tel:+998903001070"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">+998903001070</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="tel:+998995001070"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">+998995001070</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="tel:+998336001070"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">+998336001070</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* 4th block */}
                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">Ish vaqti</h6>
                                <ul>
                                    <li>Dushanba.–Shanba. 9:00–21:00
                                        Dushanbadan Shanba kunigacha ofisimiz ochiq. Biz soat 09:00 dan 21:00 gacha
                                        ishlaymiz

                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    {/* Bottom area */}
                    <div className="md:flex md:items-center md:justify-between">

                        {/* Social links */}
                        <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                            <li>
                                <Link href="https://t.me/Alliance_Uzbekistan"
                                      target="_blank"
                                      className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                                      aria-label="Telegram" style={{padding: "5px"}}>
                                    <TelegramIcon/>
                                </Link>
                            </li>
                            <li className="ml-4">
                                <Link href="tel:+998903001070"
                                      target="_blank"
                                      className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                                      aria-label="phone" style={{padding: "5px"}}>
                                    <LocalPhoneIcon/>
                                </Link>
                            </li>
                            <li className="ml-4">
                                <Link href="https://www.youtube.com/@AllianceUzbekistan"
                                      target="_blank"
                                      className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                                      aria-label="Youtube" style={{padding: "5px"}}>
                                    <YouTubeIcon/>
                                </Link>
                            </li>
                            <li className="ml-4">
                                <Link href="https://www.instagram.com/alliance_uzb/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                                      target="_blank"
                                      className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                                      aria-label="Instagram" style={{padding: "2px"}}>
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20.145" cy="11.892" r="1"/>
                                        <path
                                            d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"/>
                                        <path
                                            d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z"/>
                                    </svg>
                                </Link>
                            </li>
                        </ul>

                        {/* Copyrights note */}
                        <div className="text-gray-400 text-sm mr-4">&copy; Alliance.uz. All rights reserved.</div>

                    </div>

                </div>
            </div>
        </footer>
    )
}
