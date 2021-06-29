import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const ArticleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: center;
  max-height: 600px;
  padding: 16px;
  box-sizing: border-box;
  font-family: "Nunito", sans-serif;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 30px;
  }
`;

export const Image = styled.img`
  height: 200px;
  @media (min-width: 768px) {
    height: 300px;
    margin-right: 1rem;
  }
  @media (min-width: 991px) {
    height: 600px;
    padding: 3rem 2rem;
    margin-right: 6rem;
  }
`;
export const Title = styled.h2`
  color: #ffb560;
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
export const PostLink = styled(Link)`
  text-decoration: none;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;
export const TextWrapper = styled.section`
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  @media (min-width: 991px) {
    align-items: flex-start;
    max-width: 500px;
  }
`;
export const Text = styled.p`
  color: #384e52;
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 26px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
`;
