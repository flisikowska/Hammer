import React from "react";
import styled from "styled-components";

const StyledList = styled.div`
  width: 80%;
  height: 150px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  text-align: center;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.secondary};
  cursor: default;
  &.secondary {
    width: 97%;
    /* margin: 0 1.5%; */
    background-color: #fff;
    @media (max-width: 750px) {
      height: 100px;
    }
  }
  @media (max-width: 1000px) {
    margin-top: 30px;
    width: 100%;
  }
`;

const ListTemplate = ({ children, secondary }) => (
  <StyledList className={secondary}>{children}</StyledList>
);

export default ListTemplate;
