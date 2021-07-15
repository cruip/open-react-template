import React from "react";

export default function SixthSection({ t }) {
  return (
    <section
      className='section section-padding-xl reveal-from-bottom fl fl-al-it-ce'
      data-reveal-delay='400'
    >
      <div className='fl img-manage-lg img-manage m-32' dir='ltr'>
        <div>
          <img
            className='reveal-from-bottom'
            data-reveal-delay='200'
            src={require("../../../assets/images/dialog/1.png")}
            alt='dialog'
          />
        </div>
        <div>
          <img
            className='reveal-from-bottom'
            data-reveal-delay='1000'
            src={require("../../../assets/images/dialog/3.png")}
            alt='dialog'
          />
          <img
            className='reveal-from-bottom'
            data-reveal-delay='1500'
            src={require("../../../assets/images/dialog/4.png")}
            alt='dialog'
          />
          <img
            className='reveal-from-bottom'
            data-reveal-delay='2000'
            src={require("../../../assets/images/dialog/5.png")}
            alt='dialog'
          />
        </div>
        <div className='fl fl-co fl-ju-co-en'>
          <img
            className='reveal-from-bottom'
            data-reveal-delay='200'
            src={require("../../../assets/images/dialog/2.png")}
            alt='dialog'
          />
        </div>
      </div>
      <div className='text-align-start m-64'>
        <h1 className='mt-0 mb-2 reveal-from-bottom' data-reveal-delay='200'>
          {t("home_section_6_header")}
        </h1>
        <p className='m-0 mb-12 reveal-from-bottom' data-reveal-delay='400'>
          {t("home_section_6_content1")}
        </p>
        <p className='m-0 mb-12 reveal-from-bottom' data-reveal-delay='400'>
          {t("home_section_6_content2")}
        </p>
        <p className='m-0 mb-12 reveal-from-bottom' data-reveal-delay='400'>
          {t("home_section_6_content3")}
        </p>
      </div>
    </section>
  );
}
