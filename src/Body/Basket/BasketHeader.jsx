import React from "react";
import styled from "styled-components";

import { getPublicUrl } from "../../utils";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: #1e1e3c;
  margin: 0;
`;

const Delete = styled.button`
  border: transparent;
  background-color: transparent;
  cursor: pointer;
`;

const IconTrash = styled.img`
  transition: 0.4s ease opacity;

  &:hover {
    opacity: 0.7;
  }
`;

const BasketHeader = ({
  title,
  getSimulateBasket,
  id,
  simulateDataBasket,
  isGold,
  getSimulateGold,
  simulateGoldBasket
}) => {
  const getDeleteAction = () => {
    if (isGold) {
      getSimulateGold &&
        getSimulateGold(simulateGoldBasket.filter(el => el.id !== id));
    } else {
      simulateDataBasket &&
        getSimulateBasket(simulateDataBasket.filter(el => el.id !== id));
    }
  };

  // Не стал делать логику удаления, тк это лучше делать с беком на мой взгляд
  // Хотя как и большую часть
  return (
    <Header>
      <Title> {title || "Название товара"} </Title>
      <Delete onClick={getDeleteAction}>
        <IconTrash
          src={getPublicUrl("/assets/svg/icon-cart-trash.svg")}
          alt="Удалить товар"
          title="Удалить товар"
        />
      </Delete>
    </Header>
  );
};

export default BasketHeader;
