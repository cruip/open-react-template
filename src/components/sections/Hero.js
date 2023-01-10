import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

import Image from '../elements/Image';

import BlokeAva from "../../assets/images/204.png"
import BlokeAva1 from "../../assets/images/1740.png"

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

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





  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <img style={{display: "inline", height: '75px', width: '75px' }} src={BlokeAva} alt="517"/>
              BLOKé<span className="text-color-primary">MON</span>
              <img style={{display: "inline", height: '75px', width: '75px' }} src={BlokeAva1} alt="517"/>

            </h1>
            <div className="container">
              <div className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                <div className="ui tiny text-color-primary inverted three statistics">
                  <div className="statistic">
                    <div className="value">
                      6,705
                    </div>
                    <div className="label">
                      BLOKés
                    </div>
                  </div>
                  <div className="statistic">
                    <div className="value">
                      0
                    </div>
                    <div className="label">
                      Minted
                    </div>
                  </div>

                  <div className="statistic">
                    <div className="value">
                        25
                    </div>
                    <div className="label">
                     Initial Max Mint
                    </div>
                  </div>
                </div>
                </div>

            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">

              <Image
                className="has-shadow"
                src={require('./../../assets/images/bg2.png')}
                alt="Hero"
                width={896}
                height={504} />

          </div>

        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;