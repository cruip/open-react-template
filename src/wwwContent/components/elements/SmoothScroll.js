import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
  duration: PropTypes.number,
  onLinkClick: PropTypes.func
}

const SmoothScroll = ({
  className,
  children,
  to,
  duration,
  onLinkClick,
  ...props
}) => {

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
  };

  const scrollToEl = (startTime, currentTime, duration, scrollEndElemTop, startScrollOffset) => {
    const runtime = currentTime - startTime;
    let progress = runtime / duration;

    progress = Math.min(progress, 1);

    const ease = easeInOutQuad(progress);

    window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));
    if (runtime < duration) {
      window.requestAnimationFrame((timestamp) => {
        const currentTime = timestamp || new Date().getTime();
        scrollToEl(startTime, currentTime, duration, scrollEndElemTop, startScrollOffset);
      });
    }
  };

  const smoothScroll = (e) => {
    e.preventDefault();

    const targetId = to;
    const target = document.getElementById(targetId);
    const timing = duration || 1000;

    if (!target) return;

    onLinkClick && onLinkClick();

    window.requestAnimationFrame((timestamp) => {
      const stamp = timestamp || new Date().getTime();
      const start = stamp;

      const startScrollOffset = window.pageYOffset;
      const scrollEndElemTop = target.getBoundingClientRect().top;

      scrollToEl(start, stamp, timing, scrollEndElemTop, startScrollOffset);
    })
  };

  const classes = classNames(
    className
  );

  return (
    <a
      {...props}
      className={classes}
      href={'#' + to}
      onClick={smoothScroll}>
      {children}
    </a>
  )
}

SmoothScroll.propTypes = propTypes;

export default SmoothScroll;