import styled from "styled-components";

export const MainContainer = styled.main`
  margin: 0;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding: 30px;
  }
`

export const ListContainer = styled.section`
  margin: 0;
  padding: 0;

`

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  width: 80%;
  border-bottom: 3px solid rgb(80, 80, 80, 0.5);
  font-family: "Nunito", sans-serif;
  color: #384E52;
  align-self: center;
`

