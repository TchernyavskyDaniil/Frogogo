import React from "react";
import styled from "styled-components";

const ColorStyle = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  margin-top: 2px;
  border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
  transform: rotate(-45deg);
`;

const Color = ({ color }) => <ColorStyle style={{ backgroundColor: color }} />;

export default Color;
