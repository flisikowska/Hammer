import React from "react";
import styled from "styled-components";
import { Phone } from "@styled-icons/heroicons-solid/Phone";
import { Mail } from "@styled-icons/heroicons-solid/Mail";

const StyledContainer = styled.div`
  align-self: end;
  text-align: end;
  /* margin-bottom: 40px; */
  cursor: default;
`;

const StyledText = styled.p`
  margin: auto 0;
  align-items: center;

  vertical-align: bottom;
  font-size: 2.5vw;
  color: white;
  @media (max-width: 900px) {
    font-size: 3vw;
  }
  @media (max-width: 900px) {
    font-size: 5vw;
  }
  :nth-child(1) span {
    vertical-align: middle;
    margin-left: 5px;
    color: ${({ theme }) => theme.red};
    font-weight: 600;
  }
`;
const ContactInfo = ({ style }) => (
  <StyledContainer style={style}>
    <StyledText>
      <Phone size="45" />
      <span>785 509 556</span>
    </StyledText>
    <StyledText>
      <Mail size="45" /> <span>krzys_zn@interia.pl</span>
    </StyledText>
  </StyledContainer>
);
export default ContactInfo;
