import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Mirrors with Memories',
    paragraph: 'Live the life you\'ve imagined. As you simplify your life, the laws of the universe will be simpler.',
    bruhMoment: '— Henry David Thoreau'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                <span role="img" aria-label="pushpin">📍 </span>Lincoln, NE
                  </div>
                <h3 className="mt-0 mb-12">
                  Calm After the Storm
                  </h3>
                <p className="m-0">
                  Caught a breathe after the intense marathon that is Formula SAE Electric. Our team didn't pass technical inspection, but we took some cool nature shots. <br></br><br></br>To learn more about the mission of the Spartan Racing team, visit <a href="http://sr-e.org/">@SRE</a>.
                </p>
                <br></br>
                <p className="text-xxs">
                  Photo taken by Me.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/lincoln-nebraska.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                <span role="img" aria-label="pushpin">📍 </span>Castle Rock State Park, CA
                  </div>
                <h3 className="mt-0 mb-12">
                  Gaze Into the Mist
                  </h3>
                <p className="m-0">
                  One of my favorite hikes. However, I would recommend it to intermediate hikers as there's a lot of elevated rocks, slippery ground, and mosquitoes.
                </p>
                <br></br>
                <p className="text-xxs">
                  Photo taken by co-worker.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/hiking-castlerock.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                <span role="img" aria-label="pushpin">📍 </span>Niagara Falls, ON, Canada
                  </div>
                <h3 className="mt-0 mb-12">
                  Death-Defying Rescue 
                  </h3>
                <p className="m-0">
                  It was so foggy that I didn't think there would be anything scenic to snap photos of. Lo and behold, someone fell into the Horseshoe Falls and survived thanks to emergency response. 
                </p>
                <br></br>
                <p className="text-xxs">
                  Photo taken by Me.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/falls-rescue.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>
            
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                <span role="img" aria-label="pushpin">📍 </span>Palo Alto, CA
                  </div>
                <h3 className="mt-0 mb-12">
                  Lone Survivor
                  </h3>
                <p className="m-0">
                  In school, I had a random desire to join hackathons and ate the hype that they were fun <i>(Spoiler: it's free labor)</i>. I wanted to challenge myself and made a really basic app <a href="https://apiworld.co/">@API World</a> to prevent sleeping while driving. Ended up winning.
                </p>
                <br></br>
                <p className="text-xxs">
                  Photo taken by stranger.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/hack-solo.JPG')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                <span role="img" aria-label="pushpin">📍 </span>San Jose, CA
                  </div>
                <h3 className="mt-0 mb-12">
                  Man's Best Friend
                  </h3>
                <p className="m-0">
                  This is Lobo. He is an American Eskimo. He really likes chasing empty milk cartons.
                </p>
                <br></br>
                <p className="text-xxs">
                  Photo taken by Me.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/lobo.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;