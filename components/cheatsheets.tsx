import Link from 'next/link'
import React from 'react'

function cheatsheets() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-16">
            <h2 className="h2 mb-4">Cheatsheets</h2>
            <p className="text-xl text-gray-500">Use these before your exam to quickly remember what it is you need to know.</p>
          </div>
            <div className='flex flex-col'>
                <a href="/cheatsheets/gcsetopicstofocus.png" target="_blank" className='w-fit mx-auto' rel="noopener noreferrer">Topics to focus on</a>
                <a href="https://docs.google.com/spreadsheets/d/10uYZgQYjXf40GZ80CIhjRYKhFrNQPNlG17UX98rruRI/edit?usp=sharing" target="_blank" className='w-fit mx-auto' rel="noopener noreferrer">Topics to focus on (Spreadsheet)</a>
                <a href="/cheatsheets/ocrgcseexamlanguage.pdf" target="_blank" className='w-fit mx-auto' rel="noopener noreferrer"> OCR Exam Reference Language (Peusdocode)</a>
                <a href="/cheatsheets/sortingalgorthms.pdf" target="_blank" className='w-fit mx-auto' rel="noopener noreferrer">Sorting Algorithms</a>
                <a href="/cheatsheets/sqlcheatsheet.pdf" target="_blank" className='w-fit mx-auto' rel="noopener noreferrer">SQL</a>
                <a href="/cheatsheets/j277spec.pdf" target="_blank" className='w-fit mx-auto' rel="noopener noreferrer">J277 Specification</a>
            </div>
          

        </div>
        <div className='w-fit mx-auto'>
        <Link href="/Request-a-Topic" className="btn-sm text-white rounded-full mb-10 bg-purple-600 hover:bg-purple-700 ">
                  Request a Topic
                </Link>

        </div>
        
      </div>
    </section>
  )
}

export default cheatsheets