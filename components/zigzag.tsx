import Image from "next/image";

import FeatImage01 from "@/public/images/dabira.jpeg";
import FeatImage02 from "@/public/images/features-03-image-02.png";
import FeatImage03 from "@/public/images/features-03-image-03.png";

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div
            className="max-w-3xl mx-auto text-center pb-12 md:pb-16"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-yellow-600 bg-yellow-200 rounded-full mb-4">
              a brief overview
            </div> */}
            <h1 className="h2 mb-4">
              Adeobajesu Aboluwade
            </h1>
            <p className="text-lg text-gray-400">
              Adeobajesu is an{" "}
              <strong>
                {" "}
                award winning social media
                professional
              </strong>{" "}
              with years of experience managing,
              building, and creating content for
              brand social media accounts. He
              holds a
              <strong>
                {" "}
                Bachelor's Degree
              </strong>{" "}
              in Philosophy. In addition, he holds
              certification as a{" "}
              <strong> Digital Ad Expert.</strong>
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto rounded-md"
                  src={FeatImage01}
                  width={400}
                  height={400}
                  alt="ade image"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 grid md:grid-cols-2 gap-8"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                {/* Values */}
                <div
                  className="md:pr-4 lg:pr-12 xl:pr-16"
                  id="values"
                >
                  <h3 className="h3 mb-3">
                    My values
                  </h3>
                  <p className="text-xl text-gray-400 mb-4"></p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-purple-100 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Integrity</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-purple-100 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Drive</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-purple-100 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excitement</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-purple-100 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Accomplishment</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-purple-100 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Humor</span>
                    </li>
                  </ul>
                </div>
                {/* Strenghts */}
                <div
                  className="md:pr-4 lg:pr-12 xl:pr-16"
                  id="strengths"
                >
                  <h3 className="h3 mb-3">
                    Strengths
                  </h3>
                  <p className="text-xl text-gray-400 mb-4"></p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-purple-100 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Communication</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-purple-100 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Empathy</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-purple-100 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        WOO (Winning Others Over)
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-purple-100 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Adaptability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
