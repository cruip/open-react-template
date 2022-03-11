import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const Accreditations = ({
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
    "tiles-wrap center-content mt-16 mb-16",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Accreditations",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container-md">
        <div className={innerClasses}>
          <div className={tilesClasses}>
            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/awards/salto.png")}
                      alt="Salto Accreditation"
                      width={65}
                      style={{
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/awards/auva.jpg")}
                      alt="Auva Accreditation"
                      width={100}
                      style={{
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/awards/nsv.jpg")}
                      alt="NSV Accreditation"
                      width={50}
                      style={{
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/awards/constructionLine.jpg")}
                      alt="Construction Line Accreditation"
                      width={100}
                      style={{
                        borderRadius: "2px",
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

Accreditations.propTypes = propTypes;
Accreditations.defaultProps = defaultProps;

export default Accreditations;
