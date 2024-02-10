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
              <svg className="mb-5" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                <g clip-path="url(#clip0_141_671)">
                  <path d="M100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100C77.6142 100 100 77.6142 100 50Z" fill="#DB1515" />
                  <path d="M58.4635 39.1497V34.7656L63.5417 29.6875V36.4583H70.3125L65.2344 41.5365H60.8503L53.25 49.1367C53.3177 49.4076 53.3685 49.6953 53.3685 50C53.3685 51.862 51.8451 53.3854 49.9831 53.3854C48.1211 53.3854 46.5977 51.862 46.5977 50C46.5977 48.138 48.1211 46.6146 49.9831 46.6146C50.2878 46.6146 50.5755 46.6654 50.8464 46.7331L58.4466 39.1328L58.4635 39.1497ZM66.6393 44.9219H64.3711C64.9128 46.4961 65.2344 48.1719 65.2344 49.9323C64.4727 70.1771 35.5273 70.1771 34.7656 49.9323C34.7656 41.5026 41.6042 34.6471 50 34.6471C51.7773 34.6471 53.487 34.9688 55.0781 35.5443V33.3607L57.431 31.0078C45.7682 26.6914 30.3307 32.9883 29.6875 49.9323C29.6875 61.1719 38.7943 70.3125 50 70.3125C61.2057 70.3125 70.3125 61.1719 70.3125 49.9323C70.2109 47.224 69.7201 44.7865 68.9245 42.6198L66.6393 44.9049V44.9219ZM49.6445 43.1784L54.0625 38.7604C52.8607 38.3372 51.5065 38.0833 50 38.0495C34.3424 38.5404 34.3424 61.3242 50 61.832C59.5977 61.5273 63.3047 52.8438 61.138 46.056L56.6523 50.5417C56.3984 53.6732 54.1979 56.6185 50 56.737C40.9102 56.5339 40.1146 43.8385 49.6276 43.1953L49.6445 43.1784Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_141_671">
                    <rect width="100" height="100" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h4 className="h4 mb-2">Targeted Questioning</h4>
              <p className="text-lg text-gray-400 text-center">Cycle is better than the status quo one-way feedback; it engages in meaningful conversations. By asking targeted, context-aware questions, we dive deeper into your gaming experience to uncover the insights that matter most. Chat about recent balance changes, upcoming map patches, and plans for future expansions.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center col-span-2" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="mb-5" xmlns="http://www.w3.org/2000/svg" width="100" height="101" viewBox="0 0 100 101" fill="none">
                <g clip-path="url(#clip0_141_683)">
                  <path d="M100 50.75C100 23.1358 77.6142 0.75 50 0.75C22.3858 0.75 0 23.1358 0 50.75C0 78.3642 22.3858 100.75 50 100.75C77.6142 100.75 100 78.3642 100 50.75Z" fill="#DB1515" />
                  <g clip-path="url(#clip1_141_683)">
                    <path d="M73.3411 43.7539C72.3424 42.8398 71.0391 42.3828 69.668 42.4336C68.3138 42.5013 67.0612 43.0937 66.1302 44.0924L60.6797 50.0677C59.7487 48.5273 58.056 47.4948 56.1263 47.4948H49.5924V45.8021H50.2357C52.6901 45.8021 54.6706 43.8047 54.6706 41.3672C54.6706 39.1836 53.1133 37.3385 50.9635 36.9831L45.3945 36.0521C44.8867 35.9674 44.5143 35.5273 44.5143 35.0026C44.5143 34.4271 44.9883 33.9531 45.5638 33.9531H49.5924C50.5234 33.9531 51.2852 34.7148 51.2852 35.6458H54.6706C54.6706 32.8529 52.3854 30.5677 49.5924 30.5677V28.875H46.207V30.5677H45.5638C43.1094 30.5677 41.1289 32.5651 41.1289 35.0026C41.1289 37.1862 42.6862 39.0313 44.8359 39.3867L50.4049 40.3177C50.9128 40.4023 51.2852 40.8424 51.2852 41.3672C51.2852 41.9427 50.8112 42.4167 50.2357 42.4167H46.207C45.276 42.4167 44.5143 41.6549 44.5143 40.724H41.1289C41.1289 43.5169 43.4141 45.8021 46.207 45.8021V47.4948H39.4531C36.6602 47.4948 34.375 49.7799 34.375 52.5729V64.4219C34.375 67.2148 36.6602 69.5 39.4531 69.5H57.1419L73.7135 50.8971C75.5586 48.8151 75.3893 45.6159 73.3411 43.737V43.7539ZM71.1914 48.6628L55.6354 66.1315H39.4531C38.5221 66.1315 37.7604 65.3698 37.7604 64.4388V52.5898C37.7604 51.6589 38.5221 50.8971 39.4531 50.8971H56.1432C57.2096 50.8971 58.0729 51.7604 58.0729 52.8268C58.0729 53.7747 57.362 54.6042 56.4141 54.7396L47.6797 55.9922L48.1536 59.3438L56.888 58.0911C58.8854 57.8034 60.4935 56.4154 61.1367 54.6042L68.6354 46.3776C68.9401 46.0391 69.3633 45.8359 69.8203 45.819C70.2773 45.819 70.7174 45.9544 71.056 46.2591C71.75 46.8854 71.8008 47.9687 71.1745 48.6628H71.1914Z" fill="white" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_141_683">
                    <rect width="100" height="100" fill="white" transform="translate(0 0.75)" />
                  </clipPath>
                  <clipPath id="clip1_141_683">
                    <rect width="40.625" height="40.625" fill="white" transform="translate(34.375 28.875)" />
                  </clipPath>
                </defs>
              </svg>
              <h4 className="h4 mb-2">Feedback Rewards</h4>
              <p className="text-lg text-gray-400 text-center">Get rewarded to have your voice heard. Sounds like a sweet deal. Cycle partners with game studios to offer in-game rewards to incentivize feedback. Give your feedback for 5 minute chat about the recent patch?  Get 500 V-Bucks, or 1000 Riot Points.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center col-span-2" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="mb-5" xmlns="http://www.w3.org/2000/svg" width="100" height="101" viewBox="0 0 100 101" fill="none">
                <g clip-path="url(#clip0_141_687)">
                  <path d="M100 50.25C100 22.6358 77.6142 0.25 50 0.25C22.3858 0.25 0 22.6358 0 50.25C0 77.8642 22.3858 100.25 50 100.25C77.6142 100.25 100 77.8642 100 50.25Z" fill="#DB1515" />
                  <g clip-path="url(#clip1_141_687)">
                    <path d="M67.9427 57.6274L65.4273 55.1121C66.6021 52.6627 67.1167 49.9324 66.8628 47.1428C66.2331 40.1722 60.7622 34.4221 53.8509 33.4725C48.243 32.7074 42.8839 34.94 39.5052 39.4494C37.7143 41.6652 35.832 45.9799 34.0124 50.1524L33.227 51.945H36.5954L37.7465 60.632C37.8565 61.4699 38.5776 62.1012 39.424 62.1012H46.6129V67.1794H63.1303L65.2327 69.2817V70.5648H43.2275V65.4867H39.424C36.8849 65.4867 34.7216 63.5891 34.3898 61.0755L33.6298 55.3304H29.6875V51.5861L30.9113 48.7999C32.9104 44.2195 34.7961 39.8929 36.8358 37.3708C40.9237 31.9084 47.4796 29.1882 54.3113 30.1158C62.7681 31.2804 69.4645 38.3102 70.2346 46.8364C70.5783 50.645 69.7658 54.374 67.9427 57.6274ZM61.849 48.5579C61.849 50.7483 61.1448 52.7727 59.9616 54.4333L66.4311 60.9028L64.0376 63.2963L57.5681 56.8268C55.9076 58.01 53.8831 58.7141 51.6927 58.7141C46.0915 58.7141 41.5365 54.1591 41.5365 48.5579C41.5365 42.9567 46.0915 38.4016 51.6927 38.4016C57.2939 38.4016 61.849 42.9567 61.849 48.5579ZM51.6927 55.3287C55.4268 55.3287 58.4635 52.292 58.4635 48.5579C58.4635 44.8238 55.4268 41.7871 51.6927 41.7871C47.9586 41.7871 44.9219 44.8238 44.9219 48.5579C44.9219 52.292 47.9586 55.3287 51.6927 55.3287Z" fill="white" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_141_687">
                    <rect width="100" height="100" fill="white" transform="translate(0 0.25)" />
                  </clipPath>
                  <clipPath id="clip1_141_687">
                    <rect width="40.625" height="40.625" fill="white" transform="translate(29.6875 29.9375)" />
                  </clipPath>
                </defs>
              </svg>

              <h4 className="h4 mb-2 text-center">Actionable Insights for Developers</h4>
              <p className="text-lg text-gray-400 text-center">Your feedback doesn't stay stuck in forums to comb through -  it's transformed into  reports for developers to know how recent game changes have influenced players.  We specialize in shrinking the gap between the playerbase and game studios.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center col-span-2 lg:col-start-2" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="mb-5" xmlns="http://www.w3.org/2000/svg" width="100" height="101" viewBox="0 0 100 101" fill="none">
                <g clip-path="url(#clip0_141_679)">
                  <path d="M100 50.5C100 22.8858 77.6142 0.5 50 0.5C22.3858 0.5 0 22.8858 0 50.5C0 78.1142 22.3858 100.5 50 100.5C77.6142 100.5 100 78.1142 100 50.5Z" fill="#DB1515" />
                  <g clip-path="url(#clip1_141_679)">
                    <path d="M70.3125 48.8073C70.3125 46.1531 69.0396 43.6615 66.9271 42.0737V42.0365C66.9271 38.8254 64.6809 36.1306 61.6763 35.4383C60.984 32.4354 58.2892 30.1875 55.0781 30.1875C53.057 30.1875 51.2424 31.0779 50 32.4845C48.7576 31.0762 46.943 30.1875 44.9219 30.1875C41.7108 30.1875 39.016 32.4337 38.3237 35.4383C35.3208 36.1306 33.0729 38.8254 33.0729 42.0365V42.0737C30.9604 43.6615 29.6875 46.1531 29.6875 48.8073C29.6875 50.307 30.0853 51.7475 30.8487 53.0391C30.087 54.3306 29.6875 55.7711 29.6875 57.2708C29.6875 60.1247 31.1398 62.762 33.5249 64.3227C34.7402 68.1803 38.2848 70.8125 42.3828 70.8125C45.5279 70.8125 48.3141 69.2451 50 66.8499C51.6859 69.2451 54.4721 70.8125 57.6172 70.8125C61.7169 70.8125 65.2598 68.1786 66.4768 64.3227C68.8602 62.7637 70.3125 60.1247 70.3125 57.2708C70.3125 55.7711 69.9147 54.3306 69.1513 53.0391C69.913 51.7475 70.3125 50.307 70.3125 48.8073ZM42.3828 67.4271C39.6169 67.4271 37.2488 65.5397 36.6259 62.8365L36.4516 62.0866L35.7745 61.7244C34.1072 60.8323 33.0712 59.126 33.0712 57.2708C33.0712 56.1283 33.4673 55.0331 34.2189 54.1021L35.0788 53.0391L34.2189 51.976C33.4673 51.0467 33.0712 49.9516 33.0712 48.8073C33.0712 46.9961 34.0716 45.3085 35.6831 44.4012L36.7326 43.8121C36.7326 43.8121 36.4566 42.2379 36.4566 42.0365C36.4566 40.1694 37.975 38.651 39.8421 38.651H41.5348V36.9583C41.5348 35.0913 43.0531 33.5729 44.9202 33.5729C46.7872 33.5729 48.3056 35.0913 48.3056 36.9583V43.7292H44.4665C43.8809 42.7169 42.7874 42.0365 41.5348 42.0365C39.6643 42.0365 38.1493 43.5514 38.1493 45.4219C38.1493 47.2923 39.6643 48.8073 41.5348 48.8073C42.7874 48.8073 43.8809 48.1268 44.4665 47.1146H48.3056V55.5781H44.4665C43.8809 54.5659 42.7874 53.8854 41.5348 53.8854C39.6643 53.8854 38.1493 55.4004 38.1493 57.2708C38.1493 59.1413 39.6643 60.6563 41.5348 60.6563C42.7874 60.6563 43.8809 59.9758 44.4665 58.9635H48.3056V61.5026C48.3056 64.7695 45.6497 67.4271 42.3828 67.4271ZM65.7794 54.1021C66.531 55.0314 66.9271 56.1266 66.9271 57.2708C66.9271 59.126 65.8911 60.8323 64.2255 61.7244L63.5484 62.0866L63.3758 62.8348C62.7512 65.538 60.3831 67.4254 57.6172 67.4254C54.3503 67.4254 51.6927 64.7678 51.6927 61.5009V53.8837H60.1563V48.352C61.1685 47.7663 61.849 46.6728 61.849 45.4202C61.849 43.5497 60.334 42.0348 58.4635 42.0348C56.5931 42.0348 55.0781 43.5497 55.0781 45.4202C55.0781 46.6728 55.7586 47.7663 56.7708 48.352V50.4983H51.6927V36.9583C51.6927 35.0913 53.2111 33.5729 55.0781 33.5729C56.9452 33.5729 58.4635 35.0913 58.4635 36.9583V38.651H60.1563C62.0233 38.651 63.5417 40.1694 63.5417 42.0365C63.5417 42.2396 63.2658 43.8121 63.2658 43.8121L64.3152 44.4012C65.9267 45.3068 66.9271 46.9944 66.9271 48.8073C66.9271 49.9499 66.531 51.0451 65.7794 51.976L64.9195 53.0391L65.7794 54.1021Z" fill="white" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_141_679">
                    <rect width="100" height="100" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                  <clipPath id="clip1_141_679">
                    <rect width="40.625" height="40.625" fill="white" transform="translate(29.6875 30.1875)" />
                  </clipPath>
                </defs>
              </svg>

              <h4 className="h4 mb-2">Dynamic Learning</h4>
              <p className="text-lg text-gray-400 text-center">The more you share, the smarter our AI gets. Cycle learns from each interaction for each game, balancing what devs want to learn from the community with the common themes Cycle keeps seeing in conversation. Imagine a community manager who is constantly improving to ask better questions and gather more nuanced feedback, and has a better pulse on the community the bigger it gets. </p>
            </div>


            {/* 5th item */}
            <div className="relative flex flex-col items-center col-span-2 md:col-start-2 lg:col-start-4" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="mb-5" xmlns="http://www.w3.org/2000/svg" width="100" height="101" viewBox="0 0 100 101" fill="none">
                <g clip-path="url(#clip0_141_675)">
                  <path d="M100 50.875C100 23.2608 77.6142 0.875 50 0.875C22.3858 0.875 0 23.2608 0 50.875C0 78.4892 22.3858 100.875 50 100.875C77.6142 100.875 100 78.4892 100 50.875Z" fill="#DB1515" />
                  <g clip-path="url(#clip1_141_675)">
                    <path d="M42.8568 63.4851C43.3527 63.9997 43.3527 64.8325 42.8568 65.3471L38.151 70.3406V66.1088H34.7656C31.9659 66.1088 29.6875 63.8304 29.6875 61.0307V54.2598C29.6875 51.4601 31.9659 49.1817 34.7656 49.1817H41.5365V52.5671H34.7656C33.8329 52.5671 33.0729 53.3255 33.0729 54.2598V61.0307C33.0729 61.965 33.8329 62.7234 34.7656 62.7234H38.151V58.4916L42.8568 63.4851ZM44.9219 45.7963H55.0781V55.9525H44.9219V45.7963ZM48.3073 52.5671H51.6927V49.1817H48.3073V52.5671ZM44.9219 32.2546H55.0781V42.4109H44.9219V32.2546ZM48.3073 39.0255H51.6927V35.64H48.3073V39.0255ZM44.9219 59.338H55.0781V69.4942H44.9219V59.338ZM48.3073 66.1088H51.6927V62.7234H48.3073V66.1088ZM67.7734 42.4109C67.7734 41.6305 67.6549 40.879 67.4366 40.1697L69.8013 38.8071L68.112 35.8736L65.7422 37.238C64.7164 36.1309 63.369 35.3286 61.8473 34.9816V32.2529H58.4618V38.1774H60.1546C62.4888 38.1774 64.3863 40.0766 64.3863 42.4092C64.3863 44.7417 62.4888 46.641 60.1546 46.641H58.4618V52.5654H61.8473V49.8368C63.3673 49.4898 64.7164 48.6874 65.7422 47.5804L68.112 48.9447L69.8013 46.0113L67.4366 44.6486C67.6549 43.9394 67.7734 43.1878 67.7734 42.4075V42.4109Z" fill="white" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_141_675">
                    <rect width="100" height="100" fill="white" transform="translate(0 0.875)" />
                  </clipPath>
                  <clipPath id="clip1_141_675">
                    <rect width="40.625" height="40.625" fill="white" transform="translate(29.6875 30.5625)" />
                  </clipPath>
                </defs>
              </svg>
              <h4 className="h4 mb-2">Effortless Integration</h4>
              <p className="text-lg text-gray-400 text-center">Seamlessly integrating into your gaming environment, Cycle partners with our premium studio customers to live directly in-game. Gone are the days of the external feedback forum - there's a community manager you can talk to anytime in-game with Cycle. </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
