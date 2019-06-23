import React from "react";
import styled from "styled-components";

import DefaultBtn from "../../../Helpers/DefaultButton";

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

const Delete = styled(DefaultBtn)`
  background-image: url("./assets/svg/icon-cart-trash.svg");
  padding: 10px;

  &:hover {
    opacity: 1;
    background-image: url("./assets/svg/icon-cart-trash-action.svg");
  }
`;

const ItemHeader = ({
  title,
  id,
  isGold,
  deleteCurrentItem,
  countOfItem,
  price = 0
}) => (
  <Header>
    <Title> {title || "Название товара"} </Title>
    <Delete
      onClick={() => deleteCurrentItem(id, isGold, countOfItem, price)}
      alt="Удалить товар"
      title="Удалить товар"
    />
  </Header>
);

export default ItemHeader;
