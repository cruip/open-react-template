export default function Blocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-16">
            <h2 className="h2 mb-4">Topic wise exam questions</h2>
            <p className="text-xl text-gray-500">Use these to your advantage. It's taken me over two months to make these and I would really appreciate if you use these to revise and get that grade 9! Since there is only one of me currently its very hard to get AQA and Edexcel ones but rest assure I am trying me best!</p>
          </div>

          {/* Modern Table */}
          <div className=" w-full bg-gray-100 rounded-lg overflow-hidden">
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
                    <a href="/OCRQP/2.2 ProgrammingFundQP.pdf" target="_blank" rel="noopener noreferrer">2.2 Question Paper</a> |
                    <a href="/OCRQP/2.2 ProgrammingFundMS.pdf" target="_blank" rel="noopener noreferrer"> Solutions</a>
                  </td>
                  {/* <td className="py-2">
                    <a href="/path/to/2.2_exam_style.pdf" target="_blank" rel="noopener noreferrer">Exam Style</a>
                  </td> */}
                </tr>

                {/* Row 10 */}
                <tr className="bg-gray-200">
                  <td className="py-2">2.3 Producing robust programs</td>
                  <td className="py-2">
                    <a href="/OCRQP/2.3 RobustProgramsQP.pdf" target="_blank" rel="noopener noreferrer">2.3 Question Paper</a> |
                    <a href="/OCRQP/2.3 RobustProgramsMS.pdf" target="_blank" rel="noopener noreferrer"> Solutions</a>
                  </td>
                  {/* <td className="py-2">
                    <a href="/path/to/2.3_exam_style.pdf" target="_blank" rel="noopener noreferrer">Exam Style</a>
                  </td> */}
                </tr>

                {/* Row 11 */}
                <tr className="bg-gray-100">
                  <td className="py-2">2.4 Boolean logic</td>
                  <td className="py-2">
                    <a href="/OCRQP/2.4 BooleanLogicQP.pdf" target="_blank" rel="noopener noreferrer">2.4 Question Paper</a> |
                    <a href="/OCRQP/2.4 BooleanLogicMS.pdf" target="_blank" rel="noopener noreferrer"> Solutions</a>
                  </td>
                  {/* <td className="py-2">
                    <a href="/path/to/2.4_exam_style.pdf" target="_blank" rel="noopener noreferrer">Exam Style</a>
                  </td> */}
                </tr>

                {/* Row 12 */}
                <tr className="bg-gray-200">
                  <td className="py-2">2.5 Programming languages and Integrated Development Environments</td>
                  <td className="py-2">
                    <a href="/OCRQP/2.5 ProgrammingLanguagesandIDEQP.pdf" target="_blank" rel="noopener noreferrer">2.5 Question Paper</a> |
                    <a href="/OCRQP/2.5 ProgrammingLanguagesandIDEMS.pdf" target="_blank" rel="noopener noreferrer"> Solutions</a>
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
