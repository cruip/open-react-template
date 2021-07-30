import React from "react";
import classNames from "classnames";

export default function ThirdSection({ t }) {
  const tilesClasses = classNames(
    "tiles-wrap",
    "push-left",
    "text-align-start"
  );

  return (
    <section className='section-padding-l fl-co-ce has-bottom-divider-short'>
      <div className='container-xl mb-32 text-align-center'>
        <h1 className='mt-0 mb-32 reveal-from-bottom' data-reveal-delay='200'>
          {t("certificates_section_3_header")}
        </h1>
      </div>
      <div className='mt-32 reveal-from-bottom' data-reveal-delay='400'>
        <div className={tilesClasses}>
          <div
            className='tiles-item reveal-from-bottom'
            data-reveal-delay='200'
          >
            <img src={require("../../../assets/images/1.png")} alt='' />
          </div>
          <div
            className='tiles-item reveal-from-bottom'
            data-reveal-delay='200'
          >
            <img src={require("../../../assets/images/5.png")} alt='' />
          </div>
          <div
            className='tiles-item reveal-from-bottom'
            data-reveal-delay='200'
          >
            <img src={require("../../../assets/images/3.png")} alt='' />
          </div>
          <div
            className='tiles-item reveal-from-bottom'
            data-reveal-delay='200'
          >
            <img src={require("../../../assets/images/2.png")} alt='' />
          </div>
          <div
            className='tiles-item reveal-from-bottom'
            data-reveal-delay='200'
          >
            <img src={require("../../../assets/images/6.png")} alt='' />
          </div>

          <div
            className='tiles-item reveal-from-bottom'
            data-reveal-delay='200'
          >
            <img src={require("../../../assets/images/4.png")} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}
