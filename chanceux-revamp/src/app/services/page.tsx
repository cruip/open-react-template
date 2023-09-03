import Item from "./item";
import Image from "next/image";

const services = () => {
  return (
    <section className="py-2 md:py-20 px-6 md:px-60">
      <div className="flex flex-col justify-center w-full items-center h-screen text-center gap-6 ">
        <h2 className="text-3xl md:text-5xl font-bold leading-normal w-full md:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisi
        </h2>
        <p className="text-sm md:text-md leading-relaxed font-light w-full md:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          consequuntur amet consectetur elit em ipsum dolor sit ame
        </p>
        <button className="text-md md:text-lg text-white py-2 md:py-3 px-10 md:px-16 rounded bg-blue-500 capitalize w-fit">
          try now
        </button>
      </div>
      <div>
        <div className="text-center flex flex-col items-center gap-6">
          <h3 className="text-3xl md:text-4xl font-semibold">
            Lorem ipsum dolor sit amet consectetur
          </h3>
          <p className="text-sm md:text-md leading-relaxed w-full md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            veniam incidunt maxime eos vitae ullam minus ducimus, sapiente
            placeat modi
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <Item
            title="Lorem ipsum dolor"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            veniam incidunt"
          />
          <Item
            title="Lorem ipsum dolor"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            veniam incidunt"
          />
          <Item
            title="Lorem ipsum dolor"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            veniam incidunt"
          />
          <Item
            title="Lorem ipsum dolor"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            veniam incidunt"
          />
          <Item
            title="Lorem ipsum dolor"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            veniam incidunt"
          />
          <Item
            title="Lorem ipsum dolor"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            veniam incidunt"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-3">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p className="text-sm md:text-md leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              veniam incidunt maxime eos vitae ullam minus ducimus, sapiente
              placeat modi
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 hover:bg-blue-500 w-fit pl-4 pr-16 rounded py-3">
            <div className="flex gap-5">
              icon
              <div>
                <h5 className="text-lg font-medium">lorem ipsum</h5>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="flex gap-5">
              icon
              <div>
                <h5 className="text-lg font-medium">lorem ipsum</h5>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="flex gap-5">
              icon
              <div>
                <h5 className="text-lg font-medium">lorem ipsum</h5>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[200px] md:h-[400px] w-full">
          <Image
            src="https://i.postimg.cc/SQ7nQrYW/Contact-desktop.png"
            alt=""
            fill={true}
          />
        </div>
      </div>
    </section>
  );
};

export default services;