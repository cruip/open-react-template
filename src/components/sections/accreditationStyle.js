import styled from "styled-components";

export const ColumnList = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(auto-fit, minmax(${props.itemSize}, 1fr))`};
  grid-gap: 0.5rem;
  align-items: center;
  background-color: "blue";
  margin-bottom: 2em;
`;
