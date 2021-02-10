import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  color: white;
  text-align: right;
  text-transform: uppercase;
  font-size: 2vw;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  margin: 0;
  cursor: default;
  width: 100%;
  @media (max-width: 1200px) {
    font-size: 3vw;
  }
  @media (max-width: 800px) {
    font-size: 4.5vw;
    margin: 10px;
    text-align: center;
  }

  @media (max-width: 350px) {
    font-size: 5vw;
  }
  &:last-child {
    color: ${({ theme }) => theme.yellow};
  }
`;

const Header = ({ text, style }) => (
  <StyledParagraph style={style}>{text}</StyledParagraph>
);
export default Header;
