import Image from "next/image";

import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t ">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-emerald-500">If you're still wondering why?</h2>
            <p className="text-xl text-gray-700">
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam
              ut venenatis tellus—in ornare.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-100" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src={TestimonialImage02}
                    width={48}
                    height={48}
                    alt="Testimonial 02"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 grow">
                — The team was incredibly diligent in tracking my expenses, offering regular updates and guidance
                throughout the process. It's clear they prioritize their clients' needs, and I've felt valued and
                supported every step of the way.
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-700 not-italic">Alex Rivera</cite> -{" "}
                <a className="text-emerald-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">
                  Real estate investor
                </a>
              </div>
            </div>

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-100" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src={TestimonialImage01}
                    width={48}
                    height={48}
                    alt="Testimonial 01"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 grow">
                — Thanks for making real estate investing easy for us. I've never really thought about tracking this
                information and always been unaware, but now I'm more informed and confident in my decisions.
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-700 not-italic">Samantha Lee</cite> -{" "}
                <a className="text-emerald-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">
                  Real Estate Agent
                </a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-100" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    className="rounded-full"
                    src={TestimonialImage03}
                    width={48}
                    height={48}
                    alt="Testimonial 03"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 grow">
                — Utilizing this service has been a game-changer for my portfolio. Their punctuality and accessibility
                are unmatched. Any time I have a question or concern, they're there to provide comprehensive answers.
                Truly top-notch service.
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-700 not-italic">Doug Schultz</cite> -{" "}
                <a className="text-emerald-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">
                  Property investor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
