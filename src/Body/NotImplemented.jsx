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

const NotImplemented = ({ text }) => (
  <>
    <Helmet>
      <title>{text}</title>
    </Helmet>
    <Desc> {text} находится в разработке </Desc>
  </>
);

export default NotImplemented;
