import React from "react";
import Image from "../../elements/Image";

export default function TopFeatures() {
  return (
    <section
      className="section section-padding-m flex-column-center"
      style={{ background: "#25282c" }}
    >
      <div className="text-container text-align-center">
        <h3 className="mt-0 mb-2 reveal-from-bottom" data-reveal-delay="200">
          قمنا بتصميم هذه الطريقة خصيصا لك
        </h3>
        <h1 className="mt-0 mb-2 reveal-from-bottom" data-reveal-delay="200">
          تعلم تكلم مارس اللغة في حياتك اليومية
        </h1>
        <h3
          className="mt-0 mb-32 reveal-from-bottom"
          data-reveal-delay="200"
          style={{ fontWeight: "lighter" }}
        >
          بتوجيه أكاديمي متميز وبإطار تدريسي متخصص وفرصة للتواصل مع الطلاب من
          جميع أنحاء العالم.
        </h3>
      </div>
      <div className="container mt-32">
        <div className="tiles-wrap center-content">
          <div className="tiles-item reveal-from-right">
            <div className="tiles-item-inner">
              <div className="features-tiles-item-header">
                <div className="features-tiles-item-image mb-16">
                  <Image
                    src={require("../../../assets/images/tiles_comunicating_icon.svg")}
                    alt="Features tile icon 01"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <div className="features-tiles-item-content">
                <p className="m-0 text-sm">
                  تحدث مباشرة معالمجموعات في الفصول الفصول
                </p>
              </div>
            </div>
          </div>
          <div
            className="tiles-item reveal-from-bottom"
            data-reveal-delay="200"
          >
            <div className="tiles-item-inner">
              <div className="features-tiles-item-header">
                <div className="features-tiles-item-image mb-16">
                  <Image
                    src={require("../../../assets/images/tiles_certificate_icon.svg")}
                    alt="Features tile icon 02"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <div className="features-tiles-item-content">
                <p className="m-0 text-sm">
                  تعلم في إطار مبتكر لدورة في العربية الفصحى ضمن ستة مستويات
                </p>
              </div>
            </div>
          </div>
          <div className="tiles-item reveal-from-left">
            <div className="tiles-item-inner">
              <div className="features-tiles-item-header">
                <div className="features-tiles-item-image mb-16">
                  <Image
                    src={require("../../../assets/images/tiles_edit_icon.svg")}
                    alt="Features tile icon 01"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <div className="features-tiles-item-content">
                <p className="m-0 text-sm">تدرب على محتويات جديدة كل يوم</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
