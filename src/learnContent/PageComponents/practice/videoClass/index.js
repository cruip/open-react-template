import React from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import PracticeHeader from "../../../LayoutComponents/AppLayout/Practice/PracticeHeader";

const videoSrc = {
  type: "video",
  sources: [
    {
      src: "454303232",
      provider: "vimeo",
    },
  ],
};

const VideoClassComponent = () => {
  return (
    <>
      <PracticeHeader
        title='Video Class'
        description='Press play to understand the grammar. Click on the CC icon to watch it with subtitles.'
      />
      <section className='fl-ce'>
        <div style={{ width: "90%" }}>
          <Plyr source={videoSrc} />
        </div>
      </section>
    </>
  );
};

export default VideoClassComponent;
