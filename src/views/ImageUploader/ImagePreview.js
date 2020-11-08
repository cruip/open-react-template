import React from 'react';
import PropTypes from 'prop-types';
import Paper from "@material-ui/core/es/Paper/Paper";

const ImagePreview = props => {

    const imgPreviewStyle = {
        position: 'absolute',
        backgroundImage: `url(${props.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: 150,
        height: 150,
    };

    return <Paper style={imgPreviewStyle}/>
};

ImagePreview.propTypes = {
    src: PropTypes.string.isRequired
};

export default ImagePreview;