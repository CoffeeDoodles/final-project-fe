import styled from "styled-components/macro";

export const CardWrapper = styled.main`
  margin: 0;
  padding: 20px;
`;
export const Card = styled.article`
  width: 100%;
  border-radius: 0 10px 10px 10px;
  padding: 5px 10px 10px 5px;
  background-color: #50b9cd;
  box-sizing: border-box;
  box-shadow: 0 8px 6px -6px grey;
`;

export const InnerCard = styled.div`
  border-radius: 0 10px 10px 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: white;
  min-height: 300px;
`;

export const CardDescription = styled.div`
  border-radius: 0 10px 10px 10px;
  display: flex;
  align-items: center;
  background-color: white;
  margin-top: 16px;
`;


export const InfoContainer = styled.section`
  width: 50%;
  min-height: 300px;
  background-color: grey;
  border-radius: 0 10px 10px 0;
`;

export const StatusTitle = styled.h1`
  border-radius: 0 10px 10px 10px;
  background-color: #ffb560;
  color: white;
  padding: 1px 8px;
  font-size: 18px;
  margin: 5px 0;
  text-align: center;
`;

export const ImageWrapper = styled.div `
  width: 50%;
  background-color: pink;
`;

export const Image = styled.img`
  object-fit: cover;
`;

export const Text = styled.p`
  word-wrap; break-word;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
`

