import React from "react";
import styled from "styled-components";
import styledMap from "styled-map";
import DefaultBtn from "../DefaultButton";

const Drop = styled.li``;

const Desc = styled(DefaultBtn)`
  font-size: 14px;
  color: #4ad9bd;
  padding: 0 4px;
  opacity: ${styledMap`
    active: 1;
    default: 0.8;
  `};

  &:hover {
    opacity: ${styledMap`
      active: 0.8;
      default: 0.6;
    `};
  }
`;

const DropItem = ({ title, active, getActive, getIsOpen, isOpen }) => {
  const getNewItem = () => {
    getActive(title);
    getIsOpen(!isOpen);
  };

  return (
    <Drop>
      <Desc active={active === title} onClick={getNewItem}>
        {" "}
        {title}{" "}
      </Desc>
    </Drop>
  );
};

export default DropItem;
