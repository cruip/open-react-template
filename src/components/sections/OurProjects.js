import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { useMediaQuery } from "../../hooks/MediaHook";
import { Gallery } from "../elements/Gallery";
import { ProjectsOptions } from "../elements/Gallery/imageSets";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const OurProjects = ({
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
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const sectionHeader = {
    title: "Our Projects",
    //paragraph about case studies not lorem ipsum
    paragraph:
      "Over the years, we have worked with some of the most innovative companies in the world. They have seen the impact of our work and are very satisfied with the results.",
  };

  const isMobile = useMediaQuery();

  return (
    <section {...props} className={outerClasses} id="case-studies-scroll">
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <Gallery imageSet={ProjectsOptions} uniform={false} />
        </div>
      </div>
    </section>
  );
};

OurProjects.propTypes = propTypes;
OurProjects.defaultProps = defaultProps;

export default OurProjects;
