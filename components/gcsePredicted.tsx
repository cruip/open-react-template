import Link from 'next/link'
import React from 'react'

function gcsePredicted() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-16">
            <h2 className="h2 mb-4">Predicted Papers</h2>
            <p className="text-xl text-gray-500">Coming very soon. Let's get the tiktok page to 10k followers to help as many people out as possible!</p>
          </div>
            <div className='flex flex-col'>
                <a href="https://www.tiktok.com/@gcse_computerscience" target="_blank" className='w-fit mx-auto' rel="noopener noreferrer">Predicted Paper 1 - OCR SPEC</a>
            </div>

            
          

        </div>
        <div className='w-fit mx-auto'>
        <Link href="/Request-a-Topic" className="btn-sm rounded-full text-white bg-blue-700 mb-10 hover:bg-purple-700 ">
                  Drop a follow!
                </Link>

        </div>
      </div>
    </section>
  )
}

export default gcsePredicted