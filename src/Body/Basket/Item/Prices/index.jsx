import React from "react";
import styled from "styled-components";

import Price from "./Price";
import GoldStatus from "../../../../Helpers/GoldStatus";

const PricesContainer = styled.div`
  text-align: right;
`;

const PriceFreeContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 17px;
`;

const PriceFree = styled.span``;

const Prices = ({ priceInfo, count, isGold = false }) => (
  <PricesContainer>
    {priceInfo && !isGold ? (
      <>
        <Price
          count={count}
          price={priceInfo.fullPrice}
          title="Полная цена"
          isFull
        />
        <Price
          price={priceInfo.priceFromAccount}
          title="Можно оплатить с личного счета"
        />
        <Price
          price={priceInfo.minPriceFromAccount}
          title="Минимально к оплате с личного счета"
        />
      </>
    ) : (
      <PriceFreeContainer>
        <PriceFree> Подарок от </PriceFree>
        <GoldStatus isBasket title="GOLD статуса" />
      </PriceFreeContainer>
    )}
  </PricesContainer>
);

export default Prices;
