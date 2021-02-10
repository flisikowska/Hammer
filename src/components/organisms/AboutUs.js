import React, { useEffect } from "react";
import styled from "styled-components";
import SectionTemplate from "../../templates/SectionTemplate";
import Cooperation from "./Cooperation";
import Letter from "../atoms/Letter";

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledText = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 2.5vw;
  cursor: default;
  @media (max-width: 900px) {
    font-size: 4vw;
  }
`;

const AboutUs = () => (
  <SectionTemplate>
    <StyledContainer>
      <StyledText>
        <Letter className="letter" letter="h" />
        Budowa domków letniskowych
      </StyledText>
      <StyledText>
        <Letter className="letter" letter="a" />
        Ocieplenia wewnątrz domów z drewna
      </StyledText>
      <StyledText>
        <Letter className="letter" letter="m" />
        Montaż płyt kartonowo-gipsowych
      </StyledText>
      <StyledText>
        <Letter className="letter" letter="m" />
        Spoinowanie, płytki, gładzie, malowanie
      </StyledText>
      <StyledText>
        <Letter className="letter" letter="e" />
        Montaż paneli podłogowych
      </StyledText>
      <StyledText>
        <Letter className="letter" letter="r" />
        Montaż drzwi i okien
      </StyledText>
      {/* <Cooperation /> */}
    </StyledContainer>
  </SectionTemplate>
);

export default AboutUs;
