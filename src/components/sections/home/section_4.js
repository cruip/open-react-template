import React from "react";

const GenericSection = () => {
  return (
    <section
      className="section section-padding-s fl-ce reveal-from-bottom has-bottom-divider-short"
      data-reveal-delay="400"
    >
      <div style={{ width: "50%", height: "100%" }}>
        <img
          src={require("../../../assets/images/Smartphoni.png")}
          alt="phone"
        />
      </div>

      <div className="text-container text-align-start">
        <h1 className="mt-0 mb-2 reveal-from-bottom" data-reveal-delay="200">
          بعد ذلك ، يمكنك التدرب بالقدر الذي يكفيك.
        </h1>
        <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
          لديك الآلاف من التدريبات لممارسة القواعد والمفردات والكتابة والمحادثة
          والتحقق من تقدمك بشكل يومي.
        </p>
      </div>
    </section>
  );
};

export default GenericSection;
