import React from "react";
import styled from "styled-components";

import Dropdown from "../Helpers/Dropdown";
import { getPublicUrl } from "../utils";

const RegionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconLocation = styled.img`
  width: 10px;
  height: 10px;
`;

const Region = () => (
  <RegionContainer>
    <IconLocation
      src={getPublicUrl("/assets/svg/icon-location-header.svg")}
      alt="Локация"
    />
    <Dropdown
      desc="Регион доставки"
      list={["Москва", "Краснодар", "Реактландия"]}
    />
  </RegionContainer>
);

export default Region;
