import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Region from "./Region";
import UserOptions from "./UserOptions";
import Helpers from "./Helpers";
import BasketInfo from "./BasketInfo";
import { getPublicUrl } from "../utils";

const HeaderContainer = styled.header`
  background-color: #f9fafb;
  padding: 2% 6%;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AppDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const FrogogoLogo = styled.img`
  width: 170px;
  height: 40px;
`;

const ToMain = styled(Link)``;

const Header = () => (
  <HeaderContainer>
    <UserDetails>
      <Region />
      <UserOptions />
    </UserDetails>
    <AppDetails>
      <ToMain to="/">
        <FrogogoLogo
          src={getPublicUrl("/assets/svg/logo-frogogo-header.svg")}
          alt="Frogogo"
        />
      </ToMain>
      <Helpers />
      <BasketInfo />
    </AppDetails>
  </HeaderContainer>
);

export default Header;
