import { Slider } from "pure-react-carousel";
import styled from "styled-components";

export const CaseStudyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 2px;
  max-width: 200px;
  min-width: 300px;
  box-shadow: 0px 0px 5px hsla(0, 0%, 0%, 0.1);
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px hsla(0, 0%, 0%, 0.5);
  }
`;

export const CaseStudyImage = styled.img`
  min-width: 300px;
  max-width: 300px;
  border: 2px solid #e5e5e5;
`;

export const CaseStudyTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: #000;
`;

export const StyledSlider = styled(Slider)`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 25px;
  border-radius: 2px;
  box-shadow: 0px 0px 5px hsla(0, 0%, 0%, 0.3);
`;

export const CaseStudyCarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #eaecee;
  gap: 30px;
  width: 100%;
  height: 100%;
`;

export const OfferingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: hsla(0, 0%, 0%, 0.2);
  border-radius: 5px;
  padding: 0px;
  max-height: 150px;
`;
