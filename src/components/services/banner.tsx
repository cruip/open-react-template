const Banner = () => {
  return (
    <section className="flex flex-col gap-6 bg-[url(/static/images/services-banner.png)] bg-cover h-screen px-40 pt-52 ">
      <p className="tracking-[1.2rem] text-xl font-extrabold text-white">BUILD YOUR OWN</p>
      <h1 className="text-5xl font-semibold w-2/5 text-white">We're The Ones That Your Whole Business Will Love</h1>
      <h2 className="w-2/5 text-white"> 
        At Chanceux, we deliver an amazing product that you won't get elsewhere.
        Forward-driven and passionate about every project.
      </h2>
      <button className="w-fit p-3 rounded-xl bg-teal-600 text-white">Try now</button>
    </section>
  );
};

export default Banner
