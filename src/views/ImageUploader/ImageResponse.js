import React from 'react';
import {Image} from 'cloudinary-react';

import CircularProgress from "@material-ui/core/es/CircularProgress/CircularProgress";

class ImageResponse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        }
    };

    render() {

        const imageStyle = {
            transition: 'all 0.5s',
                width: 'inherit',
                height: 'inherit',
        };

        const frontStyle = {
            backfaceVisibility: 'hidden',
                height: 'inherit',
                width: 'inherit',
                position: 'absolute',
                zIndex: 20,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'whitesmoke',
        };

        const backStyle = {
            transform: 'rotateY(180deg)',
                height: 'inherit',
                width: 'inherit',
                position: 'absolute',
                zIndex: 10,
        };

        const progressCtrStyle = {
            transform: `rotateY(${this.state.loaded ? '180' : 0}deg)`,
            transition: 'all 0.5s linear',
            transformStyle: 'preserve-3d',
            height: 'inherit',
            width: 'inherit',
        };

        return (
            <div style={progressCtrStyle}>
                <div style={frontStyle}>
                    <CircularProgress/>
                </div>
                <div style={backStyle}>
                    <Image
                        style={imageStyle}
                        {...this.props}
                        onLoad={() => {
                            this.setState({ loaded: true })
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default ImageResponse;