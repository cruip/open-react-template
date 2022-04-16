import styled from "styled-components";
import { colours } from "../../theme/colors";

export const GalleryRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 1em;
`;

export const ImageOverlayWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
  z-index: 1;
  margin-bottom: 1em;
`;

export const UniformGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(auto-fit, minmax(${props.itemSize}, 1fr))`};
  grid-gap: 0.5rem;
  align-items: flex-start;
  background-color: "blue";
  margin-bottom: 2em;
`;

export const ImageGrid = styled.div`
  line-height: 0;
  column-gap: 0.5rem;
  column-count: ${(props) => `${props.isMobile ? "2" : "4"}`};
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const FloatingTextContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0em;
  background-color: ${colours.blackOverlay};
  z-index: 2;
`;
export const StyledImageWithText = styled.div`
  &:hover {
    cursor: pointer;
  }
  position: relative;
  text-align: center;
  color: white;
  margin-bottom: 1em;
`;

export const StyledTitle = styled.h6`
  font-size: 0.9em;
  word-wrap: break-all;
  white-space: pre-wrap;
  color: white;
  margin: 0;
  padding: 0;
`;
