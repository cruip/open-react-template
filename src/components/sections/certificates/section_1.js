import React from "react";
import Button from "../../elements/Button";

export default function FirstSection() {
  return (
    <section className="section section-page1-3 container-flex">
      <div style={{ width: "30%", height: "20em" }}></div>
      <div className="container container-flex">
        <div className="third-section-content" style={{ textAlign: "end" }}>
          <h1 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
            شهائد دورة اللغة العربية
          </h1>
          <p className="mb-32 reveal-from-bottom" data-reveal-delay="200">
            شارك شهادتك العلمية واجعل ملفك الشخصي المهني أكثر وضوحًا.
          </p>
          <div className="container ce">
            <Button tag="a" color="primary" wideMobile href="#">
              أرغب في تعلم اللغة العربية
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
