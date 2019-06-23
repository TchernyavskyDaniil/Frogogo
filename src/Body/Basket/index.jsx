import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import BasketTitle from "./BasketTitle";
import BasketList from "./BasketList";
import BasketSlider from "./BasketSlider";

const BasketContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
`;

const Basket = () => {
  const [isSimulateClear, getSimulateClear] = useState(false);
  return (
    <BasketContainer>
      <Helmet>
        <title> Корзина </title>
      </Helmet>
      <BasketTitle
        getSimulateClear={getSimulateClear}
        isSimulateClear={isSimulateClear}
      />
      <BasketList isSimulateClear={isSimulateClear} />
      <BasketSlider />
    </BasketContainer>
  );
};

export default Basket;
