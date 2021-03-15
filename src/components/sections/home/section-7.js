import React from "react";

export default function SeventhSection({ t }) {
  return (
    <section
      className="section section-padding-s"
      style={{ background: "#25282c" }}
    >
      <div className="container text-align-center">
        <h1 className="mt-0 mb-2 reveal-from-bottom" data-reveal-delay="200">
          {t("home_section_7_header")}
        </h1>
        <p className="m-0 reveal-from-bottom" data-reveal-delay="400">
          {t("home_section_7_content1")}
        </p>
        <p className="m-0 reveal-from-bottom" data-reveal-delay="400">
          {t("home_section_7_content2")}
        </p>
        <p className="m-0 reveal-from-bottom" data-reveal-delay="400">
          {t("home_section_7_content3")}
        </p>
      </div>
    </section>
  );
}
