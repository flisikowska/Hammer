import React from "react";
import styled from "styled-components";
import ShowMoreText from "react-show-more-text";
import { ResizeGridItems } from "../../helpers/functions";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledTitle = styled.div`
  cursor: default;
  color: black;
  font-weight: 600;
  text-align: center;
  overflow: hidden;
  font-size: 1.4em;
  @media (max-width: 400px) {
    font-size: 8vw;
  }
`;

const StyledSubtitle = styled.div`
  cursor: default;
  color: #000;
  font-weight: 400;
  text-align: center;
  overflow: hidden;
  font-size: 1.2em;
  @media (max-width: 400px) {
    font-size: 8vw;
  }
`;

const StyledShowMoreText = styled(ShowMoreText)`
  cursor: default;
  color: black;
  font-weight: 300;
  width: 100%;
  margin-top: 10px;
  text-align: justify;
  text-align-last: center;

  font-size: 0.8em;
  @media (max-width: 400px) {
    font-size: 4vw;
  }
  a {
    color: #000;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    :hover {
      font-weight: 500;
    }
  }
`;

const ProductDescription = ({ title, subtitle, description }) => {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledShowMoreText
        lines={4}
        more="Pokaż więcej"
        less="Ukryj"
        onClick={ResizeGridItems}
      >
        {description}
      </StyledShowMoreText>
    </StyledWrapper>
  );
};

export default ProductDescription;
