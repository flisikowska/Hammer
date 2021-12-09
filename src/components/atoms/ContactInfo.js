import React from "react";
import styled from "styled-components";
import { Phone } from "@styled-icons/heroicons-solid/Phone";
import { Mail } from "@styled-icons/feather/Mail";
import { MapSigns } from "@styled-icons/fa-solid/MapSigns";
import map from "../../images/map2.png";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding-bottom: 40px;
`;

const StyledBox = styled.div`
  width: 30%;
  /* width: 250px; */
  height: 450px;
  display: flex;
  flex-direction: column;
  margin: 0 1.5%;
  position: relative;
  padding: 0 10px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
  &.map {
    background-image: url(${map});
    > svg {
      opacity: 0;
    }
    > span {
      opacity: 0;
    }
  }
  @media (max-width: 600px) {
    width: 97%;
    flex-direction: row;
    height: 150px;
  }
  :before {
    content: "";
    position: absolute;
    border-radius: 15px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.5s;
  }
  :hover {
    :before {
      transform: scaleY(1);
      transform-origin: bottom;
      transition: transform 0.5s;
    }
    > svg {
      opacity: 1;

      /* opacity: 0.6; */
      /* color: ${({ theme }) => theme.grey}!important; */
      transform: translateY(-20px);
      text-shadow: 5px 5px 1px #fff;
    }
    > span {
      opacity: 1;
    }
  }
  @media (max-width: 600px) {
    width: 97%;
    flex-direction: row;
    height: 150px;
    > svg {
      margin-top: auto !important;
      margin-bottom: auto !important;
      margin: auto 0 auto 10% !important;
    }
    > span {
      font-size: 5vw;
    }
  }
  @media (max-width: 400px) {
    height: 100px;
    > svg {
      width: 45px !important;
      height: 45px !important;
    }
    > span {
      font-size: 4vw;
    }
  }
`;

const IconStyle = {
  margin: "20% auto 0 auto",
  color: "#fff",
  zIndex: "1",
  transition: "0.5s",
};

const StyledText = styled.span`
  position: relative;
  z-index: 2;
  font-size: 1.3vw;
  color: ${({ theme }) => theme.grey};
  transition: 0.5s;
  margin: auto;
  text-align: center;
  @media (max-width: 1300px) {
    font-size: 2vw;
  }
`;

const ContactInfo = () => (
  <>
    <StyledContainer>
      <StyledBox>
        <Phone style={IconStyle} size="90" />
        <StyledText>+48 785 509 556</StyledText>
      </StyledBox>
      <StyledBox>
        <Mail style={IconStyle} size="90" />
        <StyledText>hammer.budowa@gmail.com</StyledText>
      </StyledBox>
      <StyledBox className="map">
        <MapSigns style={IconStyle} size="90" />
        <StyledText>
          Biały Bór k. Grudziądza <br />
          woj. kujawsko-pomorskie
        </StyledText>
      </StyledBox>
    </StyledContainer>
  </>
);

export default ContactInfo;
