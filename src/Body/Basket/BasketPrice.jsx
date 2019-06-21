import React from "react";
import styled from "styled-components";
import styledMap from "styled-map";
import TotalPrice from "../../Helpers/TotalPrice";

const Price = styled.div`
  margin-bottom: 10px;
`;

const PriceDesc = styled.span`
  font-size: 13px;

  color: ${styledMap`
    isFull: #8a93a3;
    default: #4ad9bd
  `};
`;

const BasketPrice = ({ price, title, isFull = false, count = 1 }) =>
  price && (
    <Price>
      <PriceDesc isFull={isFull}> {title} </PriceDesc>
      <TotalPrice isFull={isFull} count={count} price={price} />
    </Price>
  );

export default BasketPrice;
