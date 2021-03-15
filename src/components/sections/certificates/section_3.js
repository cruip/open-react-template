import React from "react";
import Button from "../../elements/Button";

export default function ThirdSection({ t }) {
  return (
    <section className="section-padding-l fl-co-ce has-bottom-divider-short">
      <div className="container-xl text-align-center">
        <h1 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
          {t("certificates_section_3_header")}
        </h1>
      </div>
      <div className="mt-32 reveal-from-bottom" data-reveal-delay="400">
        <img src={require("../../../assets/images/Font.png")} />
      </div>
    </section>
  );
}
