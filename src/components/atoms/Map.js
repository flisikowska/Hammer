import React from "react";
import styled from "styled-components";
import map from "../../images/map2.png";

const StyledMapLinkContainer = styled.a`
  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const StyledMapPhoto = styled.img`
  width: auto;
  border-radius: 10px;
  height: 40vh;
  /* max-height: 350px; */
`;

const Map = () => {
  return (
    <StyledMapLinkContainer
      href="https://www.google.com/maps/place/86-302+Bia%C5%82y+B%C3%B3r/@53.4180665,18.7640109,11z/data=!4m5!3m4!1s0x4702d131ba2f9df3:0x63828cf5bb63e345!8m2!3d53.3994533!4d18.7373831"
      target="_blank"
      rel="noreferrer"
    >
      <StyledMapPhoto alt="Map" src={map} />
    </StyledMapLinkContainer>
  );
};

export default Map;
