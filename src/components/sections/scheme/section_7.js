import React from "react";
import Image from "../../elements/Image";
import Button from "../../elements/Button";

export default function SeventhSections() {
  return (
    <>
      <section className="flex-column-center">
        <div className="container mt-32">
          <div className="tiles-wrap center-content">
            <div className="tiles-item reveal-from-right">
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
                  <p className="m-0 text-sm">
                    أكثر من 1000 تمرين لتقويم النطق والمفردات والقواعد والفهم
                    والكتابة.
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
                      src={require("../../../assets/images/tiles_video_icon.svg")}
                      alt="Features tile icon 02"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="m-0 text-sm">
                    144 حوار ممتع من واقع الحياة منتج من قبل اللسان العربي
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-left">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("../../../assets/images/tiles_board_icon.svg")}
                      alt="Features tile icon 01"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="m-0 text-sm">
                    144وحدة تعليمية، ستة مستويات متدرجة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-32">
          <div className="tiles-wrap center-content">
            <div className="tiles-item reveal-from-right">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("../../../assets/images/tiles_certificate_icon.svg")}
                      alt="Features tile icon 01"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="m-0 text-sm">
                    .شهادات اللسان العربي عندما اجتياز كل مستوى
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
                      src={require("../../../assets/images/tiles_test_icon.svg")}
                      alt="Features tile icon 02"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="m-0 text-sm">
                    اختبارات لتقييم تقدمك في نهاية كل وحدة.
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-left">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("../../../assets/images/tiles_teacher_icon.svg")}
                      alt="Features tile icon 01"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="m-0 text-sm">
                    توجيه ومرافقة معلم عربي متخصص منذ اليوم الأول
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section section-page1-1 container-flex ">
          <div className="container-xl container-flex">
            <div className="first-section-content">
              <h1
                className="mt-0 mb-32 reveal-from-bottom"
                data-reveal-delay="200"
              >
                سجل الآن وابدأ تعلم اللغة العربية الفصيحة
              </h1>
              <div
                className="container fc mt-24 reveal-from-bottom"
                data-reveal-delay="200"
              >
                <Button tag="a" color="primary" wideMobile href="#">
                  أرغب في تعلم اللغة العربية
                </Button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
