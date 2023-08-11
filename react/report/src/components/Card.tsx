import styled from "styled-components";
import Content from "./Content";
//import ButtonStyle from "./styles/Button.styled";

const CardStyle = styled.div`
  background-color: #eeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

function Card() {
  return (
    <CardStyle>
      <h2>August</h2>
      <Content />
    </CardStyle>
  );
}

export default Card;
