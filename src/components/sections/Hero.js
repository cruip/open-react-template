import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Calendar from 'react-calendar';
import TopK from '../../utils/TopKUtils';

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
  const [showCalendar, setShowCalendar] = useState(false);

  const [value, onChange] = useState(new Date());

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
              Welcome to COVID TWEETS visualisation<span className="text-color-primary">done for CS 4225</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Have you ever wondered how people using tweeter has been reacting to the COVID situation ? Scroll to find out.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile onClick={()=>setShowCalendar(!showCalendar)}>
                    Select a Date
                    </Button>
                </ButtonGroup>
                <div style={{ height: 600, width: 800 }}>
                  <TopK country={"IN"} dateProvided={"01/02/2020"} />
                </div>
              </div>
            </div>
          </div>
            <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-delay="500">
              {showCalendar ? <Calendar
                className="has-shadow"
                onChange={onChange}
                value={value}
                alt="Hero"
                /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;