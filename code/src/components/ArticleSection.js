import React from "react";
import { IoIosArrowForward } from "react-icons/io";

import hugImg from "../assets/article.jpg";
import {
  ArticleContainer,
  Image,
  Title,
  PostLink,
  Text,
  TextWrapper,
  IconWrapper,
} from "./styled-components/ArticleElements";

const style = { color: "#FFB560", fontSize: "2em", margin: "0 0 0 -18px" };

const ArticleSection = () => {
  return (
    <>
      <ArticleContainer>
        <Image alt="kittenhug" className="article-img" src={hugImg} />
        <TextWrapper>
          <Text>
            Our goal is to help reunite the lost pets of the world to their
            rightful families. Help us help you!
          </Text>
          <PostLink to="/petposts">
            <Title>Pet Postings </Title>
            <IconWrapper>
              <IoIosArrowForward style={style} />
              <IoIosArrowForward style={style} />
            </IconWrapper>
          </PostLink>
        </TextWrapper>
      </ArticleContainer>
    </>
  );
};

export default ArticleSection;
