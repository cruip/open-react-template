import React from 'react';
import PropTypes from 'prop-types'
import { FaBeer } from 'react-icons/fa'

const propTypes = {
  icon: PropTypes.node,
  iconType: PropTypes.string,
  title: PropTypes.string,
  details: PropTypes.string
}

const defaultProps = {
  icon: <FaBeer size={50} color={'white'} />,
  iconType: 'ICON'
}

const FeatureTile = ({icon, iconType, title, details}) => {
  return (
    <div className="tiles-item reveal-from-bottom">
      <div className="tiles-item-inner">
        <div className="features-tiles-item-header">
          <div className={'features-tiles-item-image mb-16 ' + (iconType === 'ICON' ? 'p-12' : '')}>
            {icon}
          </div>
        </div>
        <div className="features-tiles-item-content">
          <h4 className="mt-0 mb-8">
            {title}
          </h4>
          <p className="m-0 text-sm">
            {details}
          </p>
        </div>
      </div>
    </div>
  )
}

FeatureTile.propTypes = propTypes;
FeatureTile.defaultProps = defaultProps;

export default FeatureTile;
