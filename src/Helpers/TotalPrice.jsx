import React from "react";
import styled from "styled-components";
import styledMap from "styled-map";

import { colors } from "../styles";

const PriceNumber = styled.span`
  font-size: 20px;
  margin-left: 10px;
  font-weight: 600;

  color: ${styledMap`
    isFull: #1e1e3c;
    isGold: ${colors.orangeYellow};
    default: #4ad9bd;
  `};
`;

const TotalPrice = ({ count = 1, price, isFull = false, isGold = false }) => (
  <PriceNumber isFull={isFull} isGold={isGold}>
    {" "}
    {(count * Number(price)).toLocaleString()} ₽
  </PriceNumber>
);

export default TotalPrice;
