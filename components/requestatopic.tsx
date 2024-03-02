import React from 'react'

function requestatopic() {
  return (
    <section>
      <div className="max-w-6xl mx-auto mt-20 px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-16">
            <h2 className="h2 mb-4">Request a Topic / Feedback</h2>
            <p className="text-xl text-gray-500">Let me know what you guys want me to start doing more!</p>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf8tRsp45rqD4bJFHFpklalUXpCw-_IO3aXjom6Ulbn5akyUg/viewform?embedded=true" className='mx-auto' width="440" height="740" >Loading…</iframe>
          </div>
            
          

        </div>
      </div>
    </section>
  )
}

export default requestatopic