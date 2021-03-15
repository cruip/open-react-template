import React from "react";
import classNames from "classnames";

export default function ThirdSection({ t }) {
  const tilesClasses = classNames(
    "tiles-wrap",
    "push-left",
    "text-align-start"
  );

  return (
    <>
      <section className="section-padding-m fl-ce">
        <div className={tilesClasses}>
          <div
            className="tiles-item reveal-from-bottom"
            data-reveal-delay="200"
          >
            <div className="tiles-item-inner">
              <div className="testimonial-item-header">
                {t("how-works_section_3_item1_header")}
              </div>
              <div className="testimonial-item-content">
                <p className="text-sm mb-0">
                  {t("how-works_section_3_item1_content")}
                </p>
              </div>
            </div>
          </div>
          <div
            className="tiles-item reveal-from-bottom"
            data-reveal-delay="200"
          >
            <div className="tiles-item-inner">
              <div className="testimonial-item-header">
                {t("how-works_section_3_item2_header")}
              </div>
              <div className="testimonial-item-content">
                <p className="text-sm mb-0">
                  {t("how-works_section_3_item2_content")}
                </p>
              </div>
            </div>
          </div>
          <div
            className="tiles-item reveal-from-bottom"
            data-reveal-delay="200"
          >
            <div className="tiles-item-inner">
              <div className="testimonial-item-header">
                {t("how-works_section_3_item3_header")}
              </div>
              <div className="testimonial-item-content">
                <p className="text-sm mb-0">
                  {t("how-works_section_3_item3_content")}
                </p>
              </div>
            </div>
          </div>
          <div
            className="tiles-item reveal-from-bottom"
            data-reveal-delay="200"
          >
            <div className="tiles-item-inner">
              <div className="testimonial-item-header">
                {t("how-works_section_3_item4_header")}
              </div>
              <div className="testimonial-item-content">
                <p className="text-sm mb-0">
                  {t("how-works_section_3_item4_content")}
                </p>
              </div>
            </div>
          </div>
          <div
            className="tiles-item reveal-from-bottom"
            data-reveal-delay="200"
          >
            <div className="tiles-item-inner">
              <div className="testimonial-item-header">
                {t("how-works_section_3_item5_header")}
              </div>
              <div className="testimonial-item-content">
                <p className="text-sm mb-0">
                  {t("how-works_section_3_item5_content")}
                </p>
              </div>
            </div>
          </div>

          <div
            className="tiles-item reveal-from-bottom"
            data-reveal-delay="200"
          >
            <div className="tiles-item-inner">
              <div className="testimonial-item-header">
                {t("how-works_section_3_item6_header")}
              </div>
              <div className="testimonial-item-content">
                <p className="text-sm mb-0">
                  {t("how-works_section_3_item6_content")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
