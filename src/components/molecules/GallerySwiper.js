import React from "react";
import styled, { keyframes } from "styled-components";
import img1 from "../../images/Gallery/1.jpg";
import img2 from "../../images/Gallery/2.jpg";
import img3 from "../../images/Gallery/3.jpg";

const rightArrowAnimation = keyframes`
  0%{
    right:10px;
  }
  50%{
    right:5px;
  }
  100%{
    right:10px;
  }
`;

const leftArrowAnimation = keyframes`
  0%{
    left:10px;
  }
  50%{
    left:5px;
  }
  100%{
    left:10px;
  }
`;

const SwiperNavigation = styled.div`
  color: ${({ theme }) => theme.primary};
  :hover {
    &.swiper-button-next2 {
      animation: ${rightArrowAnimation} 1s infinite;
    }
    &.swiper-button-prev2 {
      animation: ${leftArrowAnimation} 1s infinite;
    }
  }
`;

const SwiperContainer = styled.div`
  border-radius: 10px;
  width: 50%;
  height: 100%;
  background-color: #000;
  max-height: 80%;
  @media (max-width: 800px) {
    width: 100%;
    height: 65%;
  }
`;

const StyledImage = styled.img`
  object-fit: contain;
`;

const GallerySwiper = () => (
  <SwiperContainer className="swiper-container swiper2">
    <div className="swiper-wrapper">
      <StyledImage
        src={img1}
        alt="img1"
        className="swiper-slide swiper-slide2"
      />
      <StyledImage
        src={img2}
        alt="img2"
        className="swiper-slide swiper-slide2"
      />
      <StyledImage
        src={img3}
        alt="img3"
        className="swiper-slide swiper-slide2"
      />
    </div>
    <SwiperNavigation className="swiper-button-next swiper-button-next2" />
    <SwiperNavigation className="swiper-button-prev swiper-button-prev2" />
  </SwiperContainer>
);

export default GallerySwiper;
