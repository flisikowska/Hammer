import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
// import pattern from "../../images/tr.png";
import BackgroundImage from "gatsby-background-image";

const StyledBackgroundImage = styled(BackgroundImage)`
  position: absolute !important;
  top: 0;
  transform: scaleX(-1);
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
`;

const Layer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;
const Background = () => {
  const background = useStaticQuery(graphql`
    query {
      image_1920_width: file(relativePath: { eq: "image.jpg" }) {
        childImageSharp {
          fixed(width: 1920, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image_1500_width: file(relativePath: { eq: "image.jpg" }) {
        childImageSharp {
          fixed(width: 1500, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image_1080_width: file(relativePath: { eq: "image.jpg" }) {
        childImageSharp {
          fixed(width: 1080, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image_768_width: file(relativePath: { eq: "image.jpg" }) {
        childImageSharp {
          fixed(width: 768, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const sources = [
    background.image_1920_width.childImageSharp.fixed,
    {
      ...background.image_1500_width.childImageSharp.fixed,
      media: `(max-width: 1500px) and (max-height: 1000px)`,
    },
    {
      ...background.image_1080_width.childImageSharp.fixed,
      media: `(max-width: 1080px) and (max-height: 720px)`,
    },
    {
      ...background.image_768_width.childImageSharp.fixed,
      media: `(max-width: 768px) and (max-height: 512px)`,
    },
  ];
  return (
    <StyledBackgroundImage fixed={sources}>
      <Layer />
    </StyledBackgroundImage>
  );
};

export default Background;
