import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 0px;
  padding-bottom: 30px;
  -webkit-tap-highlight-color: transparent;
  right: 20px;
  z-index: 5;
  color: ${({ theme }) => theme.secondary};
  font-size: 1.25em;
  :hover {
    opacity: 0.5;
    transition: opacity 0.5s;

    .arrowText {
      transform: translateX(8px);
      transition: transform 0.5s;
    }
  }
`;

const StyledArrow = styled.span`
  width: calc(100% + 40px);
  transition: transform 0.5s;
  position: absolute;
  right: 0;
  bottom: 30px;

  @media (max-width: 400px) {
    width: calc(100% + 20px);
  }
`;

const StyledShaft = styled.span`
  background-color: ${({ theme }) => theme.secondary};
  display: block;
  height: 1px;
  transition: all 0.5s;
  width: 100%;

  &:before,
  &:after {
    background-color: ${({ theme }) => theme.secondary};
    content: "";
    display: block;
    height: 1px;
    width: 8px;
    position: absolute;
    top: 0;
    right: 0;
    transition: all 0.5s;
  }
  &:before {
    transform-origin: top right;
    transform: rotate(-40deg);
  }
  &:after {
    transform-origin: bottom right;
    transform: rotate(40deg);
  }
`;

const StyledText = styled.div`
  position: relative;
  transition: all 0.5s;
  font-style: italic;
  left: -40px;
  bottom: 5px;
  font-size: 1.2vw;
  font-weight: 400;
  @media (max-width: 1300px) {
    font-size: 1.6vw;
  }
  @media (max-width: 900px) {
    font-size: 2vw;
  }
  @media (max-width: 700px) {
    font-size: 2.5vw;
  }
  @media (max-width: 450px) {
    font-size: 3vw;
  }
  @media (max-width: 400px) {
    left: -20px;
  }
`;

const RightArrowButton = ({ onClick, text }) => (
  <StyledContainer onClick={onClick}>
    <StyledText className="arrowText">{text}</StyledText>
    <StyledArrow>
      <StyledShaft className="shaft" />
    </StyledArrow>
  </StyledContainer>
);

export default RightArrowButton;
