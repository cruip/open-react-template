import React from "react";
import Image from "../../elements/Image";

export default function SixthSections({ t }) {
  return (
    <section className='section-padding-s fl-co-ce'>
      <div className='container-xs text-align-center mb-32'>
        <h1 className='mt-0 mb-32 reveal-from-bottom' data-reveal-delay='200'>
          {t("schema_section_6_header")}
        </h1>
        <p
          className='m-0 reveal-from-bottom'
          data-reveal-delay='400'
          style={{ textAlign: "center" }}
        >
          {t("schema_section_6_content")}
        </p>
      </div>
      <div className='tiles-wrap text-align-center mt-32'>
        <div className='tiles-icon reveal-from-bottom' data-reveal-delay='200'>
          <div className='features-tiles-item-header'>
            <div className='features-tiles-item-image mb-16'>
              <Image
                src={
                  require("../../../assets/images/tiles_edit_icon.svg").default
                }
                alt='Features tile icon 01'
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className='features-tiles-item-content'>
            <p className='m-0 text-sm'>{t("schema_section_6_item1_content")}</p>
          </div>
        </div>
        <div className='tiles-icon reveal-from-bottom' data-reveal-delay='200'>
          <div className='features-tiles-item-header'>
            <div className='features-tiles-item-image mb-16'>
              <Image
                src={
                  require("../../../assets/images/tiles_video_icon.svg").default
                }
                alt='Features tile icon 02'
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className='features-tiles-item-content'>
            <p className='m-0 text-sm'>{t("schema_section_6_item2_content")}</p>
          </div>
        </div>
        <div className='tiles-icon reveal-from-bottom' data-reveal-delay='200'>
          <div className='features-tiles-item-header'>
            <div className='features-tiles-item-image mb-16'>
              <Image
                src={
                  require("../../../assets/images/tiles_board_icon.svg").default
                }
                alt='Features tile icon 01'
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className='features-tiles-item-content'>
            <p className='m-0 text-sm'>{t("schema_section_6_item3_content")}</p>
          </div>
        </div>
        <div className='tiles-icon reveal-from-bottom' data-reveal-delay='200'>
          <div className='features-tiles-item-header'>
            <div className='features-tiles-item-image mb-16'>
              <Image
                src={
                  require("../../../assets/images/tiles_certificate_icon.svg")
                    .default
                }
                alt='Features tile icon 01'
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className='features-tiles-item-content'>
            <p className='m-0 text-sm'>{t("schema_section_6_item4_content")}</p>
          </div>
        </div>
        <div className='tiles-icon reveal-from-bottom' data-reveal-delay='200'>
          <div className='features-tiles-item-header'>
            <div className='features-tiles-item-image mb-16'>
              <Image
                src={
                  require("../../../assets/images/tiles_test_icon.svg").default
                }
                alt='Features tile icon 02'
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className='features-tiles-item-content'>
            <p className='m-0 text-sm'>{t("schema_section_6_item5_content")}</p>
          </div>
        </div>
        <div className='tiles-icon reveal-from-bottom' data-reveal-delay='200'>
          <div className='features-tiles-item-header'>
            <div className='features-tiles-item-image mb-16'>
              <Image
                src={
                  require("../../../assets/images/tiles_teacher_icon.svg")
                    .default
                }
                alt='Features tile icon 01'
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className='features-tiles-item-content'>
            <p className='m-0 text-sm'>{t("schema_section_6_item6_content")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
