import React from "react";

export default function FifthSection({ t }) {
  return (
    <section className="section section-padding-xl fl fl-ju-co-sp-ar has-bottom-divider-short">
      <div className="text-align-start">
        <h1 className="mt-0 mb-2 reveal-from-bottom" data-reveal-delay="200">
          {t("home_section_5_header")}
        </h1>
        <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
          {t("home_section_5_content")}
        </p>
        <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
          {t("home_section_5_content1")}
        </p>
      </div>
      <div
        className="img-container fl-ce m-24 reveal-from-bottom"
        data-reveal-delay="400"
      >
        <img
          src={require("../../../assets/images/Profesoret.png")}
          alt="profesoret"
        />
      </div>
    </section>
  );
}
