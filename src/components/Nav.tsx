import styled from "styled-components";
import navItems from "../assets/navData.tsx";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-style: underline;
  display: flex;
  justify-content: space-between;
`;

export default function Nav() {
  return (
    <nav aria-label="Main Navigation" role="navigation">
      <List>
        {navItems.map(({ title, link }) => {
          return (
            <li>
              <a href={link}>{title}</a>
            </li>
          );
        })}
        <li></li>
      </List>
    </nav>
  );
}
