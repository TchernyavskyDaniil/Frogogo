import React from "react";
import styled from "styled-components";

import { colors } from "../../styles";
import DefaultBtn from "../../Helpers/DefaultButton";

const BTContainer = styled.div`
  display: flex;
  margin-bottom: 60px;
  width: 60%;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #1e1e3c;
  font-weight: 400;
  margin: 0;
`;

const ClearBasket = styled(DefaultBtn)`
  margin-left: 30px;
  padding-top: 6px;
  font-size: 16px;
  color: ${colors.peachyPink};
  border: transparent;
  background-color: transparent;
  cursor: pointer;
  transition: 0.4s ease opacity;

  &:hover {
    opacity: 0.8;
  }
`;

const BasketTitle = ({ getSimulateClear, isSimulateClear }) => (
  <BTContainer>
    <Title> Вот что в Вашей корзине </Title>
    {!isSimulateClear && (
      <ClearBasket onClick={() => getSimulateClear(true)}>
        {" "}
        Очистить корзину{" "}
      </ClearBasket>
    )}
  </BTContainer>
);

export default BasketTitle;
