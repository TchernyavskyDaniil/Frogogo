import React from "react";
import styled from "styled-components";
import styledMap from "styled-map";

import TotalPrice from "../../../../Helpers/TotalPrice";

import { colors } from "../../../../styles";

const PriceContainer = styled.div`
  margin-bottom: 10px;
`;

const PriceDesc = styled.span`
  font-size: 13px;

  color: ${styledMap`
    isFull: ${colors.blueGray};
    default: #4ad9bd
  `};
`;

const Price = ({ price, title, isFull = false, count = 1 }) =>
  price && (
    <PriceContainer>
      <PriceDesc isFull={isFull}> {title} </PriceDesc>
      <TotalPrice isFull={isFull} count={count} price={price} />
    </PriceContainer>
  );

export default Price;
