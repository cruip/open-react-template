import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="flex gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
                  </svg>
                </Link>
              </div>
              <div className="text-gray-400">We are here to provide you with more resources, to help you achieve the best grades possible for computer science.</div>
            </div>

            

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <Link href="https://youtube.com/@TheGCSEComputerScienceTutor?feature=shared" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="YouTube">
                <svg className="w-8 h-8 fill-current" viewBox="0 -3 70 80" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 36 17 C 16.805 17 14.24125 17.197891 11.78125 19.712891 C 9.32125 22.226891 9 26.223 9 36 C 9 45.777 9.32125 49.772109 11.78125 52.287109 C 14.24125 54.802109 16.805 55 36 55 C 55.195 55 57.75875 54.802109 60.21875 52.287109 C 62.67875 49.772109 63 45.777 63 36 C 63 26.223 62.67875 22.226891 60.21875 19.712891 C 57.75875 17.197891 55.195 17 36 17 z M 44.160156 24.996094 C 50.693781 25.009219 52.713453 25.130266 53.533203 25.884766 C 54.627203 26.889766 55 29.586 55 36 C 55 42.414 54.627203 45.110234 53.533203 46.115234 C 52.440203 47.121234 49.215 47 36 47 C 22.785 47 19.560797 47.120234 18.466797 46.115234 C 17.372797 45.110234 17 42.414 17 36 C 17 29.586 17.534797 26.803766 18.466797 25.884766 C 19.398797 24.965766 22.785 25 36 25 C 39.30375 25 41.982281 24.991719 44.160156 24.996094 z M 31.445312 28.167969 L 31.445312 43.832031 L 45.068359 35.9375 L 31.445312 28.167969 z"></path>
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="https://www.tiktok.com/@gcse_computerscience"  target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="TikTok">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 23.773438 12 C 12.855437 12 12 12.854437 12 23.773438 L 12 40.226562 C 12 51.144563 12.855438 52 23.773438 52 L 40.226562 52 C 51.144563 52 52 51.145563 52 40.226562 L 52 23.773438 C 52 12.854437 51.145563 12 40.226562 12 L 23.773438 12 z M 21.167969 16 L 42.832031 16 C 47.625031 16 48 16.374969 48 21.167969 L 48 42.832031 C 48 47.625031 47.624031 48 42.832031 48 L 21.167969 48 C 16.374969 48 16 47.624031 16 42.832031 L 16 21.167969 C 16 16.374969 16.374969 16 21.167969 16 z M 32.740234 19.693359 L 32.740234 36.294922 C 32.740234 38.576922 30.756031 39.755859 29.332031 39.755859 C 28.259031 39.755859 25.818359 38.914578 25.818359 36.267578 C 25.818359 33.488578 28.095422 32.779297 29.357422 32.779297 C 30.092422 32.779297 30.380859 32.9375 30.380859 32.9375 L 30.380859 28.507812 C 30.380859 28.507813 29.830172 28.425781 29.201172 28.425781 C 24.682172 28.425781 21.464844 32.083578 21.464844 36.267578 C 21.464844 39.802578 24.229297 44.082031 29.279297 44.082031 C 34.658297 44.082031 37.121094 39.595969 37.121094 36.292969 L 37.121094 28.058594 C 37.121094 28.058594 39.518422 29.736328 42.732422 29.736328 L 42.732422 25.541016 C 39.045422 25.278016 37.0745 22.801359 36.9375 19.693359 L 32.740234 19.693359 z"></path>
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="https://www.instagram.com/thegcsecomputersciencetutor?igsh=dTBvZW0yZHBhanl2&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                </svg>
              </Link>
            </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; gcsecomputersciencetutor.vercel.app All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
