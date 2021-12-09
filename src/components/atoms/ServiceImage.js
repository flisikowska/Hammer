import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 500px;
  height: 450px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const ServiceImage = ({ image, alt }) => {
  return <StyledImage alt={alt} src={image} />;
};

export default ServiceImage;
