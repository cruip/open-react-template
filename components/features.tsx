export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Why Use Cycle?</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-4 lg:grid-cols-6 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center col-span-2" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                <g clip-path="url(#clip0_115_535)">
                  <path d="M64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32Z" fill="#DB1515" />
                  <g clip-path="url(#clip1_115_535)">
                    <path d="M36.1667 26.6583V24.5L38.6667 22V25.3333H42L39.5 27.8333H37.3417L33.6 31.575C33.6333 31.7083 33.6583 31.85 33.6583 32C33.6583 32.9167 32.9083 33.6667 31.9917 33.6667C31.075 33.6667 30.325 32.9167 30.325 32C30.325 31.0833 31.075 30.3333 31.9917 30.3333C32.1417 30.3333 32.2833 30.3583 32.4167 30.3917L36.1583 26.65L36.1667 26.6583ZM40.1917 29.5H39.075C39.3417 30.275 39.5 31.1 39.5 31.9667C39.125 41.9333 24.875 41.9333 24.5 31.9667C24.5 27.8167 27.8667 24.4417 32 24.4417C32.875 24.4417 33.7167 24.6 34.5 24.8833V23.8083L35.6583 22.65C29.9167 20.525 22.3167 23.625 22 31.9667C22 37.5 26.4833 42 32 42C37.5167 42 42 37.5 42 31.9667C41.95 30.6333 41.7083 29.4333 41.3167 28.3667L40.1917 29.4917V29.5ZM31.825 28.6417L34 26.4667C33.4083 26.2583 32.7417 26.1333 32 26.1167C24.2917 26.3583 24.2917 37.575 32 37.825C36.725 37.675 38.55 33.4 37.4833 30.0583L35.275 32.2667C35.15 33.8083 34.0667 35.2583 32 35.3167C27.525 35.2167 27.1333 28.9667 31.8167 28.65L31.825 28.6417Z" fill="white" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_115_535">
                    <rect width="64" height="64" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_115_535">
                    <rect width="20" height="20" fill="white" transform="translate(22 22)" />
                  </clipPath>
                </defs>
              </svg>
              <h4 className="h4 mb-2">Targeted Questioning</h4>
              <p className="text-lg text-gray-400 text-center">Our generative AI technology doesn't just collect one-way feedback; it engages in meaningful conversations. By asking targeted, context-aware questions, we dive deeper into your gaming experience to uncover the insights that matter most. Chat about recent balance changes, upcoming map patches, and plans for future expansions.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center col-span-2" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                <g clip-path="url(#clip0_115_539)">
                  <path d="M64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32Z" fill="#DB1515" />
                  <g clip-path="url(#clip1_115_539)">
                    <path d="M41.1833 29.325C40.6917 28.875 40.05 28.65 39.375 28.675C38.7083 28.7083 38.0917 29 37.6333 29.4917L34.95 32.4333C34.4917 31.675 33.6583 31.1667 32.7083 31.1667H29.4917V30.3333H29.8083C31.0167 30.3333 31.9917 29.35 31.9917 28.15C31.9917 27.075 31.225 26.1667 30.1667 25.9917L27.425 25.5333C27.175 25.4917 26.9917 25.275 26.9917 25.0167C26.9917 24.7333 27.225 24.5 27.5083 24.5H29.4917C29.95 24.5 30.325 24.875 30.325 25.3333H31.9917C31.9917 23.9583 30.8667 22.8333 29.4917 22.8333V22H27.825V22.8333H27.5083C26.3 22.8333 25.325 23.8167 25.325 25.0167C25.325 26.0917 26.0917 27 27.15 27.175L29.8917 27.6333C30.1417 27.675 30.325 27.8917 30.325 28.15C30.325 28.4333 30.0917 28.6667 29.8083 28.6667H27.825C27.3667 28.6667 26.9917 28.2917 26.9917 27.8333H25.325C25.325 29.2083 26.45 30.3333 27.825 30.3333V31.1667H24.5C23.125 31.1667 22 32.2917 22 33.6667V39.5C22 40.875 23.125 42 24.5 42H33.2083L41.3667 32.8417C42.275 31.8167 42.1917 30.2417 41.1833 29.3167V29.325ZM40.125 31.7417L32.4667 40.3417H24.5C24.0417 40.3417 23.6667 39.9667 23.6667 39.5083V33.675C23.6667 33.2167 24.0417 32.8417 24.5 32.8417H32.7167C33.2417 32.8417 33.6667 33.2667 33.6667 33.7917C33.6667 34.2583 33.3167 34.6667 32.85 34.7333L28.55 35.35L28.7833 37L33.0833 36.3833C34.0667 36.2417 34.8583 35.5583 35.175 34.6667L38.8667 30.6167C39.0167 30.45 39.225 30.35 39.45 30.3417C39.675 30.3417 39.8917 30.4083 40.0583 30.5583C40.4 30.8667 40.425 31.4 40.1167 31.7417H40.125Z" fill="white" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_115_539">
                    <rect width="64" height="64" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_115_539">
                    <rect width="20" height="20" fill="white" transform="translate(22 22)" />
                  </clipPath>
                </defs>
              </svg>
              <h4 className="h4 mb-2">Feedback Rewards</h4>
              <p className="text-lg text-gray-400 text-center">Get rewarded to have your voice heard. Sounds like a sweet deal. Cycle partners with game studios to offer in-game rewards to incentivize feedback. Give your feedback for 5 minute chat about the recent patch?  Get 500 V-Bucks, or 1000 Riot Points.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center col-span-2" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-red-100" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-white-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                  <circle className="stroke-current text-white-100" cx="13" cy="9" r="3" />
                </g>
              </svg>
              <h4 className="h4 mb-2 text-center">Actionable Insights for Developers</h4>
              <p className="text-lg text-gray-400 text-center">We translate your feedback into actionable insights for game studios. This means your specific feedback doesn’t stay stuck in forums to comb through -  it’s transformed into weekly reports for developers to know how recent game changes have influenced players.  We specialize in shrinking the gap between the playerbase and game studios.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center col-span-2 lg:col-start-2" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                <g clip-path="url(#clip0_115_541)">
                  <path d="M64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32Z" fill="#DB1515" />
                  <g clip-path="url(#clip1_115_541)">
                    <path d="M42 31.1667C42 29.86 41.3733 28.6333 40.3333 27.8517V27.8333C40.3333 26.2525 39.2275 24.9258 37.7483 24.585C37.4075 23.1067 36.0808 22 34.5 22C33.505 22 32.6117 22.4383 32 23.1308C31.3883 22.4375 30.495 22 29.5 22C27.9192 22 26.5925 23.1058 26.2517 24.585C24.7733 24.9258 23.6667 26.2525 23.6667 27.8333V27.8517C22.6267 28.6333 22 29.86 22 31.1667C22 31.905 22.1958 32.6142 22.5717 33.25C22.1967 33.8858 22 34.595 22 35.3333C22 36.7383 22.715 38.0367 23.8892 38.805C24.4875 40.7042 26.2325 42 28.25 42C29.7983 42 31.17 41.2283 32 40.0492C32.83 41.2283 34.2017 42 35.75 42C37.7683 42 39.5125 40.7033 40.1117 38.805C41.285 38.0375 42 36.7383 42 35.3333C42 34.595 41.8042 33.8858 41.4283 33.25C41.8033 32.6142 42 31.905 42 31.1667ZM28.25 40.3333C26.8883 40.3333 25.7225 39.4042 25.4158 38.0733L25.33 37.7042L24.9967 37.5258C24.1758 37.0867 23.6658 36.2467 23.6658 35.3333C23.6658 34.7708 23.8608 34.2317 24.2308 33.7733L24.6542 33.25L24.2308 32.7267C23.8608 32.2692 23.6658 31.73 23.6658 31.1667C23.6658 30.275 24.1583 29.4442 24.9517 28.9975L25.4683 28.7075C25.4683 28.7075 25.3325 27.9325 25.3325 27.8333C25.3325 26.9142 26.08 26.1667 26.9992 26.1667H27.8325V25.3333C27.8325 24.4142 28.58 23.6667 29.4992 23.6667C30.4183 23.6667 31.1658 24.4142 31.1658 25.3333V28.6667H29.2758C28.9875 28.1683 28.4492 27.8333 27.8325 27.8333C26.9117 27.8333 26.1658 28.5792 26.1658 29.5C26.1658 30.4208 26.9117 31.1667 27.8325 31.1667C28.4492 31.1667 28.9875 30.8317 29.2758 30.3333H31.1658V34.5H29.2758C28.9875 34.0017 28.4492 33.6667 27.8325 33.6667C26.9117 33.6667 26.1658 34.4125 26.1658 35.3333C26.1658 36.2542 26.9117 37 27.8325 37C28.4492 37 28.9875 36.665 29.2758 36.1667H31.1658V37.4167C31.1658 39.025 29.8583 40.3333 28.25 40.3333ZM39.7683 33.7733C40.1383 34.2308 40.3333 34.77 40.3333 35.3333C40.3333 36.2467 39.8233 37.0867 39.0033 37.5258L38.67 37.7042L38.585 38.0725C38.2775 39.4033 37.1117 40.3325 35.75 40.3325C34.1417 40.3325 32.8333 39.0242 32.8333 37.4158V33.6658H37V30.9425C37.4983 30.6542 37.8333 30.1158 37.8333 29.4992C37.8333 28.5783 37.0875 27.8325 36.1667 27.8325C35.2458 27.8325 34.5 28.5783 34.5 29.4992C34.5 30.1158 34.835 30.6542 35.3333 30.9425V31.9992H32.8333V25.3333C32.8333 24.4142 33.5808 23.6667 34.5 23.6667C35.4192 23.6667 36.1667 24.4142 36.1667 25.3333V26.1667H37C37.9192 26.1667 38.6667 26.9142 38.6667 27.8333C38.6667 27.9333 38.5308 28.7075 38.5308 28.7075L39.0475 28.9975C39.8408 29.4433 40.3333 30.2742 40.3333 31.1667C40.3333 31.7292 40.1383 32.2683 39.7683 32.7267L39.345 33.25L39.7683 33.7733Z" fill="white" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_115_541">
                    <rect width="64" height="64" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_115_541">
                    <rect width="20" height="20" fill="white" transform="translate(22 22)" />
                  </clipPath>
                </defs>
              </svg>
              <h4 className="h4 mb-2">Dynamic Learning</h4>
              <p className="text-lg text-gray-400 text-center">The more you share, the smarter our AI gets. Cycle learns from each interaction for each game, balancing what devs want to learn from the community with the common themes Cycle keeps seeing in conversation. Imagine a community manager who is constantly improving to ask better questions and gather more nuanced feedback, and has a better pulse on the community the bigger it gets. </p>
            </div>


            {/* 5th item */}
            <div className="relative flex flex-col items-center col-span-2 md:col-start-2 lg:col-start-4" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                <g clip-path="url(#clip0_115_543)">
                  <path d="M64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32Z" fill="#DB1515" />
                  <g clip-path="url(#clip1_115_543)">
                    <path d="M28.4833 38.2084C28.7275 38.4617 28.7275 38.8717 28.4833 39.125L26.1667 41.5834V39.5H24.5C23.1217 39.5 22 38.3784 22 37V33.6667C22 32.2884 23.1217 31.1667 24.5 31.1667H27.8333V32.8334H24.5C24.0408 32.8334 23.6667 33.2067 23.6667 33.6667V37C23.6667 37.46 24.0408 37.8334 24.5 37.8334H26.1667V35.75L28.4833 38.2084ZM29.5 29.5H34.5V34.5H29.5V29.5ZM31.1667 32.8334H32.8333V31.1667H31.1667V32.8334ZM29.5 22.8334H34.5V27.8334H29.5V22.8334ZM31.1667 26.1667H32.8333V24.5H31.1667V26.1667ZM29.5 36.1667H34.5V41.1667H29.5V36.1667ZM31.1667 39.5H32.8333V37.8334H31.1667V39.5ZM40.75 27.8334C40.75 27.4492 40.6917 27.0792 40.5842 26.73L41.7483 26.0592L40.9167 24.615L39.75 25.2867C39.245 24.7417 38.5817 24.3467 37.8325 24.1759V22.8325H36.1658V25.7492H36.9992C38.1483 25.7492 39.0825 26.6842 39.0825 27.8325C39.0825 28.9809 38.1483 29.9159 36.9992 29.9159H36.1658V32.8325H37.8325V31.4892C38.5808 31.3184 39.245 30.9234 39.75 30.3784L40.9167 31.05L41.7483 29.6059L40.5842 28.935C40.6917 28.5859 40.75 28.2159 40.75 27.8317V27.8334Z" fill="white" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_115_543">
                    <rect width="64" height="64" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_115_543">
                    <rect width="20" height="20" fill="white" transform="translate(22 22)" />
                  </clipPath>
                </defs>
              </svg>
              <h4 className="h4 mb-2">Empowering Every Voice</h4>
              <p className="text-lg text-gray-400 text-center">Seamlessly integrating into your gaming environment, Cycle partners with our premium studio customers to live directly in-game. Gone are the days of the external feedback forum - there's a community manager you can talk to anytime in-game with Cycle. </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
