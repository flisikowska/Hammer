import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Toggle from "../atoms/Toggle";

const StyledHeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  right: 0;
  display: flex;
  justify-content: flex-end;
  height: 80px;
  align-items: Center;
  transition: 0.5s;
  z-index: 101;

  @media (max-width: 1000px) {
    width: 100%;
    height: 0px;
    &.active {
      backdrop-filter: blur(20px);
      height: calc(var(--vh, 1vh) * 100);
      .toggle {
        display: none;
      }
      .toggleX {
        display: block;
      }
    }
  }
`;

const HeaderContainer = () => {
  useEffect(() => {
    const header = document.getElementById("header");
    document.addEventListener("scroll", () => {
      const value = window.scrollY;
      header.style.backgroundColor =
        value > 5 || window.innerWidth <= 1000 ? "#222" : "transparent";
    });
  });
  const [activeMenu, setActiveMenu] = useState(false);
  const toggle = () => {
    setActiveMenu((x) => !x);
  };
  return (
    <StyledHeaderContainer className={activeMenu ? "active" : ""} id="header">
      <Menu callback={() => toggle()} activeMenu={activeMenu} />
      <Toggle callback={() => toggle()} />
    </StyledHeaderContainer>
  );
};

export default HeaderContainer;
