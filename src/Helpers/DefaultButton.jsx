import styled from "styled-components";

const DefaultBtn = styled.button`
  border: transparent;
  background-color: transparent;
  transition: 0.4s ease opacity;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default DefaultBtn;
