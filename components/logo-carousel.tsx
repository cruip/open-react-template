import ReviewComponent from "./review-component";

export default function LogoCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-black py-6 md:py-6">
      <div className="max-w-screen-xl mx-auto px-standard">
        {/* <div className="text-white font-bold mx-auto md:flex md:items-center line-clamp-2">
          <p>What our customers say</p>
        </div> */}
        <div className="flex md:flex-row justify-center md:justify-start -mx-4">
          <ReviewComponent quote="I wasn't even really aware of my real estate investment details, this service really helped remove that anxiety." />
          <ReviewComponent quote="Spreadsheets killed my time and were tough to manage, these guys helped get my entire portfolio organized and tracked." />
          <ReviewComponent quote="Nobody ever explained how I need to be tracking my multi-million dollar properties. But with Property-Easy I'm on top of this." />
        </div>
      </div>
    </section>
  );
}
