import React from "react";
import styled from "styled-components";
import styledMap from "styled-map";

import { getPublicUrl } from "../utils";

const GSContainer = styled.div`
  margin: ${styledMap`
    default: 0 12px;
    noMargin: 0;
  `};
`;

const GSIcon = styled.img`
  width: 10px;
  height: 10px;
`;

const Desc = styled.span`
  font-size: ${styledMap`
    default: 14px;
    isBasket: 17px;
  `};
  color: #ffa000;
`;

const GoldStatus = ({ title, isBasket = false, noMargin = false }) => {
  return (
    <GSContainer noMargin={noMargin}>
      <GSIcon
        src={getPublicUrl("/assets/svg/icon-gold-header.svg")}
        alt="Gold Status"
      />
      <Desc isBasket={isBasket}> {title} </Desc>
    </GSContainer>
  );
};

export default GoldStatus;
