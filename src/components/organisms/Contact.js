import React from "react";
import styled from "styled-components";
import Cooperation from "../molecules/Cooperation";
import ContactInfo from "../atoms/ContactInfo";
import Map from "../atoms/Map";

const StyledContainer = styled.div`
  padding: 80px 5% 0 5%;
  text-align: center;
  justify-content: end;
  align-items: end;
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: space-between;
  @media (max-width: 1500px) {
    padding: 70px 100px;
  }
  @media (max-width: 700px) {
    padding: 70px 20px;
  }
`;

const StyledTitle = styled.div`
  font-size: 2vw;
  color: white;
  text-transform: uppercase;
  margin: 30px 0;

  @media (max-width: 800px) {
    font-size: 4vw;
    margin-top: 10px;
  }
`;

const Contact = () => (
  <StyledContainer>
    <StyledTitle>Skontaktuj się z nami</StyledTitle>
    <ContactInfo />
    {/* <Map /> */}
    {/* <Cooperation /> */}
  </StyledContainer>
);
export default Contact;
