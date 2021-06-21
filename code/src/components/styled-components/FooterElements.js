import styled from "styled-components/macro";

export const DesktopFooter = styled.section`
background-color: #50B9CD;
display: none;
box-sizing: border-box;
padding: 20px;
@media (min-width: 768px) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
`
export const ContactInfo = styled.div`
  margin: 0;
`
export const Title = styled.h1`
  margin: 0;
  color: #ffffff;
  font-size: 20px;
  align-text: center;
`

export const Text = styled.p`
  color: white;
  align-text: center;
`

export const MobileFooter = styled.div`
  box-sizing: border-box;
  display: flex;
  background-color: #50B9CD;
  height: 100px;
  @media (min-width: 768px) {
    display: none;
  }  
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 10px;
  width: 100%;
`