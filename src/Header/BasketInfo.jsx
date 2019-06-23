import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getPublicUrl } from "../utils";
import { colors } from "../styles";

const BasketContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.4s ease opacity;

  &:hover {
    opacity: 0.8;
  }
`;

const BasketIcon = styled.img``;

const IconWrapper = styled.div`
  position: relative;
  margin-right: 9px;
`;

const Count = styled.span`
  position: absolute;
  background-color: ${colors.peachyPink};
  font-size: 12px;
  color: white;
  padding: 2px 6px;
  display: inline-flex;
  border-radius: 20px;
  right: -8px;
  top: -5px;
`;

const Desc = styled(Link)`
  font-size: 14px;
  color: ${colors.blueGray};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const BasketInfo = () => (
  <BasketContainer>
    <IconWrapper>
      <BasketIcon
        src={getPublicUrl("/assets/svg/icon-cart-header.svg")}
        alt="Корзина"
      />
      <Count> 5 </Count>
    </IconWrapper>
    <Desc to="/basket"> Корзина </Desc>
  </BasketContainer>
);

export default BasketInfo;
