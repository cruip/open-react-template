import Image from "next/image";

import FeatImage01 from "@/public/images/gap/spotlight-image-athleta.webp";
import FeatImage02 from "@/public/images/deem/deem-website-capture.webp";
import FeatImage03 from "@/public/images/deem/digistrive_logo.png";

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <h1 className="h2 mb-4">Resume Highlights</h1>
            <p className="text-xl text-gray-400">
              Here is some of my work history, and, projects that I have been a
              part of.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="object-contain"
                  src={FeatImage01}
                  width={384}
                  height={330}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
                  <h3 className="h3 mb-3">Gap, Inc., San Francisco, CA</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Senior Software Engineer - March 2021 to Present - Motion
                    Recruitment Partners, Contract
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-baseline mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Played a pivotal role in delivering a unified codebase
                        for UI components, promoting code reusability and
                        accelerating development timelines.
                      </span>
                    </li>
                    <li className="flex items-baseline mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Lead team on migration projects such as Node 14 to 18,
                        and, Jest and Playwright resulting in improved
                        performance and enhanced security
                      </span>
                    </li>
                    <li className="flex items-baseline">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Collaborated migration efforts with vendor for Azure
                        Cloud
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            {/* <div className="md:grid md:grid-cols-12 md:gap-6 items-center"> */}
            <div className="flex flex-col-reverse md:grid md:grid-cols-10 md:gap-4 items-center">
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-4"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Deem, Inc. Oakland, CA</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Senior Software Engineer - July 2014 to May 2020
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-baseline mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Led cross-functional teams to analyze requirements and
                        implement solutions
                      </span>
                    </li>
                    <li className="flex items-baseline mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Developed flight seatmap using React and Redux.
                      </span>
                    </li>
                    <li className="flex items-baseline mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Trained and mentored junior developers</span>
                    </li>
                    <li className="flex items-baseline">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Diagnosed and resolved system performance issues.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="object-contain"
                  src={FeatImage02}
                  width={384}
                  height={330}
                  alt="Features 02"
                />
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="object-contain"
                  src={FeatImage03}
                  width={384}
                  height={330}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Digistrive, Inc. Atlanta, GA</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Software Engineer - June 2013 to July 2014
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-baseline">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Led transfer of Digistrive business logic and data
                        processes when acquired by Deem, Inc.
                      </span>
                    </li>
                    <li className="flex items-baseline mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Restructured JavaScript modules, saving time on bug
                        resolution
                      </span>
                    </li>
                    <li className="flex items-baseline mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Reduced data bandwidth consumption and response time
                      </span>
                    </li>
                    <li className="flex items-baseline">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Improved user behavior research and content visibility
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Download Button */}
            <div className="flex items-center md:grid md:grid-cols-12 md:gap-6">
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto col-start-6 col-end-12"
              data-aos="fade-right"
            >
              <a
                    href="https://1drv.ms/w/s!AlNLwqrOUfGHjQ7VJVqkT-lHyXSd?e=SivKyi"
                    className="p-4 bg-teal-300 text-white rounded-md border-transparent border hover:bg-transparent hover:border-teal-300 hover:border"
                    type="button"
                    id="download-resume"

                  >
                    Download Resume
                  </a>
            </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
