import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import "./svgStyling.css";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const AboutTheProgram = ({
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
    title: "About the Program",
    paragraph:
      "JustCode is a fast-paced 10-week cohort that helps you in your career seeking process. Our goal is to help you tackling job interviews and assist you into your dream company. The six core values of the cohort are listed below.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/svg/lecture.svg")}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                      className="filter-white"
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Live Algorithm Lectures</h4>
                  <p className="m-0 text-sm">
                    Lectures will be held twice a week, each is going to be two
                    hours long. In each lecture, we are going to cover the most
                    frequently appeared patterns in both online assessments,
                    phone and onsite interviews.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/svg/mock.svg")}
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                      className="filter-white"
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Live 1-1 Mock Interviews</h4>
                  <p className="m-0 text-sm">
                    Live mock interviews are held one-on-one to give
                    personalized feedback for each student. The number of
                    interviews a student can have is based on the plan they
                    chose.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/svg/office-hour.svg")}
                      alt="Features tile icon 03"
                      width={64}
                      height={64}
                      className="filter-white"
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Cohort Office Hour</h4>
                  <p className="m-0 text-sm">
                    Come and ask questions! Office hours are going to be held
                    once a week throughtout the cohort. You can expect Q&A
                    section, info session, and insights from our guides or other
                    guest speakers in the office hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/svg/resume.svg")}
                      alt="Features tile icon 04"
                      width={64}
                      height={64}
                      className="filter-white"
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Resume Review</h4>
                  <p className="m-0 text-sm">
                    Resume is the fundamental key to your success. In our
                    cohort, we review and refine the template and wording of
                    your resume to help you obtain a high quality yet nicely
                    structured resume.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/svg/strategy.svg")}
                      alt="Features tile icon 05"
                      width={64}
                      height={64}
                      className="filter-white"
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Strategy Review</h4>
                  <p className="m-0 text-sm">
                    Throughout the cohort, we also help with reviewing the
                    overall strategy of your job hunting process. What is the
                    general timeline of the hiring season? Should I always look
                    for a referral when applying? Get all your questions here at
                    JustCode.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/svg/community.svg")}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                      className="filter-white"
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Small Community</h4>
                  <p className="m-0 text-sm">
                    Since the cohort size is small, we are able to provide
                    personalized guidance on each student , and focus on
                    individual student's own success. A smaller community also
                    helps you to connect with other students closely and held
                    accountable for each other.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutTheProgram.propTypes = propTypes;
AboutTheProgram.defaultProps = defaultProps;

export default AboutTheProgram;
