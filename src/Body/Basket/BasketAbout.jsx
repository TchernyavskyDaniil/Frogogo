import React, { useState, useEffect } from "react";
import styled from "styled-components";
import styledMap from "styled-map";

import BasketPrices from "./BasketPrices";
import Color from "../../Helpers/Color";

const Info = styled.div`
  margin: 18px 0 10px 0;
  display: flex;
  justify-content: space-between;
`;

const ItemContainer = styled.div`
  display: flex;
`;

const ImageItem = styled.img`
  width: 100px;
  height: 100px;
  margin-right: ${styledMap`
    default: 20px;
    few: 30px;
  `};
`;

const ImageContainer = styled.div`
  position: relative;

  &:not(:first-child):before {
    content: ${styledMap`
      default: none;
      few: '';
    `};
    position: absolute;
    background-image: url("./assets/svg/icon-amount-plus-action.svg");
    width: 15px;
    height: 15px;
    top: 50%;
    left: -16px;
    transform: translate(-50%, -50%);
  }
`;

const ItemDesc = styled.div``;

const AboutItem = styled.div`
  display: flex;
`;

const Desc = styled.span`
  font-size: 15px;
  color: #8a93a3;
  margin-right: 15px;
`;

const Size = styled.span``;

const CountContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BtnMath = styled.button`
  border: transparent;
  background-color: transparent;
  width: 16px;
  height: 16px;
  transition: 0.5s ease;
  cursor: pointer;
`;

const Minus = styled(BtnMath)`
  background-image: url("./assets/svg/icon-amount-minus.svg");
  margin-right: 10px;

  &:hover {
    background-image: url("./assets/svg/icon-amount-minus-action.svg");
  }
`;

const Plus = styled(BtnMath)`
  background-image: url("./assets/svg/icon-amount-plus.svg");
  margin-left: 10px;

  &:hover {
    background-image: url("./assets/svg/icon-amount-plus-action.svg");
  }
`;

const Count = styled.span`
  font-size: 27px;
  color: #1e1e3c;
`;

const BasketAbout = ({
  priceInfo,
  count,
  images,
  options,
  isCombo,
  title,
  isGold = false,
  totalCount,
  getTotalCount,
  getTotalPrice,
  totalPrice
}) => {
  const [localCount, getCount] = useState(1);

  useEffect(() => {
    count && getCount(count);
  }, [count]);

  return (
    <Info>
      <ItemContainer>
        {isCombo ? (
          images.map((image, index) => (
            <ImageContainer key={index} few>
              <ImageItem few src={image} alt={title} />
            </ImageContainer>
          ))
        ) : (
          <>
            <ImageItem src={images && images[0]} alt={title} />
            {!isGold && (
              <ItemDesc>
                <AboutItem>
                  {options && (
                    <>
                      <Desc> {options.title} </Desc>
                      {options.isColor && <Color color={options.color} />}
                      {options.isSize && <Size> {options.size} </Size>}
                    </>
                  )}
                </AboutItem>
                <CountContainer>
                  {localCount > 1 && (
                    <Minus
                      onClick={() => {
                        getCount(localCount - 1);
                        getTotalCount(totalCount - 1);
                        getTotalPrice(totalPrice - priceInfo.fullPrice);
                      }}
                      title="Убрать одно значение"
                    />
                  )}
                  <Count> {localCount} </Count>
                  <Plus
                    onClick={() => {
                      getCount(localCount + 1);
                      getTotalCount(totalCount + 1);
                      getTotalPrice(totalPrice + +priceInfo.fullPrice);
                    }}
                    title="Добавить одно значение"
                  />
                </CountContainer>
              </ItemDesc>
            )}
          </>
        )}
      </ItemContainer>
      <BasketPrices priceInfo={priceInfo} isGold={isGold} count={localCount} />
    </Info>
  );
};

export default BasketAbout;
