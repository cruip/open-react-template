import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.string.isRequired,
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

class Image extends React.Component {

  state = {
    isLoaded: false,
  };

  image = React.createRef();

  componentDidMount() {
    const placeholderImage = document.createElement('img');
    this.handlePlaceholder(this.image.current, placeholderImage);
  }

  placeholderSrc = (w, h) => {
    return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"%3E%3C/svg%3E`;
  }

  handlePlaceholder = (img, placeholder) => {
    img.style.display = 'none';
    img.before(placeholder);
    placeholder.src = this.placeholderSrc(
      img.getAttribute('width') || 0,
      img.getAttribute('height') || 0
    );
    placeholder.width = img.getAttribute('width');
    placeholder.height = img.getAttribute('height');
    placeholder.style.opacity = '0';
    img.className && placeholder.classList.add(img.className);

    img.addEventListener('load', () => {
      placeholder.remove();
      img.style.display = '';
      this.setState({
        isLoaded: true
      })
    });
  }

  render() {

    const {
      className,
      src,
      width,
      height,
      alt,
      ...props
    } = this.props;

    return (
      <img
        {...props}
        ref={this.image}
        className={className}
        src={src}
        width={width}
        height={height}
        alt={alt} />
    );
  }
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;