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
    title: 'TRANSFORM HOW YOU GAME',
    paragraph: 'Play like you’ve never played before. Bet on your own skill in multiple games across genres. You’re behind the wheel. You control your experience. You get the gains. Our aim is to leverage the powerful drive that you had when you first won, succeeded or overcame a challenge in a video game. Games like Halo, Bioshock  and Call Of Duty were pivotal for generations of people. As an adult, time is hard to find and gaming can take a back seat. We’ve curated a user-oriented skill gaming app that allows you to bet on your own gaming performance, at your very best games, on your optimal console.'
  };

  const section2Header = {
    title: 'Features'
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <SectionHeader data={section2Header} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Incentives and Customized Progression
                    </h4>
                  <p className="m-0 text-sm">
                  By incentivising the time spent playing games, once wasted time could become real cash. Make it more impactful and challenging, and expand your capacity. Stay in the moment, versus zoning out. Our progressive betting structure helps to avoid any bets that are too large too soon, in addition to keeping you aware of spend and win rate. This puts you behind the wheel and in control of your own experience.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  User-Oriented Gameplay
                    </h4>
                  <p className="m-0 text-sm">
                  Take advantage of what could be decades of gaming experience under your belt. We constantly evolve to ensure that our users are matched accurately and fairly by using artificial intelligence and machine learning. Your experience is our priority.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Analyse and Optimize your Performance
                    </h4>
                  <p className="m-0 text-sm">
                  Store key data insights on your profile, and use that information to optimize and improve your performance. When you take advantage of other Parlay events, you can earn badges, shields and tokens.
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