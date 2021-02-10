import React from "react";
import styled from "styled-components";
import SectionTemplate from "../../templates/SectionTemplate";
import Header from "../atoms/Header";
import Title from "../atoms/Title";
import ContactInfo from "../atoms/ContactInfo";
import List from "../atoms/List";

const StyledContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px;
  grid-template-areas:
    "title title"
    "list contact";
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "title"
      "contact"
      "list";
  }
`;
const Home = () => (
  <SectionTemplate first="first">
    <StyledContainer>
      <div style={{ gridArea: "title" }}>
        <Title>Hammer</Title>
        <Header text="Firma budowlano-remontowa" />
        <Header
          style={{
            fontWeight: "500",
            marginTop: "7px",
          }}
          text="Krzysztof Znaniecki"
        />
      </div>
      <List style={{ gridArea: "list" }} />
      <ContactInfo style={{ gridArea: "contact" }} />
    </StyledContainer>
  </SectionTemplate>
);

export default Home;
