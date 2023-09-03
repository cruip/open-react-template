import React from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    img: "https://i.postimg.cc/SQ7nQrYW/Contact-desktop.png",
    title: " creative agency",
    desc: "Lorem ipsum dolor sit",
  },
  {
    id: 2,
    img: "https://i.postimg.cc/SQ7nQrYW/Contact-desktop.png",
    title: "digital marketing",
    desc: "Lorem ipsum dolor sit",
  },
  {
    id: 3,
    img: "https://i.postimg.cc/SQ7nQrYW/Contact-desktop.png",
    title: "digital agency",
    desc: "Lorem ipsum dolor sit",
  },
  {
    id: 4,
    img: "https://i.postimg.cc/SQ7nQrYW/Contact-desktop.png",
    title: "plan management",
    desc: "Lorem ipsum dolor sit",
  },
  {
    id: 5,
    img: "https://i.postimg.cc/SQ7nQrYW/Contact-desktop.png",
    title: "social engagement",
    desc: "Lorem ipsum dolor sit",
  },
  {
    id: 6,
    img: "https://i.postimg.cc/SQ7nQrYW/Contact-desktop.png",
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
        <h4 className="text-3xl font-semibold capitalize w-full md:w-1/2 leading-snug mb-5">
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
              <div key={val.id} className="">
                <div className="w-full h-[250px] md:h-[350px] relative mb-5">
                  <Image
                    src={val.img}
                    alt=""
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="pl-5">
                  <h4 className="text-2xl font-medium capitalize mb-2">
                    {val.title}
                  </h4>
                  <p className="text-sm text-slate-400">{val.desc}</p>
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
