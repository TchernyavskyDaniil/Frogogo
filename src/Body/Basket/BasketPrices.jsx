import React from "react";
import styled from "styled-components";

import BasketPrice from "./BasketPrice";
import GoldStatus from "../../Helpers/GoldStatus";

const Prices = styled.div`
  text-align: right;
`;

const PriceFreeContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 17px;
`;

const PriceFree = styled.span``;

const BasketPrices = ({ priceInfo, count, isGold = false }) => (
  <Prices>
    {priceInfo && !isGold ? (
      <>
        <BasketPrice
          count={count}
          price={priceInfo.fullPrice}
          title="Полная цена"
          isFull
        />
        <BasketPrice
          price={priceInfo.priceFromAccount}
          title="Можно оплатить с личного счета"
        />
        <BasketPrice
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
  </Prices>
);

export default BasketPrices;
