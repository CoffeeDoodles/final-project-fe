import React from "react";
import styled from "styled-components/macro";

import hugImg from "../assets/article.jpg";

const ArticleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  max-height: 600px;
  padding: 16px;
`;

const Image = styled.img`
  height: 200px;
`

const Text = styled.p`
  color: #384e52;
  font-size: 20px;
`;

const ArticleSection = () => {
  return (
    <>
      <ArticleContainer>
        <Image alt="kittenhug" className="article-img" src={hugImg} />
        <Text>
          Our goal is to help reunite the lost pets of the world to their
          rightful families. Help us help you!
          <a href="description">Pet Postings</a>
        </Text>
      </ArticleContainer>
    </>
  );
};

export default ArticleSection;
