import Image from 'next/image'
import appImage from "@/public/images/mobile_app_pic.jpg"
import extensionImage from "@/public/images/extension_pic.jpg"
import essayMode from "@/public/images/essay_mode_pic.jpg"

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h3 mb-4">Instant answers and explanations wherever you need it </h2>
            {/* <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center transition-transform duration-300 hover:scale-105 p-4 rounded-lg" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-64 h-64 mb-4 rounded-lg overflow-hidden" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={appImage} width={256} height={256} alt="Answers Ai App Image" />
              </div>
              <h4 className="h4 mb-2 text-white" data-aos="fade-up">Mobile</h4>
              <p className="text-lg text-gray-300 text-center" data-aos="fade-up">The power of our extension in the palm of your hands. Snap, solve, learn.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center transition-transform duration-300 hover:scale-105 p-4 rounded-lg" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-64 h-64 mb-4 rounded-lg overflow-hidden" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={extensionImage} width={256} height={256} alt="Browser Extension Image" />
              </div>
              <h4 className="h4 mb-2 text-white" data-aos="fade-up">Browser Extension</h4>
              <p className="text-lg text-gray-300 text-center" data-aos="fade-up">The OG. The most efficient way to verify your solutions & expand your understanding.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center transition-transform duration-300 hover:scale-105  p-4 rounded-lg" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-64 h-64 mb-4 rounded-lg overflow-hidden" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={essayMode} width={256} height={256} alt="Essay Mode Image" />
              </div>
              <h4 className="h4 mb-2 text-white" data-aos="fade-up">Essay Mode</h4>
              <p className="text-lg text-gray-300 text-center" data-aos="fade-up"> Type in the prompt or upload any files such as PDF instructions and let our AI get to work!</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
