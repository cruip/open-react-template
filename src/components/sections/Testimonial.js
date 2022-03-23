import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { CarouselProvider } from "pure-react-carousel";
import { StyledSlide } from "./testimonialStyle";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  CaseStudyCarouselContainer,
  CaseStudyContainer,
  CaseStudyImage,
  CaseStudyTitleContainer,
  StyledSlider,
} from "./styledComponents";
import { useMediaQuery } from "../../hooks/MediaHook";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
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
    title: "Case Studies",
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

          <CarouselProvider
            naturalSlideHeight={isMobile ? 10 : 70}
            naturalSlideWidth={isMobile ? 10 : 100}
            totalSlides={8}
            isPlaying
            visibleSlides={isMobile ? 1 : 3}
            infinite={true}
            lockOnWindowScroll
            orientation={"horizontal"}
          >
            <CaseStudyCarouselContainer>
              <StyledSlider>
                <StyledSlide index={0}>
                  <CaseStudyContainer>
                    <CaseStudyImage
                      src={require("../../assets/images/caseStudies/Educational_London.jpg")}
                      className="text-md mb-8"
                      alt="Educational London"
                      style={{
                        maxWidth: "300px",
                        maxHeight: "200px",
                        minHeight: "200px",
                      }}
                    />
                    <CaseStudyTitleContainer>
                      <p className="text-sm text-center mb-0">
                        Educational - London
                      </p>
                    </CaseStudyTitleContainer>
                  </CaseStudyContainer>
                </StyledSlide>
                <StyledSlide index={1}>
                  <CaseStudyContainer>
                    <CaseStudyImage
                      src={require("../../assets/images/caseStudies/Healthcare_Northern_Ireland.jpg")}
                      className="text-md mb-8"
                      alt="Healthcare_Northern_Ireland"
                      style={{
                        maxWidth: "300px",
                        maxHeight: "200px",
                        minHeight: "200px",
                      }}
                    />
                    <CaseStudyTitleContainer>
                      <p className="text-sm text-center mb-0">
                        Healthcare - Northern Ireland
                      </p>
                    </CaseStudyTitleContainer>
                  </CaseStudyContainer>
                </StyledSlide>
                <StyledSlide index={2}>
                  <CaseStudyContainer>
                    <CaseStudyImage
                      src={require("../../assets/images/caseStudies/Leisure_centre_belfast.jpg")}
                      className="text-md mb-8"
                      alt="Educational London"
                      style={{
                        maxWidth: "300px",
                        maxHeight: "200px",
                        minHeight: "200px",
                      }}
                    />
                    <CaseStudyTitleContainer>
                      <p className="text-sm text-center mb-0">
                        Leisure Centre - Belfast
                      </p>
                    </CaseStudyTitleContainer>
                  </CaseStudyContainer>
                </StyledSlide>
                <StyledSlide index={3}>
                  <CaseStudyContainer>
                    <CaseStudyImage
                      src={require("../../assets/images/caseStudies/Office_development_Derry.jpg")}
                      className="text-md mb-8"
                      alt="Office Development Derry"
                      style={{
                        maxWidth: "300px",
                        maxHeight: "200px",
                        minHeight: "200px",
                      }}
                    />
                    <CaseStudyTitleContainer>
                      <p className="text-sm text-center mb-0">
                        Office Development - Derry
                      </p>
                    </CaseStudyTitleContainer>
                  </CaseStudyContainer>
                </StyledSlide>
                <StyledSlide index={4}>
                  <CaseStudyContainer>
                    <CaseStudyImage
                      src={require("../../assets/images/caseStudies/offices_Mid_ulster.jpg")}
                      className="text-md mb-8"
                      alt="Offices Mid Ulster"
                      style={{
                        maxWidth: "300px",
                        maxHeight: "200px",
                        minHeight: "200px",
                      }}
                    />
                    <CaseStudyTitleContainer>
                      <p className="text-sm text-center mb-0">
                        Offices - Mid Ulster
                      </p>
                    </CaseStudyTitleContainer>
                  </CaseStudyContainer>
                </StyledSlide>
                <StyledSlide index={5}>
                  <CaseStudyContainer>
                    <CaseStudyImage
                      src={require("../../assets/images/caseStudies/Pump_station_dublin.jpg")}
                      className="text-md mb-8"
                      alt="Pump station dublin"
                      style={{
                        maxWidth: "300px",
                        maxHeight: "200px",
                        minHeight: "200px",
                      }}
                    />
                    <CaseStudyTitleContainer>
                      <p className="text-sm text-center mb-0">
                        Pump Station - Dublin
                      </p>
                    </CaseStudyTitleContainer>
                  </CaseStudyContainer>
                </StyledSlide>
                <StyledSlide index={6}>
                  <CaseStudyContainer>
                    <CaseStudyImage
                      src={require("../../assets/images/caseStudies/Sports_grounds_Belfast.jpg")}
                      className="text-md mb-8"
                      alt="Sports grounds Belfast"
                      style={{
                        maxWidth: "300px",
                        maxHeight: "200px",
                        minHeight: "200px",
                      }}
                    />
                    <CaseStudyTitleContainer>
                      <p className="text-sm text-center mb-0">
                        Sports Grounds - Belfast
                      </p>
                    </CaseStudyTitleContainer>
                  </CaseStudyContainer>
                </StyledSlide>
                <StyledSlide index={7}>
                  <CaseStudyContainer>
                    <CaseStudyImage
                      src={require("../../assets/images/caseStudies/student_accommodation_Bristol.jpg")}
                      className="text-md mb-8"
                      alt="Student Accommodation Bristol"
                      style={{
                        maxWidth: "300px",
                        maxHeight: "200px",
                        minHeight: "200px",
                      }}
                    />
                    <CaseStudyTitleContainer>
                      <p className="text-sm text-center mb-0">
                        Student Accommodation - Bristol
                      </p>
                    </CaseStudyTitleContainer>
                  </CaseStudyContainer>
                </StyledSlide>
              </StyledSlider>
            </CaseStudyCarouselContainer>
          </CarouselProvider>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;

/*
<div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum cillum dolore eu fugiat.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    John Doe
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Business Name</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum cillum dolore eu fugiat.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Karen Doe
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Business Name</a>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum cillum dolore eu fugiat.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Tracy Doe
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Business Name</a>
                  </span>
                </div>
              </div>
            </div>
            */
