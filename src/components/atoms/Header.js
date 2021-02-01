import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-size: 4vw;
  letter-spacing: 3px;
  margin: 0;
  cursor: default;
  width: 100%;

  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -40%);
`;

const Header = () => (
  <>
    <StyledParagraph>Firma wykończeniowa</StyledParagraph>
  </>
);
export default Header;
