import styled from "styled-components";

const Title = styled.h1`
  letter-spacing: 10px;
  text-transform: uppercase;
  margin: 0;
  z-index: 100;
  font-size: 16vw;
  pointer-events: none;
  position: absolute;
  font-family: "Abel";
  top: 45%;
  left: 50%;
  transform: translate(-50%, -55%);
  color: #ffd000;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  transition: 1s;
  @media (max-width: 1000px) {
    font-size: 23vw;
    -webkit-text-stroke-width: 1px;
  }
`;

export default Title;
