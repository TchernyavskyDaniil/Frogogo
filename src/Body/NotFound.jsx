import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Desc = styled.span`
  margin: 50px;
  display: block;
  text-align: center;
  font-size: 20px;
  height: 80vh;
`;

const NotFound = () =>
  <>
    <Helmet>
      <title> Страница не найдена </title>
    </Helmet>
    <Desc> Страница не найдена </Desc>
  </>;

export default NotFound;
