import React from "react";

export default function ForthSection() {
  return (
    <>
      <section className="section-padding-l fl-co-ce has-top-divider-short">
        <div className="container-xl text-align-center">
          <h1 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
            كيف تحدد مستواك في اللغة العربية؟
          </h1>
          <p className="mb-32 reveal-from-bottom" data-reveal-delay="400">
            إذا أردت أن تحدد مستواك في اللغة العربية أو أن تصادق عليه، فنحن
            نمكنك من إجراء تقييم أولي في شكل اختبار خاص بك يستغرق بضع دقائق فقط
            وهو يتكون من عدة أسئلة متعددة الخيارات، وبناءً على إجاباتك، قد تتلقى
            أسئلة أكثر أو أقل تعقيدًا، وستحصل على نتائجه على الفور، لتعرف من أين
            تبدأ، واصل تنمية مهاراتك اللغوية من خلالالمستوى الذييناسبكوستتلقى
            إرشادات كافية من معلم متخصص منذ اليوم الأول الذي تباشر فيه الدورة،
            الأمر الذي سيحفزك على مواصلة تعلم اللغة العربيةبكفاءةٍ تحقق أهدافك.
          </p>
        </div>
        <div className="mt-32 reveal-from-bottom" data-reveal-delay="400">
          <img src={require("../../../assets/images/Laptop_test_levels.png")} />
        </div>
      </section>
    </>
  );
}
