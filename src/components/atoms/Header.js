import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.secondary};
  text-align: center;
  text-transform: uppercase;
  font-size: 2.5vw;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  margin: 0 0 20px 0;
  font-weight: 400;
  cursor: default;
  @media (max-width: 1200px) {
    font-size: 3vw;
  }
  @media (max-width: 800px) {
    font-size: 4.5vw;
    margin: 10px;
  }

  @media (max-width: 350px) {
    font-size: 5vw;
  }
`;

const Header = ({ text, style }) => (
  <StyledParagraph style={style}>{text}</StyledParagraph>
);
export default Header;
