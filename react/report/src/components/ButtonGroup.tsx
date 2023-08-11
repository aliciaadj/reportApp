import styled from "styled-components";
import ButtonStyle from "./styles/Button.styled";
import { useState } from "react";

const ButtonGroupStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AmountStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ButtonGroup() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <>
      <ButtonGroupStyle>
        <ButtonStyle onClick={decrement} type="button">
          -
        </ButtonStyle>
        <AmountStyle>{count}</AmountStyle>
        <ButtonStyle onClick={increment} type="button">
          +
        </ButtonStyle>
      </ButtonGroupStyle>
      <button type="button">Reset</button>
    </>
  );
}

export default ButtonGroup;
