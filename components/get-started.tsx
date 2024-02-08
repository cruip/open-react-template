export default function GetStarted() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Get Started</h2>
            <p className="text-xl text-gray-400 mb-8">Ready to make your mark on the gaming world? Join Cycle today and be part of the community that's setting new standards for game development. Your feedback has the power to inspire the next big thing in gaming. Let's build it together.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-red-100 hover:bg-red-100/75 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Try Demo</a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Get in Touch</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
