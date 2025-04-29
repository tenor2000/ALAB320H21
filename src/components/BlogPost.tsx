import styled from "styled-components";

const BlogBlock = styled.div`
  padding: 5px;
  flex: 1;
  border: 1px solid red;
  & > div {
    padding: 10px;
    // border: 1px solid white;
  }

  &::after {
    content: "";
    height: 1px;
    background-color: white;
  }
`;

const Article = styled.p`
  padding-top: 1rem;

  &::first-letter {
    float: left;
    font-size: 5rem;
    line-height: 1;
    margin-right: 0.5rem;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: flex-end;
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
    <BlogBlock>
      <div>
        <p>{date}</p>
        <h2>{title}</h2>
        <img src={imgAddress} alt={imgAlt} />
        <Article>{content}</Article>
      </div>
      <Box>
        <a href={link}>Continues...</a>
      </Box>
    </BlogBlock>
  );
}
