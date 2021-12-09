import React from "react";
import styled from "styled-components";
import Header from "../atoms/Header";
import Title from "../atoms/Title";
import List from "../atoms/List";

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: Center;
  display: flex;
  padding: 70px;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  @media (max-width: 900px) {
    padding: 70px 30px;
  }
  @media (max-width: 500px) {
    padding: 70px 10px;
  }
`;
const Home = () => (
  <StyledContainer>
    <Title>Hammer</Title>
    <Header text="Firma budowlano-remontowa" />
    <Header style={{ fontWeight: "500" }} text="Krzysztof Znaniecki" />
    <List />
  </StyledContainer>
);

export default Home;
