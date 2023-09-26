import Facebook from "@/icons/facebook";
import Google from "@/icons/google";
import Twitter from "@/icons/twitter";
import { Twinkle_Star } from "next/font/google";
import React from "react";

const Testimonials = () => {
  return (
    <section className="px-6 md:px-40 py-5 md:py-20">
      <div>
        <h6 className="text-orange-500 font-bold text-lg mb-2">Testimonials</h6>
        <h4 className="text-white text-3xl font-semibold capitalize w-full md:w-1/2 leading-snug mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h4>
        <p className="text-md text-slate-400 leading-snug">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam fuga
          libero nihil dolore pariatur quod magnam dolor totam nisi? Odio?
        </p>
      </div>
      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {/* single item */}
        <div className="rounded-2xl bg-slate-100 p-6">
          <div className="flex justify-between items-center mb-8">
            <Facebook height={32} />
          </div>
          <p className="text-lg leading-normal my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto
            distinctio soluta, omnis ullam, iure eveniet totam temporibus unde
            deleniti voluptates aspernatur molestiae illum perspiciatis? Nemo
            voluptate fugit dignissimos dolor.
          </p>
          <div className="flex gap-3 items-center mt-auto">
            <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
            <div>
              <h6 className="font-medium text-lg capitalize">names</h6>
              <p className="text-sm font-light">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-slate-100 p-6">
          <div className="flex justify-between items-center mb-8">
            <Google height={32} />
          </div>
          <p className="text-lg leading-normal my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto
            distinctio soluta, omnis ullam, iure eveniet totam temporibus unde
            deleniti voluptates aspernatur molestiae illum perspiciatis? Nemo
            voluptate fugit dignissimos dolor.
          </p>
          <div className="flex gap-3 items-center mt-auto">
            <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
            <div>
              <h6 className="font-medium text-lg capitalize">names</h6>
              <p className="text-sm font-light">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-slate-100 p-6">
          <div className="flex justify-between items-center mb-8  ">
            <Twitter height={32} />
          </div>
          <p className="text-xl leading-normal my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto
            distinctio soluta, omnis ullam, iure eveniet totam temporibus unde
            deleniti voluptates aspernatur molestiae illum perspiciatis? Nemo
            voluptate fugit dignissimos dolor.
          </p>
          <div className="flex gap-3 items-center mt-auto">
            <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
            <div>
              <h6 className="font-medium text-lg capitalize">names</h6>
              <p className="text-sm font-light">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
