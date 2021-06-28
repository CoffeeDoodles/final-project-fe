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
  position: relative;
  top: 0;
  left: 0;
  z-index: 0;
`

export const Title = styled.h1`
  margin: 20px 0;
  padding: 0;
  width: 80%;
  border-bottom: 3px solid rgb(80, 80, 80, 0.5);
  font-family: "Nunito", sans-serif;
  color: #384E52;
  align-self: center;
`
export const LoadingContainer = styled.div`
  margin: 0;
  padding: 0;
  z-index: 1;
  position: absolute;
  left: 40%;
  top: 5%;
  transform: translate(-25%, 5%);
  background-color: white;
  border: 2px solid #50B9CD;
  border-radius: 10px;
  width: 10rem;
  height:8rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    left: 50%;
    top: 10%;
    transform: translate(-50%, 10%)
  }
`

export const LoadText = styled.h2`
  margin: 8px 0 0 0;
  padding: 0;
  color: #FFB560;
  text-align: center;
`

