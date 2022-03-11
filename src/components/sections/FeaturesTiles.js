import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import { OfferingContainer } from "./styledComponents";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "What We Offer",
    paragraph:
      "At Ambar Systems we offer a wide range of services to our clients.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Fire Systems</h4>
                </div>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/weOffer/fire.jpg")}
                      alt="Fire Systems"
                      width={90}
                      height={90}
                      style={{
                        borderRadius: "45px",
                        borderWidth: "5px",
                        borderStyle: "solid",
                        borderColor: "white",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Security</h4>
                </div>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/weOffer/security.jpg")}
                      alt="Security"
                      width={90}
                      height={90}
                      style={{
                        borderRadius: "45px",
                        borderWidth: "5px",
                        borderStyle: "solid",
                        borderColor: "white",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Access Control</h4>
                </div>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/weOffer/access.jpg")}
                      alt="Access Control"
                      width={90}
                      height={90}
                      style={{
                        borderRadius: "45px",
                        borderWidth: "5px",
                        borderStyle: "solid",
                        borderColor: "white",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Intruder</h4>
                </div>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/weOffer/blank.jpg")}
                      alt="Intruder"
                      width={90}
                      height={90}
                      style={{
                        borderRadius: "45px",
                        borderWidth: "5px",
                        borderStyle: "solid",
                        borderColor: "white",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">CCTV</h4>
                </div>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/weOffer/cctv.jpg")}
                      alt="CCTV"
                      width={90}
                      height={90}
                      style={{
                        borderRadius: "45px",
                        borderWidth: "5px",
                        borderStyle: "solid",
                        borderColor: "white",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">PA Systems</h4>
                </div>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/weOffer/pa_systems.jpg")}
                      alt="PA Systems"
                      width={90}
                      height={90}
                      style={{
                        borderRadius: "45px",
                        borderWidth: "5px",
                        borderStyle: "solid",
                        borderColor: "white",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
