import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string
}

const defaultProps = {
  src: undefined,
  width: undefined,
  height: undefined,
  alt: undefined
}

const Image = ({
  className,
  src,
  width,
  height,
  alt,
  ...props
}) => {

  const [loaded, setLoaded] = useState(false);

  const image = useRef(null);

  useEffect(() => {
    handlePlaceholder(image.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const placeholderSrc = (w, h) => {
    return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"%3E%3C/svg%3E`;
  }

  const handlePlaceholder = (img) => {
    const placeholder = document.createElement('img');
    if (!loaded) {
      img.style.display = 'none';
      img.before(placeholder);
      placeholder.src = placeholderSrc(
        img.getAttribute('width') || 0,
        img.getAttribute('height') || 0
      );
      placeholder.width = img.getAttribute('width');
      placeholder.height = img.getAttribute('height');
      placeholder.style.opacity = '0';
      img.className && placeholder.classList.add(img.className);
      placeholder.remove();
      img.style.display = '';      
    }
  }

  function onLoad() {
    setLoaded(true);
  }  

  return (
    <img
      {...props}
      ref={image}
      className={className}
      src={src}
      width={width}
      height={height}
      alt={alt}
      onLoad={onLoad} />
  );
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;