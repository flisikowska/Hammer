import React from "react";
import styled from "styled-components";
import ListTemplate from "../../templates/ListTemplate";

const ListElement = styled.div`
  padding: 10px;
  width: 25%;
  position: relative;
  :last-child {
    :before {
      display: none;
    }
  }
  :before {
    content: "";
    position: absolute;
    width: 1px;
    height: 40px;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.secondary};
    @media (max-width: 500px) {
      height: 25px;
    }
  }
  > div {
    color: ${({ theme }) => theme.secondary};
    font-size: 1.3vw;
    transition: 0.5s;
    @media (max-width: 1100px) {
      font-size: 1.7vw;
    }
    @media (max-width: 800px) {
      font-size: 2vw;
    }
    @media (max-width: 420px) {
      font-size: 2.3vw;
    }
    @media (max-width: 270px) {
      font-size: 2vw;
    }
  }
  :hover {
    > div {
      color: ${({ theme }) => theme.primary};
      transform: translateY(-20px);
    }
  }
`;

const List = () => (
  <ListTemplate>
    <ListElement>
      <div>Doświadczenie</div>
    </ListElement>
    <ListElement>
      <div>Szeroki zakres prac</div>
    </ListElement>
    <ListElement>
      <div>Nowoczesne rozwiązania</div>
    </ListElement>
    <ListElement>
      <div>Możliwość zakupu i transportu materiałów budowlanych</div>
    </ListElement>
  </ListTemplate>
);
export default List;
