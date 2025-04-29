import styled from "styled-components";

type navItem = {
  title: string;
  link: string;
};

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-style: underline;
  display: flex;
  justify-content: space-between;
`;

export default function Nav() {
  const navItems: navItem[] = [
    { title: "Women's", link: "#" },
    { title: "Men's", link: "#" },
    { title: "On the Street", link: "#" },
    { title: "The Catwalk", link: "#" },
    { title: "AdWatch", link: "#" },
    { title: "About", link: "#" },
  ];

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
