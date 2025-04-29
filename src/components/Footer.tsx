import navItems from "../assets/navData";
import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-style: underline;
  display: flex;
  justify-content: space-between;
`;

const Anchor = styled.a`
  color: tomato;
  text-decoration: none;
`;

export default function Footer() {
  return (
    <div>
      <List>
        <li>
          <Anchor href="#">Home</Anchor>
        </li>
        {navItems.map(({ title, link }) => {
          return (
            <li>
              <Anchor href={link}>{title}</Anchor>
            </li>
          );
        })}
        <li>
          <Anchor href="#">Tips</Anchor>
        </li>
      </List>
      <p>&copy; 2013 Valet Industries</p>
    </div>
  );
}
