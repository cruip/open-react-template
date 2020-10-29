import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
//import Image from '../elements/Image';
//import Modal from '../elements/Modal';
import HelpModal from '../elements/HelpModal';
import StartedModal from '../elements/StartedModal';

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

  //const [videoModalActive, setVideomodalactive] = useState(false);
  
  const [helpModalActive, setHelpmodalactive] = useState(false);
  const [startedModalActive, setStartedmodalactive] = useState(false);

  /* const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  } */

  const openHelpModal = (e) => {
    e.preventDefault();
    setHelpmodalactive(true);    
  }

  const openStartedModal = (e) => {
    e.preventDefault();
    setStartedmodalactive(true);    
  }

  const closeModal = (e) => {
    e.preventDefault();
    //setVideomodalactive(false);
    setStartedmodalactive(false)
    setHelpmodalactive(false);
  }   

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
              <span className="text-color-secondary">Meridity</span>'s technology solutions 
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Our services range from 
                <span className="text-color-secondary"> website </span> 
                development, updates, and maintenance to 
                <span className="text-color-secondary"> hardware </span> 
                sourcing, configuration, and refurbishment.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button 
                    tag="a" 
                    color="secondary" 
                    wideMobile 
                    onClick={openStartedModal}>
                    Get started
                  </Button>
                  <Button 
                    tag="a" 
                    color="secondary" 
                    wideMobile 
                    onClick={openHelpModal}>
                    Get help
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          {/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" /> */}
            <StartedModal
            id="video-modal"
            show={startedModalActive}
            handleClose={closeModal}
           />
            <HelpModal
            id="video-modal"
            show={helpModalActive}
            handleClose={closeModal}
           />
           
        </div>
      </div>
    </section>
  );
}
Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
