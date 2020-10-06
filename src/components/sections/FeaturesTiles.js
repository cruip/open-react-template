import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { BiHandicap } from 'react-icons/bi';
import { FaAddressCard } from 'react-icons/fa';
import { GiHealthNormal } from 'react-icons/gi';
import FeatureTile from './partials/FeatureTile';

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
  )

  const sectionHeader = {
    title: 'Build up the whole picture',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  }

  const tiles = [
    { id: 1, icon: <BiHandicap size={50} color={'white'}/>, iconType: 'ICON', title: 'Robust Workflow', details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' },
    { id: 2, icon: <FaAddressCard size={50} color={'white'}/>, iconType: 'ICON', title: 'Robust Workflow', details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' },
    { id: 3, icon: <GiHealthNormal size={50} color={'white'}/>, iconType: 'ICON', title: 'Robust Workflow', details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' },
    {
      id: 4, icon: <Image
        src={require('./../../assets/images/feature-tile-icon-01.svg')}
        alt="Features tile icon 01"
        width={64}
        height={64}/>,
      iconType: 'IMAGE',
      title: 'Robust Workflow', details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
    },
    {
      id: 5, icon: <Image
        src={require('./../../assets/images/feature-tile-icon-02.svg')}
        alt="Features tile icon 02"
        width={64}
        height={64} />,
      iconType: 'IMAGE',
      title: 'Robust Workflow', details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
    },
    {
      id: 6, icon:  <Image
        src={require('./../../assets/images/feature-tile-icon-03.svg')}
        alt="Features tile icon 03"
        width={64}
        height={64} />,
      iconType: 'IMAGE',
      title: 'Robust Workflow', details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
    },
  ]

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content"/>
          <div className={tilesClasses}>
            {tiles.map(tile => <FeatureTile key={tile.id} icon={tile.icon} iconType={tile.iconType} title={tile.title} details={tile.details}/>)}
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
