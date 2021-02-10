import React from "react";
import styled from "styled-components";
import SectionTemplate from "../../templates/SectionTemplate";
import GallerySwiper from "../molecules/GallerySwiper";

const Layer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  /* background-color: rgba(255, 255, 255, 0.1); */

  padding: 100px 250px;
  @media (max-width: 1200px) {
    padding: 100px 30px;
  }
`;

const StyledContainer = styled.div`
  /* background-color: rgba(255, 255, 255, 0.2); */
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0px;
`;

const Projects = () => (
  <Layer>
    <StyledContainer>
      <GallerySwiper />
    </StyledContainer>
  </Layer>
);

export default Projects;
