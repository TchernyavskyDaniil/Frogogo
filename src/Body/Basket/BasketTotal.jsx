import React, { useState } from "react";
import styled from "styled-components";
import styledMap from "styled-map";

import TotalPrice from "../../Helpers/TotalPrice";

import { getDeclensions } from "../../utils";

import { colors } from "../../styles";

const BTContainer = styled.div`
  border-top: 1px solid ${colors.baseGray};
  padding-top: 60px;
`;

const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const CountItems = styled.span`
  color: ${styledMap`
    default: #4ad9bd;
    isFull: #1e1e3c;  
  `};
`;

const TotalFromUser = styled(Total)``;

const RangeContainer = styled.div``;

const RangeDesc = styled.p`
  margin: 0;
  padding: 0;
`;

const Range = styled.div`
  width: 100%;
  margin-top: 28px;
`;

const RangeInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-size: 100%;
    background: #4ad9bd url("./assets/svg/slider-knob.svg") center;
    border-color: #4ad9bd;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-size: 100%;
    background: #4ad9bd url("./assets/svg/slider-knob.svg") center;
    border-color: #4ad9bd;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    background-color: #eceff4;
  }

  &::-moz-range-progress {
    background-color: #4ad9bd;
  }

  &::-moz-range-track {
    background-color: #eceff4;
  }

  &::-ms-fill-lower {
    background-color: #43e5f7;
  }

  &::-ms-fill-upper {
    background-color: #9a905d;
  }
`;

const Values = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-direction: row;
`;

const From = styled.span`
  font-size: 20px;
  color: #c6cdd7;
`;

const To = styled(From)``;

const BasketTotal = ({ currentPrice, count, getTotalPrice }) => {
  const [discount, getDiscount] = useState(0);

  const getNewPrice = e => {
    const value = Number(e.target.value);

    if (currentPrice - value > 0) {
      getTotalPrice(currentPrice - value);
    }
  };

  return (
    <BTContainer>
      <Total>
        <CountItems isFull>
          {" "}
          {getDeclensions(count, "товар", "на сумму")}{" "}
        </CountItems>
        <TotalPrice isFull price={currentPrice} />
      </Total>
      <TotalFromUser>
        <CountItems> Используется рублей с личного счета </CountItems>
        <TotalPrice price={discount} />
      </TotalFromUser>
      <RangeContainer>
        <RangeDesc>
          {" "}
          Передвигая лягушку, выберите сколько рублей с личного счета вы хотите
          потратить{" "}
        </RangeDesc>
        <Range>
          <Values>
            <From> 0 ₽ </From>
            <To> 1 000 ₽ </To>
          </Values>
          <RangeInput
            onChange={e => getDiscount(+e.target.value)}
            onMouseUp={getNewPrice}
            type="range"
            min="0"
            max="1000"
            value={discount}
          />
        </Range>
      </RangeContainer>
    </BTContainer>
  );
};

export default BasketTotal;
