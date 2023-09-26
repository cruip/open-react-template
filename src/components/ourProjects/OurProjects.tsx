import React from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    img: "/static/images/landing/landing-cs-creativeAgency.png",
    title: "creative agency",
    desc: "Lorem ipsum dolor sit",
  },
  {
    id: 2,
    img: "/static/images/landing/landing-cs-devops.png",
    title: "digital marketing",
    desc: "Lorem ipsum dolor sit",
  },
  {
    id: 3,
    img: "/static/images/landing/landing-cs-digital-marketing.png",
    title: "digital agency",
    desc: "Lorem ipsum dolor sit",
  },
  {
    id: 4,
    img: "/static/images/landing/landing-cs-plan-management.png",
    title: "plan management",
    desc: "Lorem ipsum dolor sit",
  },
  {
    id: 5,
    img: "/static/images/landing/landing-cs-social-engagement.png",
    title: "social engagement",
    desc: "Lorem ipsum dolor sit",
  },
  {
    id: 6,
    img: "/static/images/landing/landing-cs-web-application.png",
    title: "web application",
    desc: "Lorem ipsum dolor sit",
  },
];
const OurProjects = () => {
  return (
    <section className="px-6 md:px-80 py-5 md:py-10">
      <div>
        <h6 className="text-orange-500 font-bold text-lg mb-2">
          Lorem ipsum dolor
        </h6>
        <h4 className="text-white text-5xl font-semibold capitalize w-full md:w-1/2 leading-snug mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h4>
      </div>
      <div>
        <div className="flex gap-5 justify-end">
          <button className="text-xl font-normal hover:underline hover:underline-offset-3">
            all works
          </button>
          <button className="text-xl font-normal hover:underline hover:underline-offset-3">
            branding
          </button>
          <button className="text-xl font-normal hover:underline hover:underline-offset-3">
            mobile apps
          </button>
        </div>
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 my-3">
          {/* single item */}
          {data.map((val) => {
            return (
              <div key={val.id} className="rounded-2xl overflow-hidden bg-[#202020]">
                <img src={val.img} />
                <div className="p-5">
                  <h4 className="text-white text-2xl font-semibold capitalize mb-2">
                    {val.title}
                  </h4>
                  <p className="text-sm text-slate-200">{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
