import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const pricingData = [
  {
    id: "tier-standard",
    title: "Investor",
    description: "1 license for only 1 activation",
    oldPrice: "$39",
    newPrice: "$19.99",
    features: [
      "1-2 properties",
      "Human account specialist 24/7",
      "Investement analysis",
      "Mobile app",
      "Tax documentation & monthly reports",
    ],
    isPopular: false,
    productId: "prod_Ps3821WlPFrbSD",
    paymentLink: "https://buy.stripe.com/9AQbJGe8M8wOec0eUW",
  },
  {
    id: "tier-extended",
    title: "Investor Plus",
    description: "1 license for up to 3 activations",
    oldPrice: "$59",
    newPrice: "$29.99",
    features: [
      "3-5 properties",
      "Human account specialist 24/7",
      "Investement analysis",
      "Mobile app",
      "Tax documentation & monthly reports",
    ],
    isPopular: true,
    productId: "prod_Ps3ADnzfIMukC1",
    paymentLink: "https://buy.stripe.com/fZeeVS9SweVc8RG9AD",
  },
  {
    id: "tier-premium",
    title: "Property Management",
    description: "1 license for up to 10 activations",
    oldPrice: "$200.00",
    newPrice: "$129.99",
    features: [
      "Property management",
      "Rental advertising",
      "Tenant screening",
      "Property cleaning services",
      "Human account specialist 24/7",
    ],
    isPopular: false,
    productId: "prod_Ps3BhswuycIw1i",
    paymentLink: "https://buy.stripe.com/9AQ4hefcQ14m6Jy004",
  },
  // Add more pricing data here
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

const PricingCard: React.FC<{data: (typeof pricingData)[0]}> = ({data}) => {
  return (
    <div
      className={`${
        data.isPopular ? "ring-4 ring-emerald-500 bg-white" : "ring-2 ring-gray-300 bg-gray-50"
      } rounded-lg p-8 xl:p-10 `}
    >
      <div className="flex items-center justify-between gap-x-4">
        <h3
          id={data.id}
          className={`${data.isPopular ? "text-emerald-500" : "text-gray-900"} text-2xl font-semibold leading-8`}
        >
          {data.title}
        </h3>
        {data.isPopular && (
          <p className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-emerald-500">
            Most popular
          </p>
        )}
      </div>
      <p className=" text-base leading-6 text-gray-600">{data.description}</p>
      <p className=" flex items-baseline gap-x-1">
        <span className="line-through text-xl font-sans text-gray-500/70">{data.oldPrice}</span>
        <span className="text-3xl font-bold tracking-tight text-gray-900">{data.newPrice}/mo</span>
      </p>
      <Link
        href={`/signup?paymentLink=${data.paymentLink}`}
        aria-describedby={data.id}
        className={`${
          data.isPopular
            ? "bg-emerald-500 text-white font-semibold shadow-sm hover:bg-blue-500"
            : "text-blue-600 ring-1 ring-inset ring-blue-400 hover:ring-blue-300"
        } mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
      >
        Select this plan
      </Link>
      <div className="border-t border-gray-300 mt-16"></div>
      <ul role="list" className="space-y-3 text-sm leading-6 text-gray-600 mt-6">
        {data.features.map((feature, index) => (
          <li key={index} className="flex gap-x-3 text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-5 flex-none text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Pricing: React.FC = () => {
  return (
    <section className="flex items-center justify-center pt-10 pb-10 bg-gray-100">
      <div className="p-4 sm:px-10 flex flex-col justify-center items-center text-base h-100vh mx-auto" id="pricing">
        <h3 className="text-4xl font-bold text-center text-black flex gap-2 justify-center">
          Membership plans built for every investor.
        </h3>
        <h5 className="text-lg text-center flex gap-2 text-gray-700 justify-center mb-10">
          Whichever plan you choose, rest easy knowing that your features will cover.
        </h5>
        <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {pricingData.map((data) => (
            <PricingCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
