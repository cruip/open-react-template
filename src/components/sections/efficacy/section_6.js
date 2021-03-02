import React from "react";
import Button from "../../elements/Button";

export default function SixthSection() {
  return (
    <section className="section-padding-s" style={{ background: "#25282c" }}>
      <div className="container-xl container-flex">
        <div className="first-section-content">
          <div className="container" style={{ textAlign: "center" }}>
            <h1
              className="mt-0 mb-32 reveal-from-bottom"
              data-reveal-delay="200"
            >
              قم بفتح حسابك الخاص وابدأ التعلم
            </h1>
          </div>
          <div className="container fc">
            <Button tag="a" color="primary" wideMobile href="#">
              أرغب في تعلم اللغة العربية
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
