import styled from "styled-components/macro";

export const DesktopFooter = styled.section`
  background-color: #50b9cd;
  width: 100%;
  height: 250px;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  display: none;
  @media (min-width: 991px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;  
    font-family: "Nunito", sans-serif;
  }
`;
export const ContactInfo = styled.div`
  margin: 0;
`;
export const Title = styled.h1`
  margin: 0;
  padding: 10px 0;
  color: #ffffff;
  font-size: 20px;
  align-text: center;
  @media (min-width: 991px) {
    font-size: 25px;
  }
`;

export const Text = styled.p`
  color: white;
  align-text: center;
`;

export const MobileFooter = styled.div`
  box-sizing: border-box;
  display: flex;
  background-color: #50b9cd;
  height: 100px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  @media (min-width: 991px) {
    display: none;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  width: 100%;
  @media (min-width: 991px) {
    font-size: 1.5rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0 1rem;
  width: 26%;
`

export const IconTitle = styled.h1`
  margin-bottom: 5rem;
  padding: 10px 0;
  color: #ffffff;
  font-size: 20px;
  align-text: center;
  font-size: 25px;
`

