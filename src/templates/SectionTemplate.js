import React from "react";
import styled from "styled-components";

const Layer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 70px;
  @media (max-width: 900px) {
    padding: 70px 30px;
  }
  /* background-color: #ccc; */
`;

const StyledContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: relative;
  /* padding: 0 50px; */
  overflow: hidden;
  @media (max-width: 900px) {
    /* padding: 0px 20px; */
  }
  @media (max-width: 400px) {
    /* padding: 0; */
  }
  &.first {
    :before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: -80%;
      left: 0%;
      background-color: rgba(255, 255, 255, 0.1);
      transform: skewY(210deg);
    }
  }
`;

const SectionTemplate = ({ first, children }) => (
  <Layer>
    <StyledContainer className={first}>{children}</StyledContainer>
  </Layer>
);

export default SectionTemplate;
