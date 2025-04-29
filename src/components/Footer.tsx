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

export default function Footer() {
  return (
    <div>
      <List>
        <li>
          <a href="#">Home</a>
        </li>
        {navItems.map(({ title, link }) => {
          return (
            <li>
              <a href={link}>{title}</a>
            </li>
          );
        })}
        <li>
          <a href="#">Tips</a>
        </li>
      </List>
      <p>&copy; 2013 Valet Industries</p>
    </div>
  );
}
