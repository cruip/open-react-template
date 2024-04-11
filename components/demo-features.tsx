import React from "react";
import ModalVideo from "@/components/modal-video";
import VideoThumb from "@/public/images/video-thumb.png";

interface VideoProps {
  // video: string;
  // thumb: string;
  // thumbWidth: number;
  // thumbHeight: number;
  // thumbAlt: string;
  // videoWidth: number;
  // videoHeight: number;
  // heading: string;
  // paragraph: string;
  // buttonText: string;
}

const VideoComponent: React.FC<VideoProps> = ({
  // video,
  // thumb,
  // thumbWidth,
  // thumbHeight,
  // thumbAlt,
  // videoWidth,
  // videoHeight,
  // heading,
  // paragraph,
  // buttonText,
}) => {
  return (
    <div className="bg-white items-center">
      <ModalVideo
        thumb={VideoThumb}
        thumbWidth={700}
        thumbHeight={700}
        thumbAlt="Modal video thumbnail"
        video="/videos/app_promo_vid.mp4"
        videoWidth={1024}
        videoHeight={1024}
      />
      {/* Reusable Component */}
      {/* <ModalVideo
                thumb={thumb}
                thumbWidth={thumbWidth}
                thumbHeight={thumbHeight}
                thumbAlt={thumbAlt}
                video={video}
                videoWidth={videoWidth}
                videoHeight={videoHeight}
            />
            <h2>{heading}</h2>
            <p>{paragraph}</p>
            <button>{buttonText}</button> */}
    </div>
  );
};

export default VideoComponent;
