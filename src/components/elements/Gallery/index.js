import React from "react";
import { ImgOverlay } from "image-overlay-react";
import "image-overlay-react/dist/index.css";
import { ColumnList, ImageOverlayWrapper } from "./style";
import { colours } from "../../theme/colors";
import { useMediaQuery } from "../../../hooks/MediaHook";

const Images = [
  require("./../../../assets/images/weOffer/fire.jpg"),
  require("./../../../assets/images/weOffer/security.jpg"),
  require("./../../../assets/images/weOffer/access.jpg"),
  require("./../../../assets/images/weOffer/intruder.jpg"),
  require("./../../../assets/images/weOffer/cctv.jpg"),
  require("./../../../assets/images/weOffer/pa_systems.jpg"),
];

export const Gallery = () => {
  const isMobile = useMediaQuery();
  return (
    <ColumnList itemSize={isMobile ? "150px" : "300px"}>
      <ImageOverlayWrapper>
        <ImgOverlay
          imgSrc={require("./../../../assets/images/weOffer/fire.jpg")}
          bgColor={colours.blackOverlay}
          position="left"
          width="auto"
          height="auto"
          fSize="36px"
          fColor="white"
        >
          Fire Systems
        </ImgOverlay>
      </ImageOverlayWrapper>
      <ImageOverlayWrapper>
        <ImgOverlay
          imgSrc={require("./../../../assets/images/weOffer/security.jpg")}
          bgColor={colours.blackOverlay}
          position="top"
          width="auto"
          height="auto"
          fSize="36px"
          fColor="white"
        >
          Security
        </ImgOverlay>
      </ImageOverlayWrapper>
      <ImageOverlayWrapper>
        <ImgOverlay
          imgSrc={require("./../../../assets/images/weOffer/access.jpg")}
          bgColor={colours.blackOverlay}
          position="right"
          width="auto"
          height="auto"
          fSize="36px"
          fColor="white"
        >
          Access Control
        </ImgOverlay>
      </ImageOverlayWrapper>

      <ImageOverlayWrapper>
        <ImgOverlay
          imgSrc={require("./../../../assets/images/weOffer/intruder.jpg")}
          bgColor={colours.blackOverlay}
          position="left"
          width="auto"
          height="auto"
          fSize="36px"
          fColor="white"
        >
          Intruder Alarms
        </ImgOverlay>
      </ImageOverlayWrapper>
      <ImageOverlayWrapper>
        <ImgOverlay
          imgSrc={require("./../../../assets/images/weOffer/cctv.jpg")}
          bgColor={colours.blackOverlay}
          position="bottom"
          width="auto"
          height="auto"
          fSize="36px"
          fColor="white"
        >
          CCTV
        </ImgOverlay>
      </ImageOverlayWrapper>
      <ImageOverlayWrapper>
        <ImgOverlay
          imgSrc={require("./../../../assets/images/weOffer/pa_systems.jpg")}
          bgColor={colours.blackOverlay}
          position="right"
          width="auto"
          height="auto"
          fSize="36px"
          fColor="white"
        >
          PA Systems
        </ImgOverlay>
      </ImageOverlayWrapper>
    </ColumnList>
  );
};
