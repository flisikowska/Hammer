import React from "react";
import styled from "styled-components";
import img1 from "../../images/Gallery/1.jpg";
import img2 from "../../images/Gallery/2.jpg";
import img3 from "../../images/Gallery/3.jpg";
import img4 from "../../images/Gallery/4.jpg";

const SwiperPagination = styled.div`
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.yellow} !important;
  }
  .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 1;
  }
`;

const SwiperNavigation = styled.div`
  color: ${({ theme }) => theme.yellow};
`;

const GallerySwiper = () => (
  <div
    className="swiper-container swiper2"
    style={{
      height: "auto",
      maxHeight: "100%",
      width: "100%",
      position: "relative",
      top: "50%",
      transform: "translateY(-50%)",
    }}
  >
    <div className="swiper-wrapper">
      <img src={img1} alt="img1" className="swiper-slide" />
      <img src={img2} alt="img2" className="swiper-slide " />
      <img src={img3} alt="img3" className="swiper-slide " />
      <img src={img4} alt="img4" className="swiper-slide " />
    </div>
    <SwiperPagination className="swiper-pagination swiper-pagination2" />
    <SwiperNavigation className="swiper-button-next swiper-button-next2" />
    <SwiperNavigation className="swiper-button-prev swiper-button-prev2" />
  </div>
);

export default GallerySwiper;
