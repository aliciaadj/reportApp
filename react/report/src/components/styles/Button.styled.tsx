import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: white;
  border: none;
  border-radius: 3px;
  width: 30%;
  height: 30px;

  &:hover {
    cursor: pointer;
    background-color: #f4f4f4;
  }

  &:active {
    background-color: lightgray;
  }
`;

export default ButtonStyle;
