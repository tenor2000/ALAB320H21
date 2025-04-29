import styled from "styled-components";

const Article = styled.article`
  padding-bottom: 2rem;
  margin-bottom: 4rem;
  flex: 1;
  border-bottom: 1px solid lightgray;
  & > div {
    padding: 10px;
    // border: 1px solid white;
  }

  &::after {
    content: "";
    height: 2px;
    background-color: green;
  }
`;

const Content = styled.p`
  padding-top: 1rem;

  &::first-letter {
    float: left;
    color: lightgray;
    font-size: 5rem;
    line-height: 1;
    margin-right: 0.5rem;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Anchor = styled.a`
  color: tomato;
  text-decoration: none;
`;

type BlogObject = {
  title: string;
  imgAddress: string;
  imgAlt: string;
  content: string;
  date: string;
  link: string;
};

export default function BlogPost({
  title,
  imgAddress,
  imgAlt,
  content,
  date,
  link,
}: BlogObject) {
  return (
    <Article>
      <div>
        <p>{date}</p>
        <h2>{title}</h2>
        <img src={imgAddress} alt={imgAlt} />
        <Content>{content}</Content>
      </div>
      <Box>
        <Anchor href={link}>Continues...</Anchor>
      </Box>
    </Article>
  );
}
