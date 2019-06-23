import React from "react";
import styled from "styled-components";
import styledMap from "styled-map";

import Prices from "./Prices";
import Color from "../../../Helpers/Color";

import { colors } from "../../../styles";
import DefaultBtn from "../../../Helpers/DefaultButton";

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

const DescContainer = styled.div`
  display: flex;
`;

const Desc = styled.span`
  font-size: 15px;
  color: ${colors.blueGray};
  margin-right: 15px;
`;

const Size = styled.span``;

const CountContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BtnMath = styled(DefaultBtn)`
  width: 16px;
  height: 16px;
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

const AboutItem = ({
  data: { priceInfo, images, options, isCombo, title },
  countOfItem,
  changeCount,
  isGold = false
}) => (
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
              <DescContainer>
                {options && (
                  <>
                    <Desc> {options.title} </Desc>
                    {options.isColor && <Color color={options.color} />}
                    {options.isSize && <Size> {options.size} </Size>}
                  </>
                )}
              </DescContainer>
              <CountContainer>
                <Minus
                  onClick={() => changeCount(false)}
                  title="Убрать одно значение"
                />
                <Count> {countOfItem} </Count>
                <Plus
                  onClick={() => changeCount(true)}
                  title="Добавить одно значение"
                />
              </CountContainer>
            </ItemDesc>
          )}
        </>
      )}
    </ItemContainer>
    <Prices priceInfo={priceInfo} isGold={isGold} count={countOfItem} />
  </Info>
);

export default AboutItem;
