import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import Tooltip from "../Tooltip";

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
                  <Image src={Logo} height={32} width={32} alt="logo" />
                </Link>
              </div>
              <div className="text-gray-400">
                No matter who you are, you are a guest of Allah when you come to
                Masjid IMAAN. Please don't hesitate to join us today!
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Donate</h6>
                <ul>
                  <li className="mb-1">
                    <p>Zelle: 929-301-6487</p>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://www.zeffy.com/en-US/donation-form/7ee3d4a2-6e81-471d-8255-06f0d1f9be08"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                      target="_blank"
                    >
                      Support with Zeffy
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://www.amazon.com/?&_encoding=UTF8&tag=imaan0bd-20&linkCode=ur2&linkId=c88e3ca8a369dd52a5e841cb314bc535&camp=1789&creative=9325"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                      target="_blank"
                    >
                      By Shopping on Amazon
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://donorbox.org/donate-to-imaan"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                      target="_blank"
                    >
                      Support with Donorbox
                    </a>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Tooltip content="Coming Soon">
                      <div className="relative inline-block">
                        <div className="text-gray-800 hover:text-gray-100 transition duration-150 ease-in-out cursor-not-allowed">
                          Aqeedah Class
                        </div>
                      </div>
                    </Tooltip>
                  </li>
                  <li className="mb-1">
                    <Tooltip content="Coming Soon">
                      <div className="relative inline-block">
                        <div className="text-gray-800 hover:text-gray-100 transition duration-150 ease-in-out cursor-not-allowed">
                          Islamic Classes For Kids
                        </div>
                      </div>
                    </Tooltip>
                  </li>
                  <li className="mb-1">
                    <Tooltip content="Coming Soon">
                      <div className="relative inline-block">
                        <div className="text-gray-800 hover:text-gray-100 transition duration-150 ease-in-out cursor-not-allowed">
                          Qur'an Classes
                        </div>
                      </div>
                    </Tooltip>
                  </li>
                  <li className="mb-1">
                    <Tooltip content="Coming Soon">
                      <div className="relative inline-block">
                        <div className="text-gray-800 hover:text-gray-100 transition duration-150 ease-in-out cursor-not-allowed">
                          Arabic Classes
                        </div>
                      </div>
                    </Tooltip>
                  </li>
                  <li className="mb-1">
                    <Tooltip content="Coming Soon">
                      <div className="relative inline-block">
                        <div className="text-gray-800 hover:text-gray-100 transition duration-150 ease-in-out cursor-not-allowed">
                          Books
                        </div>
                      </div>
                    </Tooltip>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <Tooltip content="Coming Soon">
                      <div className="relative inline-block">
                        <div className="text-gray-800 hover:text-gray-100 transition duration-150 ease-in-out cursor-not-allowed">
                          The Origin Story
                        </div>
                      </div>
                    </Tooltip>
                  </li>
                  <li className="mb-1">
                    <Tooltip content="Coming Soon">
                      <div className="text-gray-800 hover:text-gray-100 transition duration-150 ease-in-out cursor-not-allowed">
                        Meet The Shura
                      </div>
                    </Tooltip>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://maps.app.goo.gl/8Jn9t21YQ51UicqH8"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Location
                    </a>
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
                <a
                  href="https://chat.whatsapp.com/KiUPGNefJ9AGngLgO69cGr"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Whatsapp"
                >
                  <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current">
                    <path
                      d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="ml-4">
                <a
                  href="https://twitter.com/IMAAN_inc"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </a>
              </li>

              <li className="ml-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61556078281350"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </a>
              </li>
              <li className="ml-4">
                <a
                  href="https://www.instagram.com/imaan_inc"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </a>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">
              &copy; IMAAN™ - All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
