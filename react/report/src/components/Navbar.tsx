import styled from "styled-components";

const Nav = styled.nav`
  background-color: lightblue;
  padding: 5px;
`;

function Navbar() {
  return (
    <>
      <Nav>
        <h1>Report</h1>
      </Nav>
    </>
  );
}

export default Navbar;
