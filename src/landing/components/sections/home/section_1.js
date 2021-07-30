import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../../utils/SectionProps";
import ButtonGroup from "../../elements/ButtonGroup";
import Button from "../../elements/Button";
import Image from "../../elements/Image";
import Modal from "../../elements/Modal";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  data,
  t,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "section section-padding-s fl-ce",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div
        className='text-container hero-content text-align-start reveal-from-bottom'
        data-reveal-delay='200'
        style={{ fontFamily: "Din Medium" }}
      >
        <h1 className='text-white mt-0 mb-32 '>{t("home_section_1_header")}</h1>
        <div className='container-xs'>
          <p className='m-0 mb-12'>{t("home_section_1_content")}</p>
          <p className='m-0 mb-12'>{t("home_section_1_content1")}</p>
          <p
            className='mb-32 reveal-from-bottom'
            data-reveal-delay='400'
            style={{ color: "#f9a61a" }}
          >
            {t("home_section_1_content2")}
          </p>
          <div>
            <Button tag='a' color='primary' wideMobile href='/register'>
              {t("home_section_1_button")}
            </Button>
          </div>
        </div>
      </div>
      <div
        className='img-container reveal-from-bottom illustration-element-01 m-32'
        data-reveal-value='20px'
        data-reveal-delay='400'
      >
        <Image
          src={require("../../../assets/images/student.png")}
          alt='Hero'
          width={896}
          height={504}
        />
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
