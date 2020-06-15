import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import { Link } from 'react-router-dom';

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

  const bannerPhrases = [
    "Please send food to",
    "Bears don't like",
    "The quick brown fox jumped over the lazy",
    "(☞⌐▀͡ ͜ʖ͡▀ )☞",
    "Get to the choppa,",
    "//TODO"
  ];

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            {bannerPhrases[Math.floor(Math.random() * bannerPhrases.length)]}  <span className="text-color-primary">Thinh Le</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              <span role="img" aria-label="sunglasses">😎</span> Software engineer with a background in developing apps, frameworks, and test automation. If I had unlimited budget, a project I'd work on would be digitizing gravity and warp space <span role="img" aria-label="rocket">🚀</span><br></br>
                (I also like to make DIY crafts <span role="img" aria-label="candle">🕯️</span>)
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="dark" wideMobile>
                    <Link to="Email">Email</Link>
                    </Button>
                  <Button tag="a" color="dark" wideMobile>
                    <Link to="Resume">Resume</Link>
                    </Button>
                  <Button tag="a" color="light" wideMobile href="https://github.com/TimothyLe/">
                    Github
                  </Button>
                  <Button tag="a" color="secondary" wideMobile href="https://www.linkedin.com/in/thinh-le/">
                    Linkedin
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/333832098"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/banner.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/333832098"
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;