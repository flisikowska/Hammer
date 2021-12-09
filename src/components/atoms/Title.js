import styled from "styled-components";

const Title = styled.h1`
  font-family: "Abel";
  text-transform: uppercase;
  letter-spacing: 10px;
  font-size: 14vw;
  color: ${({ theme }) => theme.primary};
  /* word-wrap: break-word; */
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-fill-color: transparent;
  pointer-events: none;
  margin: 0;
  z-index: 100;
  @media (max-width: 1200px) {
    font-size: 14vw;
    -webkit-text-stroke-width: 2px;
  }
  @media (max-width: 800px) {
    font-size: 17vw;
  }
  @media (max-width: 500px) {
    -webkit-text-stroke-width: 1px;
    font-size: 24vw;
  }
  @media (max-width: 300px) {
    font-size: 19vw;
  }
  @media (max-width: 220px) {
    letter-spacing: 5px;

    font-size: 18vw;
  }
`;

export default Title;
