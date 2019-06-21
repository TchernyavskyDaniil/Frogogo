import React from "react";
import styled from "styled-components";

import Dropdown from "../../Helpers/Dropdown";
import Promo from "../../Helpers/Promo";
import GoldStatus from "../../Helpers/GoldStatus";

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UserOptions = () => {
  return (
    <UserContainer>
      <Promo />
      <GoldStatus title="GOLD статус - Выберите ПОДАРОК!" />
      <Dropdown desc="Ваш счет" list={["1000", "777", "123", "9999999999"]} />
    </UserContainer>
  );
};

export default UserOptions;
