import React, { useEffect } from "react";
import styled from "styled-components";
import { ExecuteWhen } from "../../helpers/functions";
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

const Menu = ({ activeMenu, callback }) => {
  const MenuOnScroll = () => {
    var html = document.getElementsByTagName("html")[0];
    var scrollDistance = html.scrollTop + window.innerHeight / 2;
    var sections = document.getElementsByTagName("section");
    var navElements = document.getElementsByClassName("navigation");
    Array.from(sections)
      .filter(
        (section) =>
          section.offsetTop <= scrollDistance ||
          section.offsetTop + section.offsetHeight <=
            html.scrollTop + window.innerHeight
      )
      .slice(-1)
      .forEach((section) => {
        Array.from(navElements).forEach((e) => {
          Array.from(e.childNodes)
            .filter((node) => node.tagName === "A")
            .forEach((node) => {
              node.classList.remove("active");
              if (node.hash === `#${section.id}`) {
                node.classList.add("active");
                if (window.location.hash !== node.hash)
                  window.history.replaceState(undefined, undefined, node.hash);
              }
            });
        });
      });
  };

  let delayedOnScrollTimeout = null;
  const onscroll = () => {
    if (delayedOnScrollTimeout) clearTimeout(delayedOnScrollTimeout);
    if (document.readyState !== "complete") return;
    delayedOnScrollTimeout = setTimeout(MenuOnScroll, 250);
  };

  useEffect(() => {
    document.addEventListener("scroll", onscroll);
    ExecuteWhen(onscroll, () => document.readyState === "complete");
  });
  return (
    <StyledWrapper className={activeMenu ? "active" : ""} id="menu">
      <MenuElement
        callback={() => {
          callback();
        }}
        scrollTo="stronaglowna"
        title="Strona główna"
      />
      <MenuElement
        callback={() => {
          callback();
        }}
        scrollTo="onas"
        title="O nas"
      />
      <MenuElement
        callback={() => {
          callback();
        }}
        scrollTo="galeria"
        title="Galeria"
      />
      <MenuElement
        callback={() => {
          callback();
        }}
        scrollTo="kontakt"
        title="Kontakt"
      />
    </StyledWrapper>
  );
};

export default Menu;
