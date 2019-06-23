import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import styledMap from "styled-map";

import DropItem from "./DropItem";

import { getPublicUrl } from "../../utils";
import { colors } from "../../styles";
import DefaultBtn from "../DefaultButton";

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6px;
`;

const Title = styled.span`
  font-size: 14px;
  color: ${colors.blueGray};
  font-weight: 300;
`;

// Сделал чтобы визуально список был виден на фоне
const DropList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  background-color: ${colors.baseGray};
  width: auto;
  z-index: 1000;
`;

const IconArr = styled.img`
  width: 8px;
  height: 8px;
  transition: 0.4s ease transform;
  padding-top: 2px;

  transform: ${styledMap`
    open: rotate(180deg);
    default: rotate(0deg);
  `};
`;

const Current = styled(DefaultBtn)`
  font-size: 14px;
  color: #4ad9bd;
  padding: 0 4px;
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ListContainer = styled.div`
  position: relative;
`;

const Dropdown = ({ desc, list }) => {
  const wrapperRef = useRef(null);

  const [isOpen, getIsOpen] = useState(false);
  const [isOutside, getIsOutside] = useState(false);
  const [active, getActive] = useState("");

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      getIsOutside(false);
      getIsOpen(false);
    } else {
      getIsOutside(true);
    }
  };

  useEffect(() => {
    if (list[0]) getActive(list[0]);
  }, [list]);

  return (
    <DropdownContainer>
      <Title> {desc}: </Title>
      <ListContainer ref={wrapperRef}>
        <Current onClick={() => getIsOpen(!isOpen)}> {active} </Current>
        {isOpen && isOutside && list.length && (
          <DropList>
            {list.map((title, index) => (
              <DropItem
                key={index}
                title={title}
                active={active}
                getActive={getActive}
                getIsOpen={getIsOpen}
                isOpen={isOpen}
              />
            ))}
          </DropList>
        )}
      </ListContainer>
      {/* При && будет 0 в случае false */}
      {active.length ? (
        <IconArr
          src={getPublicUrl("/assets/svg/icon-header-arr-down.svg")}
          open={isOpen}
          alt="Показать все"
        />
      ) : null}
    </DropdownContainer>
  );
};

export default Dropdown;
