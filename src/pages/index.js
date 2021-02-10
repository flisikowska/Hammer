import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderContainer from "../components/organisms/HeaderContainer";
import SEO from "../components/SEO.js";
import Background from "../components/atoms/Background";
import Background2 from "../components/atoms/Background2";
import Background3 from "../components/atoms/Background3";
import MainTemplate from "../templates/MainTemplate";
import AboutUs from "../components/organisms/AboutUs";
import Projects from "../components/organisms/Projects";
import Home from "../components/organisms/Home";
import Cooperation from "../components/organisms/Cooperation";
import "swiper/swiper-bundle.css";
import Swiper, {
  Pagination,
  Mousewheel,
  Keyboard,
  Scrollbar,
  Navigation,
  HashNavigation,
  Autoplay,
} from "swiper";

const SwiperPagination = styled.div`
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.yellow} !important;
  }
  .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 1;
  }
`;

const SwiperScrollbar = styled.div`
  .swiper-scrollbar-drag {
    background-color: #aaa !important;
  }
`;

const Index = () => {
  const [swiper1, setSwiper] = useState();
  const [swiper2, setSecondSwiper] = useState();
  const [swiperIndex, setSwiperIndex] = useState();

  const SlideToSection = () => {
    switch (window.location.hash) {
      case "#stronaglowna":
        swiper1.slideTo(0);
        if (swiperIndex === undefined) setSwiperIndex(0);
        break;
      case "#onas":
        swiper1.slideTo(1);
        if (swiperIndex === undefined) setSwiperIndex(1);
        break;
      case "#projekty":
        swiper1.slideTo(2);
        if (swiperIndex === undefined) setSwiperIndex(2);
        break;
      // case "#wspolpraca":
      //   swiper1.slideTo(3);
      //   if (swiperIndex === undefined) setSwiperIndex(3);
      //   break;
    }
  };

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
      window.location.hash = "#home";
    }
    Swiper.use([
      Pagination,
      Mousewheel,
      Scrollbar,
      Keyboard,
      Navigation,
      HashNavigation,
      Autoplay,
    ]);
    setSwiper(
      new Swiper(".swiper1", {
        loop: false,
        speed: 1000,
        grabCursor: false,
        mousewheel: true,
        // slideClass: "swiper-slide1",
        keyboard: {
          enabled: true,
        },
        scrollbar: {
          draggable: true,
          el: ".swiper-scrollbar1",
        },
        pagination: {
          el: ".swiper-pagination1",
          clickable: true,
        },
        hashNavigation: {
          replaceState: true,
        },
        on: {
          slideChange: function (e) {
            setSwiperIndex(e.realIndex);
            // TitleAnimation(e.realIndex);
          },
        },
      })
    );
    setSecondSwiper(
      new Swiper(".swiper2", {
        loop: true,
        // slideClass: "swiper-slide2",
        speed: 1500,
        simulateTouch: false,
        autoplay: {
          disableOnInteraction: false,
          delay: 2000,
        },
        pagination: {
          el: ".swiper-pagination2",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next2",
          prevEl: ".swiper-button-prev2",
        },
      })
    );
  }, []);

  useEffect(() => {
    if (!swiper1) return;
    // document.getElementById("title").style.transition = "1s";
    document.getElementById("menu").style.transition = "0.5s";
    SlideToSection();

    window.onhashchange = () => {
      SlideToSection();
    };
  }, [swiper1]);

  return (
    <MainTemplate>
      <HeaderContainer swiperIndex={swiperIndex} swiper1={swiper1} />
      <SEO title="Hammer" />
      <div
        className="swiper-container swiper1"
        style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      >
        <div className="swiper-wrapper">
          <section data-hash="stronaglowna" className="swiper-slide">
            <Background />
            <Home />
          </section>
          <section data-hash="onas" className="swiper-slide ">
            <Background2 />
            <AboutUs />
          </section>
          <section data-hash="projekty" className="swiper-slide ">
            {/* <Background3 /> */}
            <Projects />
          </section>
          {/* <section data-hash="wspolpraca" className="swiper-slide ">
            <Background3 />
            <Cooperation />
          </section> */}
        </div>
        <SwiperPagination className="swiper-pagination swiper-pagination1" />
        <SwiperScrollbar className="swiper-scrollbar swiper-scrollbar1" />
      </div>
    </MainTemplate>
  );
};
export default Index;
