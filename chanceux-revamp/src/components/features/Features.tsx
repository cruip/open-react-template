import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 px-6 md:px-40 py-20">
      <div>
        <h6 className="text-orange-500 font-bold text-lg mb-2">
          Lorem ipsum dolor
        </h6>
        <h4 className="text-3xl font-semibold capitalize w-3/4 leading-snug mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h4>
        <p className="text-sm leading-6 text-slate-400 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam error
          rem impedit aut ducimus voluptatum sit alias, ut natus accusamus
          temporibus ipsam. Neque in accusamus, inventore earum ut numquam unde.
        </p>
        <p className="text-sm leading-6 text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          magni magnam molestiae est neque velit aspernatur cum ut!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-8 md:gap-3 mt-8 md:mt-0">
          <button className="text-md capitalize rounded-lg bg-purple-600 h-fit w-fit py-2 px-6">
            read case study
          </button>
          <div>
            <p className="text-orange-500 text-4xl font-bold mb-3">0%</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div>
            <p className="text-orange-500 text-4xl font-bold mb-3">0K</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[200px] md:h-[400px] relative">
        <Image
          src="https://i.postimg.cc/SQ7nQrYW/Contact-desktop.png"
          alt=""
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default Features;
