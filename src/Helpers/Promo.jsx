import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { getPublicUrl } from "../utils";
import { colors } from "../styles";

const PromoContainer = styled.div`
  margin: 0 12px;
  cursor: pointer;
  transition: 0.4s ease opacity;
  min-height: 20px;

  &:hover {
    opacity: 0.8;
  }
`;

const IconPromo = styled.img`
  width: 15px;
  height: 10px;
`;

const Desc = styled.span`
  font-size: 14px;
  color: ${colors.peachyPink};
`;

const Input = styled.input`
  border: transparent;
  background-color: transparent;
  border-bottom: 1px solid ${colors.peachyPink};
  margin-left: 6px;
  font-size: 14px;
  line-height: 14px;
  text-overflow: ellipsis;
`;

const Promo = () => {
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const [isActiveInput, getStateActive] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      getStateActive(false);
    } else {
      getStateActive(true);
      inputRef.current.focus();
    }
  };

  return (
    <PromoContainer ref={wrapperRef}>
      <IconPromo
        src={getPublicUrl("/assets/svg/icon-addpromocod-header.svg")}
        alt="Промо"
      />
      {isActiveInput ? (
        <Input ref={inputRef} type="text" placeholder="Введите ваш промокод" />
      ) : (
        <Desc> Ввести промокод </Desc>
      )}
    </PromoContainer>
  );
};

export default Promo;
