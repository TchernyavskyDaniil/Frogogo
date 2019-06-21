import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkTo = styled(Link)`
  font-size: 16px;
  color: #1e1e3c;
  transition: 0.4s ease color;
  text-decoration: none;
  margin: 6px 0;

  &:hover {
    color: #4ad9bd;
  }
`;

const FooterLink = ({ link = "/", text = "Ссылка" }) => (
  <LinkTo to={link}> {text} </LinkTo>
);

export default FooterLink;
