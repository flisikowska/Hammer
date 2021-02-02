import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Toggle from "../atoms/Toggle";

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 80px;
  padding: 10px 0 0 0;
  z-index: 101;

  @media (max-width: 1000px) {
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

const MenuContainer = ({ swiperIndex, swiper }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const toggle = () => {
    setActiveMenu((x) => !x);
  };
  return (
    <HeaderContainer className={activeMenu ? "active" : ""} id="header">
      <Menu
        swiperIndex={swiperIndex}
        swiper={swiper}
        callback={() => toggle()}
        activeMenu={activeMenu}
      />
      <Toggle callback={() => toggle()} />
    </HeaderContainer>
  );
};

export default MenuContainer;
