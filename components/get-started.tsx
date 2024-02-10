export default function GetStarted() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Get Started</h2>
            <p className="text-xl text-gray-400 mb-8">If you’re a player, try the demo and start giving feedback today. Reach out to us if you can think of new or better ways to improve Cycle.</p>
            <p className="text-xl text-gray-400 mb-8">For companies, if you think Cycle’s a fit for you, contact our sales team. <br/>Cycle also serves product-centric companies in other industries looking to improve their product cycles (enterprise software, fashion, bespoke products, etc). We’re excited to see how you can use our tools to help you be better for customers.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-red-100 hover:bg-red-100/75 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Try Demo</a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#contact-us">Get in Touch</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
