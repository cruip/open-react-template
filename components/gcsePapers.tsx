export default function gcsePapers() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 ">
            <h2 className="h2 mb-4">GCSE Past Papers and Answers</h2>
            <p className="text-xl text-gray-800">We are currently in the process of making some more practice mock papers for the new spec for both OCR and AQA. It should be available within the end of next month.</p>
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
                <a href="/PastPapers/OCRPaper 2 - Specimen.pdf/" target="_blank" rel="noopener noreferrer"><li>Paper 2 - Specimen</li></a>
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
          <div className=" mx-auto text-leading mt-10 ">
            <p className="text-lg text-blue-800">OCR (J277), 2.2 onwards coming soon..</p>
          </div>
          {/* Modern Table */}
          <div className="mt-4 w-full bg-gray-100 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-2 text-left">Topic</th>
                  <th className="py-2 text-left">Past Exam Questions</th>
                  {/* <th className="py-2">Exam Style Questions</th> */}
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="bg-gray-200">
                  <td className="py-2">1.1 Systems architecture</td>
                  <td className="py-2">
                    <a href="/OCRQP/1.1 Systems architectureQP.pdf" target="_blank" rel="noopener noreferrer">1.1 Question Paper</a> |
                    <a href="/OCRQP/1.1 Systems ArchitectureMS.pdf" target="_blank" rel="noopener noreferrer"> Solutions</a>
                  </td>
                  {/* <td className="py-2">
                    <a href="/path/to/1.1_exam_style.pdf" target="_blank" rel="noopener noreferrer">Exam Style</a>
                  </td> */}
                </tr>

                {/* Row 2 */}
                <tr className="bg-gray-100">
                  <td className="py-2">1.2 Memory and storage</td>
                  <td className="py-2">
                    <a href="/OCRQP/1.2 Memory and StorageQPNEW.pdf" target="_blank" rel="noopener noreferrer">1.2 Question Paper</a> |
                    <a href="/OCRQP/1.2 Memory and StorageMSNEW.pdf" target="_blank" rel="noopener noreferrer"> Solutions</a>
                  </td>
                  {/* <td className="py-2">
                    <a href="/path/to/1.2_exam_style.pdf" target="_blank" rel="noopener noreferrer">Exam Style</a>
                  </td> */}
                </tr>

                {/* Row 3 */}
                <tr className="bg-gray-200">
                  <td className="py-2">1.3 Computer networks, connections and protocols</td>
                  <td className="py-2">
                    <a href="/OCRQP/1.3 Computer networksQP.pdf" target="_blank" rel="noopener noreferrer">1.3 Question Paper</a> |
                    <a href="/OCRQP/1.3 Computer networksMS.pdf" target="_blank" rel="noopener noreferrer"> Solutions</a>
                  </td>
                  {/* <td className="py-2">
                    <a href="/path/to/1.3_exam_style.pdf" target="_blank" rel="noopener noreferrer">Exam Style</a>
                  </td> */}
                </tr>

                {/* Row 4 */}
                <tr className="bg-gray-100">
                  <td className="py-2">1.4 Network security</td>
                  <td className="py-2">
                    <a href="/OCRQP/1.4 Network SecurityQP.pdf" target="_blank" rel="noopener noreferrer">1.4 Question Paper</a> |
                    <a href="/OCRQP/1.4 Network SecurityMS.pdf" target="_blank" rel="noopener noreferrer"> Solutions</a>
                  </td>
                  {/* <td className="py-2">
                    <a href="/path/to/1.4_exam_style.pdf" target="_blank" rel="noopener noreferrer">Exam Style</a>
                  </td> */}
                </tr>

                {/* Row 5 */}
                <tr className="bg-gray-200">
                  <td className="py-2">1.5 Systems software</td>
                  <td className="py-2">
                    <a href="/OCRQP/1.5 Systems SoftwareQP.pdf" target="_blank" rel="noopener noreferrer">1.5 Question Paper</a> |
                    <a href="/OCRQP/1.5 Systems SoftwareMS.pdf" target="_blank" rel="noopener noreferrer"> Solutions</a>
                  </td>
                  {/* <td className="py-2">
                    <a href="/path/to/1.5_exam_style.pdf" target="_blank" rel="noopener noreferrer">Exam Style</a>
                  </td> */}
                </tr>

                {/* Row 6 */}
                <tr className="bg-gray-100">
                  <td className="py-2">1.6 Ethical, legal, cultural and environmental impacts of digital technology</td>
                  <td className="py-2">
                    <a href="/OCRQP/1.6 EthicalQP.pdf" target="_blank" rel="noopener noreferrer">1.6 Question Paper</a> |
                    <a href="/OCRQP/1.6 EthicalMS.pdf" target="_blank" rel="noopener noreferrer"> Solutions</a>
                  </td>
                  {/* <td className="py-2">
                    <a href="/path/to/1.6_exam_style.pdf" target="_blank" rel="noopener noreferrer">Exam Style</a>
                  </td> */}
                </tr>

                {/* Row 7 (Empty row) */}
                <tr className="bg-gray-400">
                  <td className="py-2"></td>
                  <td className="py-2"></td>
                  {/* <td className="py-2"></td> */}
                </tr>

                {/* Row 8 */}
                <tr className="bg-gray-200">
                  <td className="py-2">2.1 Algorithms</td>
                  <td className="py-2">
                    <a href="/OCRQP/2.1 AlgorithmsQP.pdf" target="_blank" rel="noopener noreferrer">2.1 Question Paper</a> |
                    <a href="/OCRQP/2.1 AlgorithmsMS.pdf" target="_blank" rel="noopener noreferrer"> Solutions</a>
                  </td>
                  {/* <td className="py-2">
                    <a href="/path/to/2.1_exam_style.pdf" target="_blank" rel="noopener noreferrer">Exam Style</a>
                  </td> */}
                </tr>

                {/* Row 9 */}
                <tr className="bg-gray-100">
                  <td className="py-2">2.2 Programming fundamentals</td>
                  <td className="py-2">
                    <a href="/path/to/2.2_question_paper.pdf" target="_blank" rel="noopener noreferrer">2.2 Question Paper</a> |
                    <a href="/path/to/2.2_solutions.pdf" target="_blank" rel="noopener noreferrer"> Solutions</a>
                  </td>
                  {/* <td className="py-2">
                    <a href="/path/to/2.2_exam_style.pdf" target="_blank" rel="noopener noreferrer">Exam Style</a>
                  </td> */}
                </tr>

                {/* Row 10 */}
                <tr className="bg-gray-200">
                  <td className="py-2">2.3 Producing robust programs</td>
                  <td className="py-2">
                    <a href="/path/to/2.3_question_paper.pdf" target="_blank" rel="noopener noreferrer">2.3 Question Paper</a> |
                    <a href="/path/to/2.3_solutions.pdf" target="_blank" rel="noopener noreferrer"> Solutions</a>
                  </td>
                  {/* <td className="py-2">
                    <a href="/path/to/2.3_exam_style.pdf" target="_blank" rel="noopener noreferrer">Exam Style</a>
                  </td> */}
                </tr>

                {/* Row 11 */}
                <tr className="bg-gray-100">
                  <td className="py-2">2.4 Boolean logic</td>
                  <td className="py-2">
                    <a href="/path/to/2.4_question_paper.pdf" target="_blank" rel="noopener noreferrer">2.4 Question Paper</a> |
                    <a href="/path/to/2.4_solutions.pdf" target="_blank" rel="noopener noreferrer"> Solutions</a>
                  </td>
                  {/* <td className="py-2">
                    <a href="/path/to/2.4_exam_style.pdf" target="_blank" rel="noopener noreferrer">Exam Style</a>
                  </td> */}
                </tr>

                {/* Row 12 */}
                <tr className="bg-gray-200">
                  <td className="py-2">2.5 Programming languages and Integrated Development Environments</td>
                  <td className="py-2">
                    <a href="/path/to/2.5_question_paper.pdf" target="_blank" rel="noopener noreferrer">2.5 Question Paper</a> |
                    <a href="/path/to/2.5_solutions.pdf" target="_blank" rel="noopener noreferrer"> Solutions</a>
                  </td>
                  {/* <td className="py-2">
                    <a href="/path/to/2.5_exam_style.pdf" target="_blank" rel="noopener noreferrer">Exam Style</a>
                  </td> */}
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  )
}
