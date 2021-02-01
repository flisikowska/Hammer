import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuContainer from "../components/organisms/MenuContainer";
import SEO from "../components/SEO.js";
import Background from "../components/atoms/Background";
import Background2 from "../components/atoms/Background2";
import Background3 from "../components/atoms/Background3";
import MainTemplate from "../templates/MainTemplate";
import Header from "../components/atoms/Header";
import AboutMe from "../components/organisms/AboutMe";
import Contact from "../components/organisms/Contact";
import Title from "../components/atoms/Title";
import "swiper/swiper-bundle.css";
import Swiper, {
  Pagination,
  Mousewheel,
  Keyboard,
  Scrollbar,
  HashNavigation,
} from "swiper";

const SwiperPagination = styled.div`
  .swiper-pagination-bullet-active {
    background-color: #ffd000 !important;
  }
  .swiper-pagination-bullet {
    background-color: #fff;
  }
`;

const SwiperScrollbar = styled.div`
  .swiper-scrollbar-drag {
    background-color: #aaa !important;
  }
`;

const Index = () => {
  const [swiper, setSwiper] = useState();
  const [swiperIndex, setSwiperIndex] = useState();

  const SlideToSection = () => {
    switch (window.location.hash) {
      case "#home":
        swiper.slideTo(0);
        if (swiperIndex === undefined) setSwiperIndex(0);
        break;
      case "#aboutus":
        swiper.slideTo(1);
        if (swiperIndex === undefined) setSwiperIndex(1);
        break;
      case "#contact":
        swiper.slideTo(2);
        if (swiperIndex === undefined) setSwiperIndex(2);
        break;
    }
  };

  const TitleAnimation = (e) => {
    const mobileView = window.matchMedia("(max-width:1000px)").matches;
    const title = document.getElementById("title");
    if (e.realIndex !== 0 && !mobileView) {
      title.style.position = "fixed";
      title.style.top = "0";
      title.style.left = "15px";
      title.style.transform = "translate(0%, 0%)";
      title.style.fontSize = "6vw";
      title.style["-webkit-text-stroke-width"] = "2px";
    } else if (e.realIndex === 0 && !mobileView) {
      title.style.position = "absolute";
      title.style.top = "45%";
      title.style.left = "50%";
      title.style.transform = "translate(-50%, -55%)";
      title.style.fontSize = "16vw";
      title.style["-webkit-text-stroke-width"] = "2px";
    } else if (e.realIndex === 0 && mobileView) {
      title.style.top = "45%";
      title.style.left = "50%";
      title.style.transform = "translate(-50%, -55%)";
      title.style.fontSize = "20vw";
      title.style["-webkit-text-stroke-width"] = "1px";
    } else if (e.realIndex !== 0 && mobileView) {
      title.style.top = "10px";
      title.style.left = "10px";
      title.style.transform = "translate(0%, 0%)";
      title.style.fontSize = "11vw";
      title.style["-webkit-text-stroke-width"] = "1px";
    }
  };
  useEffect(() => {
    if (window.location.hash === "" || window.location.hash === undefined) {
      window.location.hash = "#home";
    }
    Swiper.use([Pagination, Mousewheel, Scrollbar, Keyboard, HashNavigation]);
    setSwiper(
      new Swiper(".swiper-container", {
        loop: false,
        speed: 1000,
        grabCursor: false,
        mousewheel: true,
        keyboard: {
          enabled: true,
        },
        scrollbar: {
          draggable: true,
          el: ".swiper-scrollbar",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        hashNavigation: {
          replaceState: true,
        },
        on: {
          slideChange: function (e) {
            setSwiperIndex(e.realIndex);
            TitleAnimation(e);
          },
        },
      })
    );
  }, []);

  useEffect(() => {
    if (!swiper) return;
    SlideToSection();

    window.onhashchange = () => {
      SlideToSection();
    };
  }, [swiper]);

  return (
    <MainTemplate>
      <MenuContainer swiperIndex={swiperIndex} swiper={swiper} />
      <SEO title="Hammer" />
      <Title id="title">Hammer</Title>
      <div className="swiper-container" style={{ height: "100vh" }}>
        <div className="swiper-wrapper">
          <section data-hash="home" className="swiper-slide">
            <Background />
            <Header />
          </section>
          <section data-hash="aboutus" className="swiper-slide">
            <Background2 />
            <AboutMe />
          </section>
          <section data-hash="contact" className="swiper-slide">
            <Background3 />
            <Contact />
          </section>
        </div>
        <SwiperPagination className="swiper-pagination" />
        <SwiperScrollbar className="swiper-scrollbar" />
      </div>
    </MainTemplate>
  );
};
export default Index;
