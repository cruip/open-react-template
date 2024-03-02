export default function gcsePapers() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 ">
            <h2 className="h2 mb-4">GCSE Past Papers and Answers</h2>
            <p className="text-xl text-gray-800">We are currently in the process of making some predicted mock papers for the new spec for both OCR and AQA. It should be available within the end of next month.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2">AQA (8525)</h4>
              <ul className="text-center">
                <a href="/PastPapers/AQA/Paper 1A - June 2022.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 1A (C#) - June 2022</li></a>
                <a href="/PastPapers/AQA/Paper 1B - June 2022.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 1B (Python) - June 2022</li></a>
                <a href="/PastPapers/AQA/Paper 1C - June 2022.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 1C (VB) - June 2022</li></a>
                <a href="/PastPapers/AQA/Paper 2 - June 2022.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 2 - June 2022</li></a>
                <a href="/PastPapers/AQA/Paper 1 MS - June 2022.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 1 Mark Scheme - June 2022</li></a>
                <a href="/PastPapers/AQA/Paper 2 MS - June 2022.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 2 Mark Scheme - June 2022</li></a>
                <a href="/PastPapers/AQA/Paper 1A - Specimen.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 1A (C#) - Specimen</li></a>
                <a href="/PastPapers/AQA/Paper 1B - Specimen.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 1B (Python) - Specimen</li></a>
                <a href="/PastPapers/AQA/Paper 1C - Specimen.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 1C (VB) - Specimen</li></a>
                <a href="/PastPapers/AQA/Paper 2 - Specimen.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 2 - Specimen</li></a>
                <a href="/PastPapers/AQA/Paper 1 MS - Specimen.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 1 Mark Scheme - Specimen</li></a>
                <a href="/PastPapers/AQA/Paper 2 MS - Specimen.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 2 Mark Scheme - Specimen</li></a>
              </ul>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2">OCR (J277)</h4>
              <ul className="text-center">
                <a href="/PastPapers/OCR/Paper 1 - June 2022.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 1 - June 2022</li></a>
                <a href="/PastPapers/OCR/Paper 2 - June 2022.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 2 - June 2022</li></a>
                <a href="/PastPapers/OCR/Paper 1 MS - June 2022.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 1 MS - June 2022</li></a>
                <a href="/PastPapers/OCR/Paper 2 MS - June 2022.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 2 MS - June 2022</li></a>
                <a href="/PastPapers/OCR/Paper 1 - Specimen.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 1 - Specimen</li></a>
                <a href="/PastPapers/OCR/Paper 2 - Specimen.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 2 - Specimen</li></a>
                <a href="/PastPapers/OCR/Paper 1 MS - Specimen.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 1 Mark Scheme - Specimen</li></a>
                <a href="/PastPapers/OCR/Paper 2 MS - Specimen.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 2 Mark Scheme - Specimen</li></a>

              </ul>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Edexcel (1CP2)</h4>
              <ul className="text-center">
                <a href="/PastPapers/Edexcel/Paper 1 - June 2022.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 1 - June 2022</li></a>
                <a href="/PastPapers/Edexcel/Paper 2 - June 2022.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 2 - June 2022</li></a>
                <a href="/PastPapers/Edexcel/Paper 1 MS - June 2022.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 1 Mark Scheme - June 2022</li></a>
                <a href="/PastPapers/Edexcel/Paper 2 MS - June 2022.pdf" target="_blank" rel="noopener noreferrer"><li>Paper 2 Mark Scheme - June 2022</li></a>
              </ul>

            </div>

          </div>
          
          

        </div>
      </div>
    </section>
  )
}
