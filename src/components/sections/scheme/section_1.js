import React from "react";
import Button from "../../elements/Button";

export default function FirstSection() {
  return (
    <section
      className="section home-section-4 container-flex"
      style={{ height: "35em" }}
    >
      <div className="container" style={{ textAlign: "end" }}>
        <h1 className="mt-0 mb-2 reveal-from-bottom" data-reveal-delay="200">
          ابدأ تعلم اللغة العربيةعن بعد عبر دورات اللسان العربي
        </h1>
        <p className="m-0 reveal-from-bottom" data-reveal-delay="400">
          .سنقدم لك النصح حتى تتمكن من تحقيق هدفك من تعلم اللغة العربيةالفصحى
        </p>
        <div className="container ce mt-24">
          <Button tag="a" color="primary" wideMobile href="#">
            أرغب في تعلم اللغة العربية
          </Button>
        </div>
      </div>
      <div
        className="container-xs"
        style={{ width: "60%", height: "100%", margin: 0 }}
      ></div>
    </section>
  );
}
