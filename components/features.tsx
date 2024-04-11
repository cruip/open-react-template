import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faCheck, faStar, faMoneyBill, faChartLine} from "@fortawesome/free-solid-svg-icons";
import {faPeopleGroup} from "@fortawesome/free-solid-svg-icons";

export default function Features() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-black">Stop investing like an amateur.</h2>
            <p className="text-xl text-gray-400"> Take this seriously. </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div className="relative flex flex-col" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <FontAwesomeIcon icon={faPeopleGroup} className="h-12 w-12 text-white bg-black p-2 rounded-lg" />
              <h4 className="h4 my-2 text-gray-700">24/7 Expert Concierge</h4>
              <p className="text-lg text-gray-400">
                Say goodbye to the complexity of managing properties. Our expert team is here to assist you with
                onboarding and day-to-day management around the clock, making property management hassle-free and
                accessible
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <FontAwesomeIcon icon={faMoneyBill} className="h-12 w-12 text-white bg-black p-2 rounded-lg " />
              <h4 className="h4 my-2 text-gray-700">Track Your Expenses</h4>
              <p className="text-lg text-gray-400">
                Understand your expenses and make informed decisions to maximize your returns.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <FontAwesomeIcon icon={faChartLine} className="h-12 w-12 text-white bg-black p-2 rounded-lg" />
              <h4 className="h4 my-2 text-gray-700">Instant Features</h4>
              <p className="text-lg text-gray-400">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
