import React from "react";

const Features = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row gap-8 sm:gap-20 px-6 sm:px-52 py-20 items-center">
      <div>
        <h6 className="text-orange-500 font-bold text-lg mb-2">
          Lorem ipsum dolor
        </h6>
        <h4 className="text-white text-3xl font-semibold capitalize w-3/4 leading-snug mb-10  ">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h4>
        <p className="text-base leading-6 text-slate-100 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam error
          rem impedit aut ducimus voluptatum sit alias, ut natus accusamus
          temporibus ipsam. Neque in accusamus, inventore earum ut numquam unde.
        </p>
        <p className="text-base leading-6 text-slate-100 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          magni magnam molestiae est neque velit aspernatur cum ut!
        </p>
        <div className="flex justify-between w-full sm:w-[80%] mt-8 sm:mt-0">
          <button className="text-sm capitalize rounded-lg bg-purple-600 h-fit w-fit py-2 px-6">
            read case study
          </button>
          <div className="flex">
            <div className="w-1/2">
              <p className="text-orange-500 text-4xl font-bold mb-3">0%</p>
              <p className="text-white">Lorem ipsum dolor sit.</p>
            </div>
            <div className="w-1/2">
              <p className="text-orange-500 text-4xl font-bold mb-3">0K</p>
              <p className="text-white">Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
      </div>
      <img
          className="w-full relative rounded-2xl"
          src="/static/images/landing/blog_casestudy.png"
        />
    </section>
  );
};

export default Features;
