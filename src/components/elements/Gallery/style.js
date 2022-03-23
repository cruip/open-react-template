import styled from "styled-components";

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
`;

export const ColumnList = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(auto-fit, minmax(${props.itemSize}, 1fr))`};
  grid-gap: 0.5rem;
  align-items: center;
  background-color: "blue";
  margin-bottom: 2em;
`;
