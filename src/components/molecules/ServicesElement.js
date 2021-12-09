import React from "react";
import styled from "styled-components";
import ServiceDescription from "../atoms/ServiceDescription";
import ServiceImage from "../atoms/ServiceImage";

const StyledContainer = styled.div`
  border-radius: 10px;
  width: 500px;
  text-align: center;
  /* margin: 0 20px; */
  background-color: #eee;
  min-height: 400px;
  background-position: center;
  background-size: cover;
  transition: opacity 2s;
  opacity: 0.2;
  &.swiper-slide-active {
    opacity: 1;
  }
  :hover {
    opacity: 1;
  }
`;

const ServicesElement = ({
  className,
  title,
  subtitle,
  description,
  img,
  onClick,
}) => (
  <StyledContainer onClick={onClick} className={className}>
    <ServiceImage image={img} alt={title} />
    <ServiceDescription
      title={title}
      subtitle={subtitle}
      description={description}
    />
  </StyledContainer>
);

export default ServicesElement;
