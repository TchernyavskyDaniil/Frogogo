import React, { useEffect, useState } from "react";
import styled from "styled-components";
import styledMap from "styled-map";

import { colors } from "../../styles";

import TotalPrice from "../../Helpers/TotalPrice";
import GoldStatus from "../../Helpers/GoldStatus";

const BSContainer = styled.div`
  margin-top: 60px;
  padding: 30px;
  border: 1px solid #eceff4;
  border-bottom: transparent;
`;

const SendTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #eceff4;
`;

const SendDesc = styled.span`
  font-size: 17px;
  color: ${colors.blueGray};
`;

const SendStatus = styled.span`
  font-size: 20px;
  color: #4ad9bd;
`;

const TotalSend = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
`;

const Desc = styled.span`
  font-size: 17px;

  color: ${styledMap`
    default: #1e1e3c;
    isGold: ${colors.orangeYellow};
    isDisc: #4ad9bd;
  `};

  margin-right: ${styledMap`
    default: 0;
    isGold: 4px;
  `};
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BasketSend = ({ totalPrice, getTotalPrice }) => {
  const [isLowCost, getStateCost] = useState(false);

  useEffect(() => {
    if (!isLowCost && totalPrice < 1000) {
      getTotalPrice(totalPrice + 299);
      getStateCost(true);
    } else if (isLowCost && totalPrice >= 1000) {
      getTotalPrice(totalPrice - 299);
      getStateCost(false);
    } else {
      getTotalPrice(totalPrice);
    }
  }, [totalPrice]);

  return (
    <BSContainer>
      <SendTitle>
        <SendDesc> Доставка </SendDesc>
        <SendStatus>
          {" "}
          {totalPrice > 1000 ? "Бесплатно" : "Стоимость доставки 299 ₽"}{" "}
        </SendStatus>
      </SendTitle>
      <TotalSend>
        <Desc>Итоговая стоимость</Desc>
        <TotalPrice isFull price={totalPrice} />
      </TotalSend>
      <TotalSend>
        <Container>
          <Desc isGold>+ 20% на личный счет от</Desc>
          <GoldStatus isBasket noMargin title="GOLD статуса" />
        </Container>
        <TotalPrice isGold price={(totalPrice * 20) / 100} />
      </TotalSend>
      <TotalSend>
        <Desc isDisc>На личный счет вернется</Desc>
        <TotalPrice price="9696" />
      </TotalSend>
    </BSContainer>
  );
};

export default BasketSend;
