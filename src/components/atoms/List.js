import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  align-self: end;
  margin: 0;
`;

const ListElement = styled.li`
  cursor: default;
  position: relative;
  font-size: 2.5vw;
  margin: 15px 0;
  color: white;
  transition: 3s;
  @media (max-width: 900px) {
    font-size: 4vw;
  }
  :last-child {
    margin-bottom: 0;
  }
  :hover {
    left: 50px;
  }
`;

const List = ({ style }) => (
  <StyledList style={style}>
    <ListElement>Doświadczenie</ListElement>
    <ListElement>Szeroki zakres prac</ListElement>
    <ListElement>Nowoczesne rozwiązania</ListElement>
    <ListElement>
      Możliwość zakupu i transportu <br /> materiałów budowlanych
    </ListElement>
  </StyledList>
);
export default List;
