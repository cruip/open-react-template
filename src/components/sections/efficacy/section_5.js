import React from "react";

export default function FifthSection({ t }) {
  return (
    <section className="section-padding-l fc">
      <div className="container-xs text-align-start">
        <p className="m-0 mb-4 reveal-from-bottom" data-reveal-delay="400">
          {t("efficacy_section_5_header")}
        </p>
        <span
          className="mt-0 reveal-from-bottom"
          data-reveal-delay="200"
          style={{ fontSize: "30px" }}
        >
          {t("efficacy_section_5_content")}
        </span>
      </div>
    </section>
  );
}
