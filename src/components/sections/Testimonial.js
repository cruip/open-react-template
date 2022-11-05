import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Executive Board',
    paragraph: ''
  };

  const memeber_links = {
    mk: "https://www.linkedin.com/in/madhavkarwa/",
    js: "https://www.linkedin.com/in/jdselvaraaj/",
    sg: "https://www.linkedin.com/in/sean-gately/",
    rg: "https://www.linkedin.com/in/ryan-m-gallagher00/",
    lm: "https://www.linkedin.com/in/louismulliez/",
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" id="team">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <a href={memeber_links.mk}>
                <Image
                  src={require('./../../assets/images/members/madhav_karwa.jpg')}
                  alt="Open"
                  style={{"width":"auto", "height": "256px"}}
                  />
              </a>
                <br></br>

                <div className="testimonial-item-footer" style={{
                  "display": "flex",
                  "justify-content": "center",
                  "align-items": "center"}}>
                  <a href={memeber_links.mk}>Madhav Karwa</a>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <a href={memeber_links.sg}>
                <Image
                  src={require('./../../assets/images/members/sean_gately.png')}
                  alt="Open"
                  style={{"width":"auto", "height": "256px"}}
                  />
              </a>
                <br></br>

                <div className="testimonial-item-footer" style={{
                  "display": "flex",
                  "justify-content": "center",
                  "align-items": "center"}}>
                  <a href={memeber_links.sg}>Sean Gately</a>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <a href={memeber_links.js}>
                <Image
                  src={require('./../../assets/images/members/joseph_selvaraaj.jpeg')}
                  alt="Open"
                  style={{"width":"auto", "height": "256px"}}
                  />
              </a>
                <br></br>

                <div className="testimonial-item-footer" style={{
                  "display": "flex",
                  "justify-content": "center",
                  "align-items": "center"}}>
                  <a href={memeber_links.js}>Joseph Daniel Selvaraaj</a>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <a href={memeber_links.rg}>
                <Image
                  src={require('./../../assets/images/members/ryan_gallagher.png')}
                  alt="Open"
                  style={{"width":"auto", "height": "256px"}}
                  />
              </a>
                <br></br>

                <div className="testimonial-item-footer" style={{
                  "display": "flex",
                  "justify-content": "center",
                  "align-items": "center"}}>
                  <a href={memeber_links.rg}>Ryan Gallagher</a>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <a href={memeber_links.lm}>
                <Image
                  src={require('./../../assets/images/members/louis_mulliez.png')}
                  alt="Open"
                  style={{"width":"auto", "height": "256px"}}
                  />
              </a>
                <br></br>

                <div className="testimonial-item-footer" style={{
                  "display": "flex",
                  "justify-content": "center",
                  "align-items": "center"}}>
                  <a href={memeber_links.lm}>Louis Mulliez</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;