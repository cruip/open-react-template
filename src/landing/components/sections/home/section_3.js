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
const FeaturesTiles = ({ t }) => {
  return (
    <section className='section section-padding-l fl-ce has-bottom-divider-short text-align-start'>
      <div className='m-64'>
        <div className='text-align'>
          <h2 className='mt-0 mb-2 reveal-from-bottom' data-reveal-delay='200'>
            {t("home_section_3_header1")}
          </h2>
          <p className='mt-0 mb-2 reveal-from-bottom' data-reveal-delay='200'>
            {t("home_section_3_header2")}
          </p>
        </div>
      </div>
      <div
        className='img-container reveal-from-bottom fl-ce'
        data-reveal-delay='400'
      >
        <img src={require("../../../assets/images/Laptopi.png")} alt='laptop' />
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
