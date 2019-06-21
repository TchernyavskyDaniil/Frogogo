import React from "react";
import styled from "styled-components";

import BasketHeader from "./BasketHeader";
import BasketAbout from "./BasketAbout";

const BIContainer = styled.div`
  border-top: 1px solid #f2f2f2;
  padding: 30px 0;
`;

const BasketItem = ({
  data,
  getSimulateBasket,
  simulateDataBasket,
  getTotalCount,
  totalCount,
  getTotalPrice,
  totalPrice,
  getSimulateGold,
  simulateGoldBasket,
  isGold = false
}) => (
  <BIContainer>
    <BasketHeader
      id={data.id}
      title={data.title}
      getSimulateBasket={getSimulateBasket}
      simulateDataBasket={simulateDataBasket}
      getSimulateGold={getSimulateGold}
      simulateGoldBasket={simulateGoldBasket}
      isGold={isGold}
    />
    <BasketAbout
      priceInfo={data.priceInfo}
      count={data.count}
      title={data.title}
      images={data.images}
      options={data.options}
      isCombo={data.isCombo}
      getTotalCount={getTotalCount}
      totalCount={totalCount}
      getTotalPrice={getTotalPrice}
      totalPrice={totalPrice}
      isGold={isGold}
    />
  </BIContainer>
);

export default BasketItem;
