import React from "react";
import classNames from "classnames";

export default function ForthSection() {
  const innerClasses = classNames("testimonial-inner section-inner");

  const tilesClasses = classNames("tiles-wrap", "push-left");

  return (
    <section
      className="section container-flex"
      style={{ background: "#25282c", height: "15em" }}
    >
      <div className="container-xl container-flex">
        <div className="first-section-content">
          <div className="container" style={{ textAlign: "center" }}>
            <h3 className="mt-12 reveal-from-bottom" data-reveal-delay="200">
              المزيد من المواردلتتمتع بالمجان
            </h3>
            <p
              className="mt-12 mb-12 reveal-from-bottom"
              data-reveal-delay="400"
            >
              نقوم دائما بإنشاء مواد جديدة كما نعمل باستمرار على تحديث أعمالنا
              لنجعلاللغة العربيةسهلة التعلم والممارسة. تابعنا على صفحات وسائل
              التواصل الاجتماعي الخاصة بنا وعلى منصتنا.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
