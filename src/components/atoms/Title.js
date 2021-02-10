import styled from "styled-components";

const Title = styled.h1`
  font-family: "Abel";
  text-transform: uppercase;
  letter-spacing: 10px;
  font-size: 10vw;
  text-align: right;
  color: ${({ theme }) => theme.yellow};
  word-wrap: break-word;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-fill-color: transparent;
  pointer-events: none;
  margin: 0;
  z-index: 100;
  @media (max-width: 1200px) {
    font-size: 14vw;
    -webkit-text-stroke-width: 1px;
  }
  @media (max-width: 300px) {
    font-size: 18vw;
  }
  @media (max-width: 800px) {
    text-align: center;
    font-size: 17vw;
  }
`;

export default Title;
