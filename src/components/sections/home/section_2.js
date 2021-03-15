import React from "react";
import Image from "../../elements/Image";

export default function TopFeatures({ t }) {
  return (
    <section
      className="section section-padding-m fl-co-ce"
      style={{ background: "#25282c" }}
    >
      <div className="text-align-center mb-64">
        <h3 className="mt-0 mb-2 reveal-from-bottom" data-reveal-delay="200">
          {t("home_section_2_header_s")}
        </h3>
        <h1 className="mt-0 mb-2 reveal-from-bottom" data-reveal-delay="200">
          {t("home_section_2_header")}
        </h1>
        <h3
          className="mt-0 mb-32 reveal-from-bottom"
          data-reveal-delay="200"
          style={{ fontWeight: "lighter" }}
        >
          {t("home_section_2_header_xs")}
        </h3>
      </div>
      <div className="container-xl tiles-wrap text-align-center">
        <div
          className="tiles-icon m-0 reveal-from-bottom"
          data-reveal-delay="200"
        >
          <div className="features-tiles-item-header">
            <div className="features-tiles-item-image mb-16">
              <Image
                src={require("../../../assets/images/tiles_comunicating_icon.svg")}
                alt="Features tile icon 01"
                width={80}
                height={80}
              />
            </div>

            <div className="features-tiles-item-content">
              <p className="m-0 text-sm">{t("home_section_2_item_practise")}</p>
            </div>
          </div>
        </div>
        <div
          className="tiles-icon m-0 reveal-from-bottom"
          data-reveal-delay="200"
        >
          <div className="features-tiles-item-header">
            <div className="features-tiles-item-image mb-16">
              <Image
                src={require("../../../assets/images/tiles_certificate_icon.svg")}
                alt="Features tile icon 02"
                width={80}
                height={80}
              />
            </div>

            <div className="features-tiles-item-content">
              <p className="m-0 text-sm">{t("home_section_2_item_levels")}</p>
            </div>
          </div>
        </div>
        <div
          className="tiles-icon m-0 reveal-from-bottom"
          data-reveal-delay="200"
        >
          <div className="features-tiles-item-header">
            <div className="features-tiles-item-image mb-16">
              <Image
                src={require("../../../assets/images/tiles_edit_icon.svg")}
                alt="Features tile icon 01"
                width={80}
                height={80}
              />
            </div>

            <div className="features-tiles-item-content">
              <p className="m-0 text-sm">{t("home_section_2_item_classes")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
