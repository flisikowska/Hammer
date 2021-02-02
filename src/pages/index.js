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
    const title = document.getElementById("title");
    if (e.realIndex !== 0) {
      title.classList.add("notFirstSection");
    } else if (e.realIndex === 0) {
      title.classList.remove("notFirstSection");
    }
  };

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
    document.getElementById("title").style.transition = "0.8s";
    document.getElementById("menu").style.transition = "0.5s";
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
      <div
        className="swiper-container"
        style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      >
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
