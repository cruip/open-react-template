import React from "react";
import Button from "../../elements/Button";

export default function FirstSection() {
  return (
    <section className="section section-padding-m fl-ce reverse">
      <div
        className="has-top-divider reveal-from-bottom"
        data-reveal-delay="400"
      >
        <img
          src={require("../../../assets/images/baner_levels.png")}
          alt="banner"
        />
      </div>
      <div className="text-align-end ml-32 levels-container">
        <h1 className="mt-0 mb-28 reveal-from-bottom" data-reveal-delay="200">
          مستويات اللغة العربية في دورة اللسان العربي
        </h1>
        <div className="mb-32" style={{ textAlign: "end" }}>
          <p className="m-0 reveal-from-bottom" data-reveal-delay="400">
            تعرف على المزيد حول مستويات اللسان العربيالمختلفةللغة العربية
          </p>
        </div>
        <div className="fl fl-ju-co-en">
          <Button tag="a" color="primary" wideMobile href="#">
            أرغب في تعلم اللغة العربية
          </Button>
        </div>
      </div>
    </section>
  );
}
