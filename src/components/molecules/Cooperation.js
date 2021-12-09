import React from "react";
import styled from "styled-components";
import Goral from "../../images/logo-goral.png";
import Lezna from "../../images/logo-lezna.png";
import ListTemplate from "../../templates/ListTemplate";

const StyledText = styled.div`
  font-size: 2vw;
  color: white;
  text-transform: uppercase;
  margin: 30px 0;
  @media (max-width: 800px) {
    font-size: 4vw;
    margin-top: 0px;
  }
`;

const ListElement = styled.div`
  padding: 10px;
  border-right: 1px solid ${({ theme }) => theme.secondary};
  width: 33.3%;
  font-size: 1.3vw;
  :last-child {
    border-right: none;
  }
  > img {
    height: 68px;
    width: auto;
    @media (max-width: 1100px) {
      height: 40px;
    }
    @media (max-width: 750px) {
      height: 20px;
    }
  }
`;

const StyledIcon = styled.img``;

const Cooperation = () => (
  <>
    <StyledText>Z tymi firmami współpracujemy</StyledText>
    <ListTemplate secondary="secondary">
      <ListElement>
        <StyledIcon src={Goral} alt="Góral" />
      </ListElement>
      <ListElement>
        <StyledIcon src={Lezna} alt="Lezna" />
      </ListElement>
      <ListElement>
        <StyledIcon src={Goral} alt="Góral" />
      </ListElement>
    </ListTemplate>
  </>
);
export default Cooperation;
