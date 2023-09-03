import React from "react";
import Image from "next/image";

import PrevBtn from "./prevBtn";
import NextBtn from "./nextBtn";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const carouselData = [
  {
    id: 1,
    img: "https://i.postimg.cc/SQ7nQrYW/Contact-desktop.png",
    title: "Lorem-1",
    heading: "Lorem ipsum, dolor sit amet consectetur adipisi -1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laborum nisi velit quis dolores est. Vero dolor optio quam ipsam esse ullam, omnis modi, porro ad, fugiat doloremque aut laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laborum nisi velit quis dolores est. Vero dolor optio quam ipsam esse ullam, omnis modi, porro ad, fugiat doloremque aut laudantium.",
  },
  // {
  //   id: 2,
  //   img: "https://i.postimg.cc/SQ7nQrYW/Contact-desktop.png",
  //   title: "Lorem-2",
  //   heading: "Lorem ipsum, dolor sit amet consectetur adipisi -2",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laborum nisi velit quis dolores est. Vero dolor optio quam ipsam esse ullam, omnis modi, porro ad, fugiat doloremque aut laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laborum nisi velit quis dolores est. Vero dolor optio quam ipsam esse ullam, omnis modi, porro ad, fugiat doloremque aut laudantium.",
  // },
  // {
  //   id: 3,
  //   img: "https://i.postimg.cc/SQ7nQrYW/Contact-desktop.png",
  //   title: "Lorem-3",
  //   heading: "Lorem ipsum, dolor sit amet consectetur adipisi -3",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laborum nisi velit quis dolores est. Vero dolor optio quam ipsam esse ullam, omnis modi, porro ad, fugiat doloremque aut laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laborum nisi velit quis dolores est. Vero dolor optio quam ipsam esse ullam, omnis modi, porro ad, fugiat doloremque aut laudantium.",
  // },
];
const Carousel = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <div className=" w-full md:w-2/3 h-full md:h-2/3 flex py-10 md:py-20">
      <div className="h-auto bg-green-700 w-auto flex justify-between flex-col py-6 px-3">
        <p>index</p>
        <div>
          <PrevBtn
            onClick
            className="border-2 border-white rounded-full p-2 my-1"
          />
          <NextBtn
            onClick
            className="border-2 border-white rounded-full p-2 my-1"
          />
        </div>
      </div>
      {/* main */}
      <div>
        {/* <Slider {...settings}> */}
        {carouselData.map((items) => {
          const { id, title, heading, desc, img } = items;
          return (
            <div
              key={id}
              className="relative h-fit md:h-[500px] w-auto pt-7 md:pt-20 p-3 md:pl-10"
            >
              <Image
                src={img}
                alt=""
                fill={true}
                style={{ objectFit: "cover", zIndex: -1 }}
              />
              <h6 className="text-md md:text-lg font-medium mb-3 z-50">
                {heading}
              </h6>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">{title}</h3>
              <p className="text-sm md:text-md leading-relaxed w-full md:w-2/3">{desc}</p>
            </div>
          );
        })}
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default Carousel;
