import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HelpersContainer = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Helper = styled.li`
  margin-right: 35px;
`;

const HelperLink = styled(Link)`
  text-decoration: none;
  color: #8a93a3;
  font-size: 15px;

  &:hover {
    border-bottom: 1px solid #8a93a3;
  }
`;

const Helpers = () => (
  <HelpersContainer>
    <Helper>
      <HelperLink to="/collections"> Коллекции </HelperLink>
    </Helper>
    <Helper>
      <HelperLink to="/faq-score"> Как пополнить счет? </HelperLink>
    </Helper>
    <Helper>
      <HelperLink to="/support"> Поддержка </HelperLink>
    </Helper>
  </HelpersContainer>
);

export default Helpers;
