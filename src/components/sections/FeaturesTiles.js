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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Keep your technology relevant',
    paragraph: ' Tech moves fast, peak performace is lost faster. Meridity can help you make it relevant again.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/update.svg')}
                      alt="Features tile icon 01"
                      width={50}
                      height={50} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Website Design
                    </h4>
                  <p className="m-0 text-sm">
                    Get help building a website that effectively sends your message.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/programming.svg')}
                      alt="Features tile icon 02"
                      width={50}
                      height={50} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Website Maintenance
                    </h4>
                  <p className="m-0 text-sm">
                    Keep your site running at peak performance.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/speedometer.svg')}
                      alt="Features tile icon 03"
                      width={50}
                      height={50} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Website Updates
                    </h4>
                  <p className="m-0 text-sm">
                    Keep your website looking fresh so your message is never outdated.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image-alt mb-16">
                    <Image
                      src={require('./../../assets/images/online-shopping.svg')}
                      alt="Features tile icon 04"
                      width={50}
                      height={50} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Hardware Sourcing
                    </h4>
                  <p className="m-0 text-sm">
                    Whether you need one or many computers, either new or one from Meridity's exclusive 
                    <span className="text-color-secondary"> Redux </span> 
                    line, can get you back online fast.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image-alt mb-16">
                    <Image
                      src={require('./../../assets/images/data.svg')}
                      alt="Features tile icon 05"
                      width={50}
                      height={50} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Hardware Configuration
                    </h4>
                  <p className="m-0 text-sm">
                    New installations or a revamp of what you have, consistent check-ups and upgrades keep technology running smoothly.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image-alt mb-16">
                    <Image
                      src={require('./../../assets/images/warning.svg')}
                      alt="Features tile icon 06"
                      width={50}
                      height={50} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Hardware Repair
                    </h4>
                  <p className="m-0 text-sm">
                    Things break. Get back to working at peak performance fast.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;