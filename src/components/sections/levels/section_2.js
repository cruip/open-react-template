import React from "react";

export default function SecondSection({ t }) {
  return (
    <section className="section-padding-s" style={{ background: "#24272b" }}>
      <div className="container container-flex">
        <div className="first-section-content text-align-center">
          <h4
            className="mt-0 reveal-from-bottom "
            data-reveal-delay="200"
            style={{
              fontWeight: "lighter",
              marginBottom: "4px",
            }}
          >
            {t("levels_section_2_content1")}
          </h4>
          <h4
            className="mt-0 reveal-from-bottom "
            data-reveal-delay="400"
            style={{
              fontWeight: "lighter",
              width: "80%",
              marginBottom: "4px",
            }}
          >
            {t("levels_section_2_content2")}
          </h4>
          <h4
            className="m-0 mb-8  reveal-from-bottom "
            data-reveal-delay="400"
            style={{
              fontWeight: "lighter",
              width: "80%",
              marginBottom: "4px",
            }}
          >
            {t("levels_section_2_content3")}
          </h4>
        </div>
      </div>
    </section>
  );
}
