import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../../utils/SectionProps";
import Image from "../../elements/Image";
import Button from "../../elements/Button";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = () => {
  return (
    <section className="section section-padding-l fl-ce has-bottom-divider-short text-align-start">
      <div className="text-container" style={{ width: "50%" }}>
        <div className="first-section-content text-align">
          <h2 className="mt-0 mb-2 reveal-from-bottom" data-reveal-delay="200">
            يبدأ كل شيء بالضغط على "إبدأ التعلم" في دورة اللغة العربية ستبدأ
            بحوارات تعليمية قصيرة ، ستستمع بجزالة اللغة العربيةلتتعلم تعبيرات
            المواقف اليومية
          </h2>
        </div>
      </div>
      <div
        className="img-container reveal-from-bottom fc"
        data-reveal-delay="400"
      >
        <img src={require("../../../assets/images/Laptopi.png")} alt="laptop" />
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
