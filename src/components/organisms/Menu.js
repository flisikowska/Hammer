import React, { useEffect } from "react";
import styled from "styled-components";
import MenuElement from "../atoms/MenuElement";

const StyledWrapper = styled.ul`
  position: relative;
  display: flex;
  margin: 0;
  @media (max-width: 1000px) {
    flex-direction: column;
    position: absolute;
    margin-left: 0;
    top: 60px;
    width: 100%;
    height: calc((calc(var(--vh, 1vh) * 100)) - 60px);
    padding: 60px 0px;
    text-align: center;
    overflow: auto;
    background: transparent;
    opacity: 0;
    transform: translateX(100%);
    /* transition: 0.5s; */

    &.active {
      transform: translateX(0);
      width: 100%;
      height: calc((calc(var(--vh, 1vh) * 100)) - 60px);
      opacity: 1;
      top: 60px;
    }
  }
`;

const Menu = ({ swiperIndex, activeMenu, swiper, callback }) => (
  <StyledWrapper className={activeMenu ? "active" : ""} id="menu">
    <MenuElement
      callback={() => {
        callback();
        swiper.slideTo(0);
      }}
      active={swiperIndex === 0 ? "active" : ""}
      title="Strona główna"
    />
    <MenuElement
      callback={() => {
        callback();
        swiper.slideTo(1);
      }}
      active={swiperIndex === 1 ? "active" : ""}
      title="O nas"
    />
    <MenuElement
      callback={() => {
        callback();
        swiper.slideTo(2);
      }}
      active={swiperIndex === 2 ? "active" : ""}
      title="Kontakt"
    />
  </StyledWrapper>
);

export default Menu;
