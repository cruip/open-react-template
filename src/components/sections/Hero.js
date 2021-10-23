import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

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

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
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
          {/* <div className="hero-figure reveal-from-bottom illustration-element-01">
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
          </div> */}
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom">
              Hi, my name is <span className="text-color-primary">Gonzalo</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom">
              I am a Full-Stack Software Engineer who specializes in back-end development and structuring data, while still maintaining a deep passion for intuitive and appealing UI design. I am enthusiastic to work as a part of a team and tackle big problems in organized and creative ways. I want to take full advantage of my early introduction into the professional world and work on as many projects as possible in order to expand my software engineering skillset and create innovative code.
                </p>
              <div className="reveal-from-bottom">

                <ButtonGroup>
                  <Button tag="a" color="dark" wideMobile href="https://www.linkedin.com/in/gonzalo-meza-cabrera/">
                    LinkedIn
                    </Button>
                  <Button tag="a" color="primary" wideMobile href="https://drive.google.com/file/d/1Dr_AztkJs4BndDF1-kMVW7RmWEK3pIyo/view?usp=sharing">
                    My Resume
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/gonzzoh">
                    Github
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;