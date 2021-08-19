import React from "react";
import classNames from "classnames";

export default function FifthSection({ t }) {
  const tilesClasses = classNames(
    "tiles-wrap",
    "push-left",
    "text-align-start"
  );

  return (
    <section className='section-padding-l fc'>
      <div className='container-xs text-align-start'>
        <p className='m-0 mb-4 reveal-from-bottom' data-reveal-delay='400'>
          {t("efficacy_section_5_header")}
        </p>
        <span
          className='mt-0 reveal-from-bottom'
          data-reveal-delay='200'
          style={{ fontSize: "30px" }}
        >
          {t("efficacy_section_5_content")}
        </span>
      </div>
      <div className={tilesClasses} style={{ margin: "7em auto" }}>
        <div className='tiles-item reveal-from-bottom' data-reveal-delay='200'>
          <div className='tiles-item-inner'>
            <div className='testimonial-item-header fl-ce'>
              <img
                src={require("../../../assets/images/Profesoret1.png").default}
                alt=''
              />
            </div>
            <div className='testimonial-item-content'>
              <p className='text-sm text-align-center mb-0'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className='tiles-item reveal-from-bottom' data-reveal-delay='200'>
          <div className='tiles-item-inner'>
            <div className='testimonial-item-header fl-ce'>
              <img
                src={require("../../../assets/images/Profesoret1.png").default}
                alt=''
              />
            </div>
            <div className='testimonial-item-content'>
              <p className='text-sm text-align-center mb-0'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className='tiles-item reveal-from-bottom' data-reveal-delay='200'>
          <div className='tiles-item-inner'>
            <div className='testimonial-item-header fl-ce'>
              <img
                src={require("../../../assets/images/Profesoret1.png").default}
                alt=''
              />
            </div>
            <div className='testimonial-item-content'>
              <p className='text-sm text-align-center mb-0'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className='tiles-item reveal-from-bottom' data-reveal-delay='200'>
          <div className='tiles-item-inner'>
            <div className='testimonial-item-header fl-ce'>
              <img
                src={require("../../../assets/images/Profesoret1.png").default}
                alt=''
              />
            </div>
            <div className='testimonial-item-content'>
              <p className='text-sm text-align-center mb-0'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className='tiles-item reveal-from-bottom' data-reveal-delay='200'>
          <div className='tiles-item-inner'>
            <div className='testimonial-item-header fl-ce'>
              <img
                src={require("../../../assets/images/Profesoret1.png").default}
                alt=''
              />
            </div>
            <div className='testimonial-item-content'>
              <p className='text-sm text-align-center mb-0'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        <div className='tiles-item reveal-from-bottom' data-reveal-delay='200'>
          <div className='tiles-item-inner'>
            <div className='testimonial-item-header fl-ce'>
              <img
                src={require("../../../assets/images/Profesoret1.png").default}
                alt=''
              />
            </div>
            <div className='testimonial-item-content'>
              <p className='text-sm text-align-center mb-0'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
