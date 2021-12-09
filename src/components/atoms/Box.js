import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  width: 30%;
  margin: 1%;
  height: 47%;
  padding: 0 20px;
  border-radius: 15px;
  display: flex;
  background: rgba(0, 0, 0, 0.4);
  @media (max-width: 900px) {
    width: 47%;
    height: 30%;
  }
  @media (max-width: 350px) {
    width: 97%;
    height: 15%;
    margin: 0.8%;
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
    > h2 {
      opacity: 1;
      /* color: ${({ theme }) => theme.primary}; */
      color: #fff;
      transform: translateY(-2vw);
    }
  }
`;
const StyledLetter = styled.h2`
  position: absolute;
  margin: 0;
  top: 5%;
  left: 5%;
  font-size: 6.5vw;
  color: ${({ theme }) => theme.grey};
  font-weight: 800;
  z-index: 1;
  opacity: 0.1;
  transition: 0.5s;
  @media (max-width: 1300px) {
    font-size: 10vw;
  }
  @media (max-width: 700px) {
    font-size: 13vw;
  }
`;

const StyledText = styled.div`
  position: relative;
  z-index: 2;
  font-size: 1.8vw;
  color: ${({ theme }) => theme.grey};
  transition: 0.5s;
  margin: auto;
  text-align: center;
  @media (max-width: 1200px) {
    font-size: 3vw;
  }
  @media (max-width: 700px) {
    font-size: 4vw;
  }
  @media (max-width: 500px) {
    font-size: 4.5vw;
  }
`;

const Box = ({ letter, text }) => (
  <StyledContainer>
    <StyledLetter>{letter}</StyledLetter>
    {/* <StyledTitle /> */}
    <StyledText>{text}</StyledText>
  </StyledContainer>
);

export default Box;
