import styled from "styled-components/macro";

export const CardWrapper = styled.main`
  margin: 0;
  padding: 40px 20px;
  font-family: "Nunito", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    padding: 50px 40px;
  }
  @media (min-width: 991px) {
    padding: 10rem;
    display: flex;
    justify-content: center;
  }
`;
export const Card = styled.article`
  width: 100%;
  border-radius: 0 10px 10px 10px;
  padding: 5px 10px 10px 5px;
  background-color: #50b9cd;
  box-sizing: border-box;
  box-shadow: 0 8px 6px -6px grey;
  @media (min-width: 991px) {
   max-width: 70rem;
  }
`;

export const InnerCard = styled.div`
  border-radius: 0 10px 10px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  box-sizing: border-box;
  color: #384e52;
  @media (min-width: 991px) {
    flex-direction: row;
    border-radius: 0 10px 0 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  background-color: #50b9cd;
  border-radius: 0 10px 0 0;
  overflow: hidden;
  @media (min-width: 991px) {
      border-radius: 0;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const InfoContainer = styled.section`
  width: 100%;
  margin: 0;
  padding: 10px;
  background-color: white;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    padding: 20px;
  }
  @media (min-width: 991px) {
    justify-content: space-around; 
    padding: 10px 20px;
    min-height: 350px;
  }
`;

export const StatusTitle = styled.h1`
  border-radius: 0 8px 8px 8px;
  background-color: #ffb560;
  color: white;
  font-size: 20px;
  margin: 0;
  text-align: center;
  width: 80px;
  @media (min-width: 768px) {
    font-size: 26px;
    width: 120px;
  }
`;

export const Text = styled.p`
  word-wrap: break-word;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 991px) {
    font-size: 28px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CardDescription = styled.div`
  border-radius: 0 0px 10px 10px;
  display: flex;
  align-items: center;
  background-color: white;
  margin-top: 10px;
  padding: 16px;
  @media (min-width: 991px) {
    padding: 26px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const PetText = styled.h2`
  font-size: 20px;
  margin-right: 8px;
  @media (min-width: 768px) {
    font-size: 26px;
  }
  @media (min-width: 991px) {
    font-size: 30px;
  }
`;

export const InfoText = styled.h2`
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 991px) {
    font-size: 26px;
  }
`;

export const PetName = styled.h1`
  font-size: 26px;
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 991px) {
    font-size: 34px;
  }
`;
