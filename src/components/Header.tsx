import styled from "styled-components";

const Box = styled.div`
  padding: 0;
  margin: 0;
  text-align: left;
`;

export default function Header() {
  return (
    <Box>
      <h1>Sarte's List</h1>
      <h2>Better-Dressed People</h2>
    </Box>
  );
}
