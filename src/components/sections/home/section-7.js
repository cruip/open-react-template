import React from "react";

export default function SeventhSection() {
  return (
    <section
      className="section section-padding-s"
      style={{ background: "#25282c" }}
    >
      <div className="text-container text-align-center">
        <h1 className="mt-0 mb-2 reveal-from-bottom" data-reveal-delay="200">
          دروس مُصغّرة جديدة كل يوم
        </h1>
        <h3
          className="mt-0 mb-32 reveal-from-bottom"
          data-reveal-delay="200"
          style={{ fontWeight: "lighter", textAlign: "center" }}
        >
          ستجد كل يوم اقتراحات محتوى جديدة لتتعلم شيئًا جديدًا في دقائق قليلة:
          دروس مباشرة، مقاطع فيديو، بودكاست، مقابلات، مقالات، إلخ. سوف تكون
          مدمنا على اللغة العربية. وكلما تدربت أكثر كلما ازددت شغفا بها.
        </h3>
      </div>
    </section>
  );
}
