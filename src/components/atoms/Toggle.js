import React from "react";
import styled from "styled-components";
import { Menu } from "@styled-icons/feather/Menu";
import { X } from "@styled-icons/feather/X";

const IconWrapper = styled.div`
  position: relative;
  margin-right: 10px;
  cursor: pointer;
`;
const StyledToggle = styled(Menu)`
  display: none;
  color: #ffd000;
  @media (max-width: 1000px) {
    display: block;
  }
  @media (max-width: 300px) {
    width: 30px !important;
    height: 30px !important;
  }
`;
const StyledToggleX = styled(X)`
  display: none;
  color: #ffd000;

  @media (max-width: 300px) {
    width: 30px !important;
    height: 30px !important;
  }
`;

const Toggle = ({ callback }) => (
  <IconWrapper>
    <StyledToggle size="45" className="toggle" onClick={callback} />
    <StyledToggleX size="45" className="toggleX" onClick={callback} />
  </IconWrapper>
);

export default Toggle;
