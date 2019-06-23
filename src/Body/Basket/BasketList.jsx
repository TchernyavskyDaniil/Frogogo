import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import BasketItem from "./Item";
import BasketTotal from "./BasketTotal";
import BasketSend from "./BasketSend";
import Preloader from "../../Helpers/Preloader";

// Mocks
import { basketMock } from "./mock";

const EmptyBasket = styled.span`
  font-size: 20px;
  margin: 40px;
`;

const BLContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 400px;
  width: 60%;
`;

const LinkToMaking = styled(Link)`
  background-color: #4ad9bd;
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 14px;
  font-weight: 600;
  // По макету 14, но на вид не 14
  font-size: 18px;
  transition: 0.4s ease opacity;

  &:hover {
    opacity: 0.8;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const BasketList = ({ isSimulateClear }) => {
  const [simulateDataBasket, getSimulateBasket] = useState([]);
  const [simulateGoldBasket, getSimulateGold] = useState([]);
  const [simulateIsLoad, getLoadState] = useState(false);

  const [totalCount, getTotalCount] = useState(0);
  const [totalPrice, getTotalPrice] = useState(0);

  // Did mount
  useEffect(() => {
    if (basketMock) {
      getSimulateBasket(basketMock.withPrice);
      getSimulateGold(basketMock.withGoldStatus);

      getTotalCount(basketMock.count);
      getTotalPrice(basketMock.price);
    }

    if (basketMock.withPrice.length || basketMock.withGoldStatus.length) {
      getLoadState(true);
    }
  }, []);

  useEffect(() => {
    if (isSimulateClear) {
      getSimulateBasket([]);
      getSimulateGold([]);
    }
  }, [isSimulateClear]);

  const deleteCurrentItem = (
    currentId,
    isGold = false,
    localCount = 1,
    price = 0
  ) => {
    if (isGold) {
      getSimulateGold(simulateGoldBasket.filter(el => el.id !== currentId));
    } else {
      getSimulateBasket(simulateDataBasket.filter(el => el.id !== currentId));
      getTotalPrice(totalPrice - +price * localCount);
    }

    getTotalCount(totalCount - localCount);
  };

  const getArrBasket = (data, isGold = false) =>
    data.map(item => (
      <BasketItem
        key={item.id}
        data={item}
        getTotalCount={getTotalCount}
        totalCount={totalCount}
        getTotalPrice={getTotalPrice}
        totalPrice={totalPrice}
        deleteCurrentItem={deleteCurrentItem}
        isGold={isGold}
      />
    ));

  const dataBasket = useMemo(() => getArrBasket(simulateDataBasket, false), [
    totalPrice,
    totalCount
  ]);
  const dataGoldBasket = useMemo(() => getArrBasket(simulateGoldBasket, true), [
    totalPrice,
    totalCount
  ]);

  return simulateIsLoad ? (
    simulateDataBasket.length || simulateGoldBasket.length ? (
      <BLContainer>
        <List>
          {dataBasket}
          {dataGoldBasket}
        </List>
        {totalPrice > 0 && (
          <>
            <BasketTotal
              count={totalCount}
              currentPrice={totalPrice}
              getTotalPrice={getTotalPrice}
            />
            <BasketSend totalPrice={totalPrice} getTotalPrice={getTotalPrice} />
            <LinkToMaking to="/calculating">
              {" "}
              Перейти к оформлению{" "}
            </LinkToMaking>
          </>
        )}
      </BLContainer>
    ) : (
      <EmptyBasket> Ваша корзина пуста </EmptyBasket>
    )
  ) : (
    <Preloader />
  );
};

export default BasketList;
