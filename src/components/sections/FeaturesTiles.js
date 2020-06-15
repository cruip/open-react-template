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
    title: 'Work Experience',
    paragraph: 'A list of my contributions to the world whether it be aiding a small business or a day job at a company'
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
                      src={require('./../../assets/images/circuit-board.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                      linkTo="https://www.xilinx.com/" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Xilinx
                    </h4>
                  <p className="m-0 text-sm">
                  Developed features for internal tools framework to enhance design reuse, customization, and lower barrier of entry for new users
                  </p>                                    
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/motorcycle.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                      linkTo="https://lightningmotorcycle.com/" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Lightning Motorcycle
                    </h4>
                  <p className="m-0 text-sm">
                  Created and tested mobile application to schedule customer test rides and events. In addition, managed company website and automated database transactions with query scripts.
                  </p>                  
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/electric-car.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64}
                      linkTo="http://sr-e.org/" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Spartan Racing Electric
                    </h4>
                  <p className="m-0 text-sm">
                  Performed system validation of high voltage and low voltage systems and developed real-time data pipeline for telemetry from connected devices.
                  </p>                  
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/wafer.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Lasertone SJ
                    </h4>
                  <p className="m-0 text-sm">
                    Conducted calibrations and tests for wafer machines and sourced materials for operations. 
                  </p>                  
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/work.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Freelance 
                    </h4>
                  <p className="m-0 text-sm">
                    Designed and planned program to extend battery life of IoT device and communicate with Android application using BLE.
                  </p>                  
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/grooming.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                      linkTo="https://labellasalon-beautysalon.business.site/" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    La Bella Salon
                    </h4>
                  <p className="m-0 text-sm">
                    Building a productivity application to optimize and automate daily operations conducted within a small business.
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