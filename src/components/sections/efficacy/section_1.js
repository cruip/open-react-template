import React from "react";
import Button from "../../elements/Button";

export default function FirstSection() {
  return (
    <section className="section-padding-l efficacy-background">
      <div className="container container-flex">
        <div className="third-section-content" style={{ textAlign: "end" }}>
          <h1 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
            نقوم دائما بالمراجعة والتطوير والتحسين والتركيز التربوي لضمان جودة
            الدورة
          </h1>
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
