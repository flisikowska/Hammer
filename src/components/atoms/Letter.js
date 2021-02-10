import React from "react";
import styled from "styled-components";

const StyledLetter = styled.div`
  font-size: 10.5vh;
  writing-mode: vertical-rl;
  text-orientation: upright;
  -webkit-text-fill-color: ${({ theme }) => theme.yellow};
  font-family: "Abel";
  text-transform: uppercase;
  color: ${({ theme }) => theme.yellow};
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-text-stroke-width: 4px;
  pointer-events: none;
  @media (max-height: 675px) {
    font-size: 10vh;
  }
  @media (max-height: 575px), (max-width: 650px) {
    font-size: 9vh;
    -webkit-text-stroke-width: 2px;
  }
  @media (max-height: 450px) {
    font-size: 7vh;
  }
`;
const Letter = ({ letter, className }) => (
  <StyledLetter className={className}>{letter}</StyledLetter>
);

export default Letter;
