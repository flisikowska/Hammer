import React from "react";
import styled from "styled-components";
import SectionTemplate from "../../templates/SectionTemplate";
import Goral from "../../images/logo-goral.png";
import Lezna from "../../images/logo-lezna.png";

const StyledContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
`;

const StyledText = styled.div`
  font-size: 3vw;
  color: white;
  text-transform: uppercase;
  margin-top: 15px;
`;

const StyledName = styled.div`
  font-size: 2vw;
  color: black;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-top: 15px;
`;

const IconsContainer = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  position: absolute;
  bottom: 0;
  /* background-color: rgba(255, 255, 255, 0.2); */
  /* background-color: white; */
`;

const IconWrapper = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 33.3%;
  border-right: 2px solid ${({ theme }) => theme.yellow};
  align-items: center;
  transition: 0.5s;
  :hover {
    backdrop-filter: blur(10px);
  }
  :first-child {
    border-left: 2px solid ${({ theme }) => theme.yellow};
  }
`;

const StyledIcon = styled.img``;
const Cooperation = () => (
  <SectionTemplate nopadding="nopadding">
    <StyledContainer>
      <StyledText>Z tymi firmami współpracujemy:</StyledText>
      <IconsContainer>
        <IconWrapper>
          {/* <StyledName>Góral domy</StyledName> */}
          <StyledIcon
            style={{ width: "500px", height: "126px" }}
            src={Goral}
            alt="Góral"
          />
        </IconWrapper>
        <IconWrapper>
          {/* <StyledName>Lezna</StyledName> */}
          <StyledIcon
            style={{ width: "280px", height: "126px" }}
            src={Lezna}
            alt="Lezna"
          />
        </IconWrapper>
        <IconWrapper>
          {/* <StyledName>Lezna</StyledName> */}

          <StyledIcon
            style={{ width: "500px", height: "126px" }}
            src={Goral}
            alt="Góral"
          />
        </IconWrapper>
      </IconsContainer>
    </StyledContainer>
  </SectionTemplate>
);
export default Cooperation;
