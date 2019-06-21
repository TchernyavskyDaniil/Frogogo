import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import BasketItem from "./BasketItem";

// Mocks
import { basketMock, basketGold } from "./mock";
import BasketTotal from "./BasketTotal";
import BasketSend from "./BasketSend";

const BLContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const BasketList = () => {
  const [simulateDataBasket, getSimulateBasket] = useState([]);
  const [simulateGoldBasket, getSimulateGold] = useState([]);

  const [totalCount, getTotalCount] = useState(0);
  const [totalPrice, getTotalPrice] = useState(0);

  // Did mount
  useEffect(() => {
    if (basketMock) {
      let localCount = totalCount;
      let localPrice = totalPrice;

      getSimulateBasket(basketMock);

      basketMock.forEach(({ count, priceInfo: { fullPrice } }) => {
        localCount = localCount + +count;
        localPrice = localPrice + +fullPrice;
      });

      getTotalCount(localCount);
      getTotalPrice(localPrice);
    }

    if (basketGold) {
      getSimulateGold(basketGold);
    }
  }, []);

  return (
    <BLContainer>
      {/* Если && => 0 */}
      {simulateDataBasket.length
        ? simulateDataBasket.map(item => (
            <BasketItem
              key={item.id}
              data={item}
              simulateDataBasket={simulateDataBasket}
              getSimulateBasket={getSimulateBasket}
              getTotalCount={getTotalCount}
              totalCount={totalCount}
              getTotalPrice={getTotalPrice}
              totalPrice={totalPrice}
            />
          ))
        : null}
      {simulateGoldBasket.length
        ? simulateGoldBasket.map(item => (
            <BasketItem
              key={item.id}
              data={item}
              isGold
              getSimulateGold={getSimulateGold}
              simulateGoldBasket={simulateGoldBasket}
            />
          ))
        : null}
      {totalPrice > 0 && (
        <>
          <BasketTotal
            count={totalCount}
            currentPrice={totalPrice}
            getTotalPrice={getTotalPrice}
          />
          <BasketSend totalPrice={totalPrice} getTotalPrice={getTotalPrice} />
          <LinkToMaking to="/calculating"> Перейти к оформлению </LinkToMaking>
        </>
      )}
    </BLContainer>
  );
};

export default BasketList;
