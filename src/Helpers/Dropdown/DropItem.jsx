import React from "react";
import styled from "styled-components";
import styledMap from "styled-map";

const Drop = styled.li``;

const Desc = styled.button`
  font-size: 14px;
  color: #4ad9bd;
  border: transparent;
  background-color: transparent;
  padding: 0 4px;
  cursor: pointer;
  transition: 0.4s ease opacity;
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
