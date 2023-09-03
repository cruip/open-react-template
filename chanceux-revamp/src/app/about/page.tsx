import React from "react";
import Carousel from "@/components/about/Carousel";
import PrevBtn from "@/components/about/prevBtn";
import NextBtn from "@/components/about/nextBtn";

const page = () => {
  return (
    <section className="text-black py-10 md:py-0">
      {/* first */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-32 py-2 md:py-20 px-6 md:px-60">
        <h1 className="text-4xl md:text-5xl font-bold capitalize">about us</h1>
        <p className="text-sm md:text-md font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
          cumque. At ipsum quisquam, autem vero sit blanditiis placeat, rerum
          quam tenetur animi repellendus ipsam corporis amet. Accusantium rerum
          in temporibus voluptatem! Ab a, qui numquam rem repellendus eaque
          impedit voluptates. quam tenetur animi repellendus ipsam corporis
          amet. Accusantium rerum
        </p>
      </div>
      {/* second */}
      <div className="relative pt-6 md:pt-20">
        <div className="md:bg-green-800 absolute w-1/2 h-full top-0 left-0 -z-10"></div>
        <div className="px-6 md:px-60 z-10">
          {/*  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32">
            <div className="">
              <h3 className="text-2xl md:text-3xl font-semibold w-full md:w-2/3 z-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                tenetur placeat explicabo magnam
              </h3>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Lorem ipsum dolor
              </h3>
              <p className="text-sm md:text-md leading-relaxed w-full md:w-2/3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
                quis ducimus, dolor odio, ullam ipsa beatae officiis totam illum
                neque eveniet aspernatur excepturi rem maiores numquam,
                perspiciatis impedit consequatur saepe.
              </p>
            </div>
          </div>
          {/* carousel */}
          <div>
            <Carousel />
          </div>
        </div>
      </div>
      {/* third */}
      <div className="relative">
        <div className="md:bg-slate-300 absolute w-1/2 h-[100vh] -top-96 right-0 -z-10"></div>
        <div className="px-6 md:px-60 py-7 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32">
          <div className="order-2 md:order-1">
            <p className="text-md leading-relaxed w-full md:w-2/3 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              est earum ex iste ipsum sint non nesciunt modi aperiam, fuga
              iusto, corporis accusantium eum deleniti amet doloremque ducimus
              reiciendis placeat inventore praesentium eligendi dolorum. Iusto
              ea libero doloribus nihil odit enim, et repudiandae optio
              dignissimos fugit ex id laboriosam maxime.
            </p>
            <p className="text-md leading-relaxed w-full md:w-2/3 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              voluptatum nesciunt quis praesentium beatae amet dolore, et rerum
              recusandae vero quae officia obcaecati enim, perferendis ab
              similique sed? Veniam ea ullam deleniti dolores aliquid? Nobis est
              nam repellendus praesentium distinctio aut laborum rem modi, natus
              quis dolorem amet, eius, eaque provident iste ipsa. Soluta
              excepturi voluptate consectetur. Dolorum, error maxime.
            </p>
            <button className="py-2 px-4 mt-3 md:mt-5 text-md md:text-lg capitalize font-medium rounded-sm bg-green-700 text-white">
              Lorem ipsum
            </button>
          </div>
          <div className="relative order-1 md:order-2">
            <p className="text-md font-bold mb-3">Lorem ipsum dolor sit amet</p>
            <p className="text-2xl font-light w-full md:w-2/3 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              nisi sit amet consectetur adipi
            </p>
            <p className="text-sm font-light mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="mt-6">
              <PrevBtn
                className="border-2 border-black rounded-full p-2 mx-1"
                onClick
              />
              <NextBtn
                className="border-2 border-black rounded-full p-2 mx-1"
                onClick
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
