import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
  duration: PropTypes.number,
  onLinkClick: PropTypes.func
}

class SmoothScroll extends React.Component {

  easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
  };

  scrollToEl = (startTime, currentTime, duration, scrollEndElemTop, startScrollOffset) => {
    const runtime = currentTime - startTime;
    let progress = runtime / duration;

    progress = Math.min(progress, 1);

    const ease = this.easeInOutQuad(progress);

    window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));
    if (runtime < duration) {
      window.requestAnimationFrame((timestamp) => {
        const currentTime = timestamp || new Date().getTime();
        this.scrollToEl(startTime, currentTime, duration, scrollEndElemTop, startScrollOffset);
      });
    }
  };

  smoothScroll = (e) => {
    e.preventDefault();

    const targetId = this.props.to;
    const target = document.getElementById(targetId);
    const duration = this.props.duration || 1000;

    if (!target) return;

    this.props.onLinkClick && this.props.onLinkClick();

    window.requestAnimationFrame((timestamp) => {
      const stamp = timestamp || new Date().getTime();
      const start = stamp;

      const startScrollOffset = window.pageYOffset;
      const scrollEndElemTop = target.getBoundingClientRect().top;

      this.scrollToEl(start, stamp, duration, scrollEndElemTop, startScrollOffset);
    })
  };

  render() {
    const {
      className,
      children,
      to,
      duration,
      onLinkClick,
      ...props
    } = this.props;

    const classes = classNames(
      className
    );

    return (
      <a
        {...props}
        className={classes}
        href={'#' + to}
        onClick={this.smoothScroll}>
        {children}
      </a>
    );
  }
}

SmoothScroll.propTypes = propTypes;

export default SmoothScroll;