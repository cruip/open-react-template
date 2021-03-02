import React from "react";
import Button from "../../elements/Button";

export default function SecondSection() {
  return (
    <section
      className="section container-flex"
      style={{ background: "#25282c", height: "10em" }}
    >
      <div className="container-xl container-flex">
        <div className="first-section-content">
          <div className="container" style={{ textAlign: "center" }}>
            <p
              className="mt-12 mb-12 reveal-from-bottom"
              data-reveal-delay="400"
            >
              الخطوة الأولى هي الأصعب أحيانًا، اللسان العربييشجعك على أن تبدأ
              !الآن. اشترك أولا وشاهد طُرُق التّعلم لدينا، جرب بدون أي التزام
            </p>
            <h3 className="mt-12 reveal-from-bottom" data-reveal-delay="200">
              .اتخذ الخطوة الأولى وافتح حسابا خاصا بك
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
