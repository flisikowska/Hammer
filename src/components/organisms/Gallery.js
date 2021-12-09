import React from "react";
import styled from "styled-components";
import GallerySwiper from "../molecules/GallerySwiper";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;

  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  padding: 70px;
`;

const Text = styled.p`
  text-align: justify;
  text-align-last: center;
  width: 80%;
  color: ${({ theme }) => theme.secondary};
  font-size: 1.6vw;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  margin: 0 40px;
  font-weight: 400;
  cursor: default;
  @media (max-width: 1200px) {
    font-size: 3vw;
  }
  @media (max-width: 800px) {
    font-size: 4.5vw;
    margin: auto;
  }

  @media (max-width: 350px) {
    font-size: 5vw;
  }
`;
const Gallery = () => (
  <StyledWrapper>
    <Text>
      Dokładamy wszelkich starań, by Twój dom zyskał wymarzony design.
      Niezależnie od tego czy budynek jest murowany czy powstał z drewna – jego
      wnętrze potrzebuje doświadczonych fachowców, by zapewnić swoim mieszkańcom
      pełną satysfakcję. Wiemy jak ważne dla Inwestorów są prace wykończeniowe
      będące ostatnim etapem budowy. Nieustannie powiększamy nasz warsztat
      narzędziowy i śledzimy na bieżąco szkolenia branżowe. Nasza wiedza
      i umiejętności stanowią bazę wielu interesujących aranżacji.
    </Text>
    <GallerySwiper />
  </StyledWrapper>
);

export default Gallery;
