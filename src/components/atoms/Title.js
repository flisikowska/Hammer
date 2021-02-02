import styled from "styled-components";

const Title = styled.h1`
  font-family: "Abel";
  text-transform: uppercase;
  letter-spacing: 10px;
  font-size: 16vw;
  color: #ffd000;
  -webkit-text-stroke-width: 2px;
  -webkit-text-fill-color: transparent;
  pointer-events: none;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -55%);
  /* transition: 0.8s; */
  margin: 0;
  z-index: 100;
  &.notFirstSection {
    position: fixed;
    top: 10px;
    left: 15px;
    transform: translate(0%, 0%);
    font-size: 6vw;
  }
  @media (max-width: 1000px) {
    font-size: 23vw;
    -webkit-text-stroke-width: 1px;
    &.notFirstSection {
      font-size: 10vw;
    }
  }
`;

export default Title;
