import React, {useState} from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Bloke from "../layout/Bloke";
import BlokeExample from "../sections/examples/17.json";
import BlokeExample1 from "../sections/examples/3447.json";
import BlokeExampleImage from "../sections/examples/17.png";
import BlokeExampleImage1 from "../sections/examples/3447.png";
import {Label, Rating} from "semantic-ui-react";
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
    title: 'BLOKéMON',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Collect
                  </div>
                <h3 className="mt-0 mb-12">
                  Cards
                  </h3>
                <div className="m-0">
                  BLOKéMON have random attributes ranging from 1-100 in each category:
                  <div className="text-color-primary">
                    HP <i className="heart icon red small"/>,
                    Attack <i className="crosshairs icon green small"/>,
                    Defense <i className="shield icon inverted black small"/>,
                    Special Attack <i className="plus circle icon blue small"/>,
                    Special Defense <i className="shield alternate icon red small"/>,
                    Speed <i className="lightning icon yellow small"/>
                  </div>

                  <p>BLOKéMON also have a random type:</p>
                  <p className="text-color-primary">Normal, Fierce, Shiny, Rare, Unique, Frail, Brawny, Bruiser, Rugged, Feeble, Weak, Nimble, Swift, and Enhanced </p>
                  <div className="ui tiny info message">Click the <Rating icon="star"/> under the BLOKéMON to see stats!</div>

                </div>

              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <div className="ui card">
                  <div className="extra content">
                    <span>{BlokeExample1.attributes[0]['value'].toUpperCase()}</span>


                    <strong style={{float: 'right'}}>{BlokeExample1.name.toUpperCase()}</strong>


                  </div>
                  <div className="image">
                    <Image
                        src={BlokeExampleImage1} alt="Features split 01"
                        width={528}
                        height={396}/>
                  </div>
                  <div className="content">
                    <div className="extra content">
                      <Rating

                          icon="star"
                          defaultRating={Math.floor(BlokeExample1.attributes[7]['value'] / 100)}
                          maxRating={4}
                          style={{cursor: 'pointer', width: 100}}
                          disabled/>

                      <Label style={{float: 'right'}} onClick={() => setIsVisible(!isVisible)}>{BlokeExample1.attributes[7]['value']}</Label>
                      <div style={{color: 'black'}}>
                        {isVisible && <div className="ui grid">
                          <div className="three wide column"><i
                              className="heart icon red"></i>{BlokeExample1.attributes[1]['value']}
                          </div>
                          <div className="three wide column"><i
                              className="crosshairs icon green"></i>{BlokeExample1.attributes[2]['value']}
                          </div>
                          <div className="three wide column"><i
                              className="shield icon black"></i>{BlokeExample1.attributes[3]['value']}
                          </div>
                          <div className="three wide column"><i
                              className="lightning icon yellow"></i>{BlokeExample1.attributes[4]['value']}
                          </div>
                          <div className="three wide column">
                            <i className="plus circle icon blue"></i>{BlokeExample1.attributes[5]['value']}
                          </div>
                          <div className="three wide column"><i
                              className="shield alternate icon red"></i>{BlokeExample1.attributes[6]['value']}
                          </div>
                        </div>}

                      </div>

                    </div>

                    <div className="meta">


                    </div>

                  </div>

                </div>

              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <a className="ui red ribbon label">Coming Soon</a>
                  </div>
                <h3 className="mt-0 mb-12">
                  Trade Cards
                  </h3>
                <p className="m-0">
                  Trade your BLOKéMON with other users!
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <div className="ui card">
                  <div className="extra content">
                    <span>{BlokeExample.attributes[0]['value'].toUpperCase()}</span>


                    <strong style={{float: 'right'}}>{BlokeExample.name.toUpperCase()}</strong>


                  </div>
                  <div className="image">
                    <Image
                        src={BlokeExampleImage} alt="Features split 01"
                        width={528}
                        height={396}/>
                  </div>
                  <div className="content">
                    <div className="extra content">
                      <Rating

                          icon="star"
                          defaultRating={Math.floor(BlokeExample.attributes[7]['value'] / 100)}
                          maxRating={4}
                          style={{cursor: 'pointer', width: 100}}
                          disabled/>

                      <Label style={{float: 'right'}} onClick={() => setIsVisible(!isVisible)}>{BlokeExample.attributes[7]['value']}</Label>
                      <div style={{color: 'black'}}>
                        {isVisible && <div className="ui grid">
                          <div className="three wide column"><i
                              className="heart icon red"></i>{BlokeExample.attributes[1]['value']}
                          </div>
                          <div className="three wide column"><i
                              className="crosshairs icon green"></i>{BlokeExample.attributes[2]['value']}
                          </div>
                          <div className="three wide column"><i
                              className="shield icon black"></i>{BlokeExample.attributes[3]['value']}
                          </div>
                          <div className="three wide column"><i
                              className="lightning icon yellow"></i>{BlokeExample.attributes[4]['value']}
                          </div>
                          <div className="three wide column">
                            <i className="plus circle icon blue"></i>{BlokeExample.attributes[5]['value']}
                          </div>
                          <div className="three wide column"><i
                              className="shield alternate icon red"></i>{BlokeExample.attributes[6]['value']}
                          </div>
                        </div>}

                      </div>

                    </div>

                    <div className="meta">


                    </div>

                  </div>

                </div>

              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">

                  </div>
                <h3 className="mt-0 mb-12">
                  <a className="ui red ribbon label tiny">Coming Soon</a> Gaming
                  </h3>
                <p className="m-0">
                    Use your BLOKéMON to find, battle and capture other BLOKéMON in a side scrolling game!
                   </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                    src={require('./../../assets/images/walking.gif')}
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

//<Bloke image={BlokeExampleImage1} json={BlokeExample1}/>
//                 <Bloke image={BlokeExampleImage} json={BlokeExample}/>