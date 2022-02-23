import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Lottie from "react-lottie";
import Image from "../elements/Image";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const defaultOptions = {
  loop: false,
  autoplay: false,
  animationData: require("../../assets/images/lottie/lock.json"),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
  speed: 2,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const outerClasses = classNames(
    "hero section center-content",
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
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <Image
              src={require("../../assets/images/Ambar_Logo_Full.png")}
              alt="Full Logo"
              width={400}
              height={140}
              style={{ borderRadius: "5px" }}
              className="mb-32"
            />
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="300"
              >
                Ambar Systems Ltd are accredited specialists in the field of
                Fire Protection and Safety. We are a team of highly qualified
                professionals with a strong track record of delivering high
                quality products and services.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="350">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="/">
                    Get started
                  </Button>
                  <Button tag="a" color="dark" wideMobile href="/">
                    Another Option
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;

/*
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require("./../../assets/images/video-placeholder.jpg")}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>

          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          />*/
