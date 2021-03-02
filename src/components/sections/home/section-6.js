import React from "react";

export default function SixthSection() {
  return (
    <section
      className="section section-padding-xl reveal-from-bottom fl"
      data-reveal-delay="400"
    >
      <div className="img-container fc">
        <img src={require("../../../assets/images/Dialogu.png")} alt="dialog" />
      </div>
      <div
        className="container-xs fl-co-ce text-align-start"
        // style={{ alignItems: "flex-start" }}
      >
        <h1 className="mt-0 mb-2 reveal-from-bottom" data-reveal-delay="200">
          تحدث ، شارك ، تعلم
        </h1>
        <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
          تحدث مع الطلاب من جميع أنحاء العالم، كل يوم وعلى جميع المستويات. مارس
          لغتك العربية وقم بتطويرها مع الموضوعات التي تستمتع بها، حوارات، أخبار،
          أفلام، أعمال، رياضة، فن وثقافة ...
        </p>
      </div>
    </section>
  );
}
