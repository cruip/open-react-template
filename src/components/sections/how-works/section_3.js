import React from "react";
import classNames from "classnames";

export default function ThirdSection() {
  const innerClasses = classNames("testimonial-inner section-inner");

  const tilesClasses = classNames("tiles-wrap", "push-left");

  return (
    <>
      <section className="section-padding-m fl-ce">
        <div className={tilesClasses}>
          <div className="tiles-item reveal-from-right" data-reveal-delay="200">
            <div className="tiles-item-inner">
              <div
                className="testimonial-item-header"
                style={{ textAlign: "end" }}
              >
                كلما امتلكت عاطفة أقوى كلما تعلمت أكثر
              </div>
              <div className="testimonial-item-content">
                <p className="text-sm mb-0" style={{ textAlign: "end" }}>
                  نتقدم في التعلم أكثر كلما كنا مهتمين ومتحفزين عاطفيًا
                  ومندفعين. لذلك بدأنا الوحدات التعليمية بحوار قصير من واقع
                  الحياة بلغة عربية فصيحة جذابة. ستهتز مشاعرك تفاعلا وتعلقا
                  بالدروس، وستتعامل مع اللغة من منطلق واقعي معايش.
                </p>
              </div>
            </div>
          </div>
          <div className="tiles-item reveal-from-bottom">
            <div className="tiles-item-inner">
              <div className="testimonial-item-header">
                تشتد رغبتك في التعلم كلما شعرت بالتقدم
              </div>
              <div className="testimonial-item-content">
                <p className="text-sm mb-0">
                  تم تصميم الدورة بحيث تتحصل على نتائج أكبر مع كل جلسة دراسية
                  ومع كل وحدة تنهيها، ومع كل تمرين تقوم به ستتعلم شيئًا جديدًا
                  يمكنك التدرب عليه فورا.
                </p>
              </div>
            </div>
          </div>
          <div className="tiles-item reveal-from-left" data-reveal-delay="200">
            <div className="tiles-item-inner">
              <div className="testimonial-item-header">
                ستتعلم أيضا من خلال الممارسة
              </div>
              <div className="testimonial-item-content">
                <p className="text-sm mb-0">
                  هناك أكثر من 1000 تمرين في الكتابة والقواعد والنطق والمفردات
                  للممارسة والفعل والتطبيق.
                </p>
              </div>
            </div>
          </div>
          <div className="tiles-item reveal-from-right" data-reveal-delay="200">
            <div className="tiles-item-inner">
              <div className="testimonial-item-header">
                كل يوم تتعلم بإشراف وتوجيه من أحد المتخصصين
              </div>
              <div className="testimonial-item-content">
                <p className="text-sm mb-0">
                  يمكنك أيضا أن تختار معلما خاصا بك من اليوم الأول ليقوم بتوجيهك
                  من خلال عملية التعلم لتذليل أي صعوبة قد تعترضك، كما يمكنك
                  أيضًا حجز دروس محادثة خاصة بك.
                </p>
              </div>
            </div>
          </div>
          <div className="tiles-item reveal-from-bottom">
            <div className="tiles-item-inner">
              <div className="testimonial-item-header">
                ستزداد لديك قوةالتعلم عندما تعرف لماذا أنت تفعل كل ذلك
              </div>
              <div className="testimonial-item-content">
                <p className="text-sm mb-0">
                  لتقوية القدرة على الكتابة والتمكن من القواعد والنطق تم إعداد
                  144 درسًا عبر الحوارات والمواقف الحياتية المختلفة في قواعد
                  اللغة العربية . استمتع بهذه المواد الشيقة للممارسة والفعل
                  والتطبيق
                </p>
              </div>
            </div>
          </div>

          <div className="tiles-item reveal-from-left" data-reveal-delay="200">
            <div className="tiles-item-inner">
              <div className="testimonial-item-header">
                تعلم واعرض شهائدك بكل فخر واعتزاز
              </div>
              <div className="testimonial-item-content">
                <p className="text-sm mb-0">
                  ستحصل على شهادة اللسان العربي الرسمية لكل مستوى من الدورة التي
                  تكملها. يمكنك مشاركة شهاداتك على LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
