import styled from "styled-components";

const DescStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.5rem;

  p {
    padding: 0;
    margin: 0;
  }
`;

function Desc() {
  return (
    <DescStyle>
      <p>Stunden</p>
      <p>Abgaben</p>
      <p>Rückbesuche</p>
      <p>Bibelstudien</p>
    </DescStyle>
  );
}

export default Desc;
