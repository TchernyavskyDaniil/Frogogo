import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import ItemHeader from "./ItemHeader";
import AboutItem from "./AboutItem";

import { colors } from "../../../styles";

const BIContainer = styled.li`
  border-top: 1px solid ${colors.baseGray};
  padding: 30px 0;
`;

const BasketItem = ({
  data,
  data: { id, count, priceInfo },
  getTotalCount,
  totalCount,
  getTotalPrice,
  totalPrice,
  isGold = false,
  deleteCurrentItem
}) => {
  const [countOfItem, getCountItem] = useState(null);

  useEffect(() => {
    count && getCountItem(count);
  }, [count]);

  const totalCallback = useCallback(
    (count, price) => {
      getTotalCount(count);
      getTotalPrice(price);
    },
    [getTotalCount, getTotalPrice]
  );

  const changeCount = isSum => {
    let count = 0;
    let price = 0;

    if (!isSum && countOfItem - 1 === 0) {
      deleteCurrentItem(id, isGold, countOfItem, priceInfo.fullPrice);
    }

    if (isSum) {
      getCountItem(countOfItem + 1);
      count = totalCount + 1;
      price = totalPrice + +priceInfo.fullPrice;
    } else {
      getCountItem(countOfItem - 1);
      count = totalCount - 1;
      price = totalPrice - +priceInfo.fullPrice;
    }

    totalCallback(count, price);
  };

  return (
    <BIContainer>
      <ItemHeader
        id={data.id}
        title={data.title}
        isGold={isGold}
        countOfItem={countOfItem}
        price={!isGold && priceInfo.fullPrice}
        deleteCurrentItem={deleteCurrentItem}
      />
      <AboutItem
        data={data}
        isGold={isGold}
        countOfItem={countOfItem}
        changeCount={changeCount}
      />
    </BIContainer>
  );
};

export default BasketItem;
