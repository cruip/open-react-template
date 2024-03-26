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
            <p className="text-xl text-gray-500">Let's get the tiktok page to 10k followers to help as many people out as possible! Paper 2 coming soon. I won't be uploading a markscheme but will instead go through this paper LIVE and also upload a walkthrough on my youtube channel. So go subscribe and drop a follow!!!!!</p>
          </div>
            <div className='flex flex-col'>
                <a href="/PredictedPapers/OCR Predicted Paper 1 2024.pdf" target="_blank" className='w-fit mx-auto' rel="noopener noreferrer">Predicted Paper 1 - OCR SPEC</a>
            </div>

            
          

        </div>
        <div className='w-fit mx-auto'>
        <Link href="https://www.tiktok.com/@gcse_computerscience" className="btn-sm rounded-full text-white bg-blue-700 mb-10 hover:bg-purple-700 ">
                  Drop a follow!
                </Link>

        </div>
      </div>
    </section>
  )
}

export default gcsePredicted