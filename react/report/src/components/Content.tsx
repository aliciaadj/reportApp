import styled from "styled-components";
import Desc from "./Desc";
import ButtonGroup from "./ButtonGroup";

const ContentStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 20px;
  height: 20vh;
  margin-bottom: 30px;
`;

const ButtonsStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80px;
`;

function Content() {
  return (
    <>
      <ContentStyle>
        <Desc />
        <ButtonsStyle>
          <ButtonGroup />
          <ButtonGroup />
          <ButtonGroup />
          <ButtonGroup />
        </ButtonsStyle>
      </ContentStyle>
      <Content />
    </>
  );
}

export default Content;
