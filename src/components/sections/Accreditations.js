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
    "tiles-wrap center-content mt-0",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Accreditations",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container-lg">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content reveal-from-bottom pb-24"
            tag="h3"
          />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h5 className="mt-0 mb-8">Salto</h5>
                </div>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/awards/salto.png")}
                      alt="Salto Accreditation"
                      width={130}
                      style={{
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h5 className="mt-0 mb-8">Auva</h5>
                </div>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/awards/auva.jpg")}
                      alt="Auva Accreditation"
                      width={200}
                      style={{
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h5 className="mt-0 mb-8">NSV</h5>
                </div>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/awards/nsv.jpg")}
                      alt="NSV Accreditation"
                      width={100}
                      style={{
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h5 className="mt-0 mb-8">Construction Line</h5>
                </div>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/awards/constructionLine.jpg")}
                      alt="Construction Line Accreditation"
                      width={200}
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
