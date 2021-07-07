import styled, { css } from "styled-components";

const ArticleS = styled.div`
  padding: 80px;
  display: flex;
  align-items: center;

  .article_info {
    padding: 0 40px;
  }

  .article_img img {
    width: 600px;
  }

  ${(props) =>
    props.reverse &&
    css`
      .article_info {
        order: -1;
      }
    `};
`;

export default ArticleS;
