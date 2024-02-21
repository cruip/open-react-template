export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">
              Make A Difference At IMAAN But Most Importantly For Your Scales!
            </h2>
            <p className="text-xl text-gray-400">
              IMAAN focuses on giving you the option to spend on yourself & your
              children first & foremost!
            </p>
            <p className="text-xl text-gray-400">
              For those that can not, we provide the option to sponsor other
              people and their children so that we may spread the deen of Islam.
              Imagine when you stand in front of Allah subhana wa ta'ala on the
              day of judgement, and Allah reveals a mountain of good deeds that
              you had no idea you had earned. Your Lord will explain to you that
              the amount of money you sponsored provided 2 kids to become Hafiz
              of Qur'an and all of that lead to you earning good deeds you never
              knew about!
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            <a
              href="https://www.amazon.com/?&_encoding=UTF8&tag=imaan0bd-20&linkCode=ur2&linkId=c88e3ca8a369dd52a5e841cb314bc535&camp=1789&creative=9325"
              className=""
              target="_blank"
            >
              {/* 1st item */}
              <div
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <svg
                  className="w-16 h-16 mb-4"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className="fill-current text-purple-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <path
                    className="stroke-current text-purple-100"
                    d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                    strokeLinecap="square"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                  <path
                    className="stroke-current text-purple-300"
                    d="M43 42h-9M43 37h-9"
                    strokeLinecap="square"
                    strokeWidth="2"
                  />
                </svg>
                <h4 className="h4 mb-2">Shop on Amazon</h4>
                <div className="text-lg text-gray-400 text-center">
                  <p>
                    If you use this link to buy anything on Amazon, a percentage
                    will be sent to us. Encourage your family and friends to use
                    this link for anything they buy!
                  </p>
                </div>
              </div>
            </a>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="fill-current text-purple-600"
                  cx="32"
                  cy="32"
                  r="32"
                />
                <path
                  className="stroke-current text-purple-100"
                  strokeWidth="2"
                  strokeLinecap="square"
                  d="M21 23h22v18H21z"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-purple-300"
                  d="M26 28h12M26 32h12M26 36h5"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
              <h4 className="h4 mb-2">Send Through Zelle</h4>
              <p className="text-lg text-gray-400 text-center">
                Contribute through Zelle via imaan.labs@gmail.com
              </p>
            </div>

            {/* 3rd item */}
            <a
              href="https://donorbox.org/donate-to-imaan"
              className=""
              target="_blank"
            >
              <div
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <svg
                  className="w-16 h-16 mb-4"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className="fill-current text-purple-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g
                    transform="translate(21 21)"
                    strokeLinecap="square"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <ellipse
                      className="stroke-current text-purple-300"
                      cx="11"
                      cy="11"
                      rx="5.5"
                      ry="11"
                    />
                    <path
                      className="stroke-current text-purple-100"
                      d="M11 0v22M0 11h22"
                    />
                    <circle
                      className="stroke-current text-purple-100"
                      cx="11"
                      cy="11"
                      r="11"
                    />
                  </g>
                </svg>
                <h4 className="h4 mb-2">Support Using Debit Cards</h4>
                <p className="text-lg text-gray-400 text-center">
                  Only have a Debit Card? No problem! Use this form to submit
                  your donation!
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
