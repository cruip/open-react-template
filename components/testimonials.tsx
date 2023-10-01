import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Don't take my word for it</h2>
            <p className="text-xl text-gray-400">Here are just a few testimonials from my co-workers.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src="https://media.licdn.com/dms/image/C4E03AQFkGBtjPcYqKA/profile-displayphoto-shrink_400_400/0/1566838837755?e=1701302400&v=beta&t=UT4wFVgvhvGOkYikk1JbLyxRy0NXkjC-tamPsBcIDx8" width={48} height={48} alt="Lisa L." />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-teal-300" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-grey-100 grow">Keith has saved the day for our team more times than I can remember. He has a deep understanding of many of the technologies we use day to day, but more importantly, he has intimate knowledge on how those things are configured and used for our project.  If it weren’t for his expertise on these topics our team would’ve certainly missed important deployment deadlines.</blockquote>
              <div className="text-gray-100 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-100 not-italic">Lisa L.</cite> - <a className="text-teal-100 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/lisalehrman/">Linkedin</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src="https://media.licdn.com/dms/image/D5603AQHllFsM2CMX4Q/profile-displayphoto-shrink_100_100/0/1681853265957?e=1701302400&v=beta&t=NBlVCH2vDNFdYa0G985u7y0Q7f3MRbAudjOPS_YzfZ8" width={48} height={48} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-teal-300" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-100 grow">Keith worked on our team for several years at Deem and I found him to be a steady and consistent contributor and really positive team player. I could count on him to stay the course during thick and thin!</blockquote>
              <div className="text-gray-100 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-100 not-italic">John F. Rizzo</cite> - <a className="text-teal-100 hover:text-teal-100 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/jfrizzo?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BI4f%2B0pSrQvyZbKSsUtgBag%3D%3D">Linkedin</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src="https://media.licdn.com/dms/image/C4E03AQE6tUoSsPLJFw/profile-displayphoto-shrink_100_100/0/1516157045430?e=1701302400&v=beta&t=-KrEY25Qt_XW1zvwyY8VDewPwfGdoy2dhYdrP500c6c" width={48} height={48} alt="Testimonial 03" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-teal-300" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-100 grow">I've worked with Keith the past three years. He is an excellent front-end programmer. He led the team in the transition to react. Whenever there's a react or javascript issue, he is the first person I go to to help resolve the issue. Great guy to have on your team!</blockquote>
              <div className="text-gray-100 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-100 not-italic">James Park</cite> - <a className="text-teal-100 hover:text-gray-100 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/jamespark?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BI4f%2B0pSrQvyZbKSsUtgBag%3D%3D">Linkedin</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
