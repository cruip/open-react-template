export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">
              Our packages are jam-packed with all these features and more!
            </h2>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
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
              <h4 className="h4 mb-2">Return Flights</h4>
              <p className="text-lg text-gray-400 text-center">
                Starting from Heathrow fly to the city of Madinah
                where you'll be undergoing training to prepare you for Umrah.
              </p>
              <p className="text-lg text-gray-400 text-center mt-4">
                After completing Umrah enjoy what Makkah has to offer before setting out to Jeddah to fly back home
                </p>
            </div>

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
              <h4 className="h4 mb-2">5* Hotels</h4>
              <p className="text-lg text-gray-400 text-center">
                Placed literally at the doorstep of the entrance of the Haram,
                enjoy the comfort of a 5* Hotel stay with a continental buffet
                breakfast included.
              </p>
              <p className="text-lg text-gray-400 text-center mt-4">
                The Saudi atmosphere may take a toll on some of you, so we're
                making this very important journey for you as comfortable as
                possible
              </p>
            </div>

            {/* 3rd item */}
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
              <h4 className="h4 mb-2">Daily Islamic Reminders</h4>
              <p className="text-lg text-gray-400 text-center">
                Chaperoned with a Student of knowledge to help reaffirm &
                reinstate the reason why you embarked on this spiritual holy
                journey
              </p>
              <p className="text-lg text-gray-400 text-center mt-4">
                We've ensured daily reminders to help strengthen that connection
                that we all need with our Creator
              </p>
            </div>

            {/* 4th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
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
                  transform="translate(22 21)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="stroke-current text-purple-100"
                    d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5"
                  />
                  <circle
                    className="stroke-current text-purple-300"
                    cx="13"
                    cy="9"
                    r="3"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2">Umrah Training</h4>
              <p className="text-lg text-gray-400 text-center">
                As Umrah isn't an act of worship that people do as often as
                Salaat, we've curated a seminar detailing every step of the
                process
              </p>
              <p className="text-lg text-gray-400 text-center mt-4">
                So that you won't be left in the dark - hoping you didn't do
                something wrong
              </p>
            </div>

            {/* 5th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
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
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="stroke-current text-purple-100"
                    d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6"
                  />
                  <path
                    className="stroke-current text-purple-300"
                    d="M22 30h4v12h-4z"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2">Multiple Entry Visa</h4>
              <p className="text-lg text-gray-400 text-center">
                Now that you've learnt how to do Umrah, why not put it into
                action?
              </p>
              <p className="text-lg text-gray-400 text-center mt-4">
                Part of our package you get a multiple entry visa, just in case
                you want to go on a solo trip again or want to take a loved one
                with you - we've made this easier for you!
              </p>
            </div>

            {/* 6th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="500"
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
                  transform="translate(21 22)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="stroke-current text-purple-300"
                    d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415"
                  />
                  <circle
                    className="stroke-current text-purple-300"
                    cx="17"
                    cy="5"
                    r="3"
                  />
                  <path
                    className="stroke-current text-purple-100"
                    d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2 text-center">
                Outings & Bond Building Activities
              </h4>
              <p className="text-lg text-gray-400 text-center">
                What sets us apart from other tour companies is a few things -
                but one that stands out is we are
              </p>
              <p className="text-lg text-gray-400 text-center mt-4 font-bold">
                The Umrah CHALLENGE
              </p>
              <p className="text-lg text-gray-400 text-center mt-4">
                Meaning we've got group activities, solo activities & spiritual
                ones in place to ensure that you come as strangers and leave as
                brothers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
