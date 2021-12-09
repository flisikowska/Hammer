import React, { useEffect } from "react";
import styled from "styled-components";
import HeaderContainer from "../components/organisms/HeaderContainer";
import SEO from "../components/SEO.js";
import Background from "../components/atoms/Background";
import MainTemplate from "../templates/MainTemplate";
import AboutUs from "../components/organisms/AboutUs";
import Gallery from "../components/organisms/Gallery";
import Home from "../components/organisms/Home";
import Contact from "../components/organisms/Contact";
import "swiper/swiper-bundle.css";
import Swiper, {
  Pagination,
  Mousewheel,
  Keyboard,
  Scrollbar,
  Navigation,
  HashNavigation,
  EffectCoverflow,
  Autoplay,
} from "swiper";

const StyledSection = styled.section`
  width: 100%;
  /* height: 100%; */
  position: relative;
  min-height: 100vh;
`;

const Index = () => {
  // const TitleAnimation = (e) => {
  //   const title = document.getElementById("title");
  //   if (e !== 0) {
  //     title.classList.add("notFirstSection");
  //   } else if (e === 0) {
  //     title.classList.remove("notFirstSection");
  //   }
  // };

  const ChangeWebsiteHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  useEffect(() => {
    ChangeWebsiteHeight();
    window.addEventListener("resize", () => {
      ChangeWebsiteHeight();
    });
    if (window.location.hash === "" || window.location.hash === undefined) {
      window.location.hash = "#stronaglowna";
    }
    // document.getElementById("title").style.transition = "1s";
    document.getElementById("menu").style.transition = "0.5s";
    Swiper.use([
      Pagination,
      Mousewheel,
      Scrollbar,
      Keyboard,
      EffectCoverflow,
      Navigation,
      HashNavigation,
      Autoplay,
    ]);
    new Swiper(".swiper1", {
      effect: "coverflow",
      grabCursor: true,
      spaceBetween: 30,
      slideToClickedSlide: true,
      // autoplay: {
      //   disableOnInteraction: true,
      //   delay: 5000,
      // },
      centeredSlides: true,
      slidesPerView: "auto",
      // loop: true,
      // loopedSlides: 9,
      slideClass: "swiper-slide1",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      },
    });
    new Swiper(".swiper2", {
      loop: true,
      speed: 1500,
      autoplay: {
        disableOnInteraction: false,
        delay: 3000,
      },
      slideClass: "swiper-slide2",

      pagination: {
        el: ".swiper-pagination2",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
      },
    });
  }, []);
  return (
    <MainTemplate>
      <HeaderContainer />
      <SEO title="Hammer" />
      <div style={{ height: "calc(var(--vh, 1vh) * 100)" }}>
        <Background />
        <StyledSection id="stronaglowna">
          <Home />
        </StyledSection>
        <StyledSection id="onas">
          <AboutUs />
        </StyledSection>
        <StyledSection id="galeria">
          <Gallery />
        </StyledSection>
        <StyledSection style={{ justifyContent: "end" }} id="kontakt">
          <Contact />
        </StyledSection>
      </div>
    </MainTemplate>
  );
};
export default Index;
