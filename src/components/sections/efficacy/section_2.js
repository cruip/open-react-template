import React from "react";
import Button from "../../elements/Button";

export default function SecondSection() {
  return (
    <section className="section-padding-xs" style={{ background: "#25282c" }}>
      <div
        className="container-xl container-flex"
        style={{ justifyContent: "space-around" }}
      >
        <div className="first-section-content">
          <h3 className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
            شهادة اللسان العربية
          </h3>
        </div>
        <div className="first-section-content">
          <h3 className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
            مخابر لغوية بحوث مستمرة
          </h3>
        </div>
        <div className="first-section-content">
          <h3 className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
            جودة و فعالية
          </h3>
        </div>
      </div>
    </section>
  );
}
