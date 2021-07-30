import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FifthSection({ t }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2.3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className='section section-padding-l fl-co-ce has-bottom-divider-short'>
      <div className='text-align-center mb-32'>
        <h1 className='mt-0 mb-2 reveal-from-bottom' data-reveal-delay='200'>
          {t("home_section_5_header")}
        </h1>
        <p className='m-0 mb-12 reveal-from-bottom' data-reveal-delay='400'>
          {t("home_section_5_content")}
        </p>
        <p className='m-0 mb-12 reveal-from-bottom' data-reveal-delay='400'>
          {t("home_section_5_content1")}
        </p>
      </div>
      <div
        className='m-24 mt-32 reveal-from-bottom slick-container'
        data-reveal-delay='400'
      >
        <Slider {...settings}>
          <div>
            <div className='slider-item'>
              <img
                src={require("../../../assets/images/Profesoret1.png")}
                style={{ margin: "auto", height: "100%" }}
              />
            </div>
          </div>
          <div>
            <div className='slider-item'>
              <img
                src={require("../../../assets/images/Profesoret1.png")}
                style={{ margin: "auto", height: "100%" }}
              />
            </div>
          </div>
          <div>
            <div className='slider-item'>
              <img
                src={require("../../../assets/images/Profesoret1.png")}
                style={{ margin: "auto", height: "100%" }}
              />
            </div>
          </div>
          <div>
            <div className='slider-item'>
              <img
                src={require("../../../assets/images/Profesoret1.png")}
                style={{ margin: "auto", height: "100%" }}
              />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
