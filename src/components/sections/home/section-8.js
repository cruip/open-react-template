import React from "react";

export default function Home8() {
  return (
    <section className="section section-padding-l fl-ce ">
      <div>
        <div
          className="text-container text-align-start"
          // style={{ alignItems: "flex-start" }}
        >
          <h1 className="mt-0 mb-2 reveal-from-bottom" data-reveal-delay="200">
            حقق هدفك
          </h1>
          <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
            في كل مرة تكمل فيها درسًا صغيرًا، ستكسب نقاطًا وستشاهد سجلاً لتقدمك.
          </p>
        </div>
      </div>
      <div
        className="fc reveal-from-bottom"
        data-reveal-delay="400"
        style={{ width: "70%", height: "100%", margin: 0 }}
      >
        <img src={require("../../../assets/images/Tablet.png")} alt="tableti" />
      </div>
    </section>
  );
}
