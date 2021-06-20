import styled from 'styled-components/macro'

export const CardWrapper = styled.div`
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
export const Card = styled.article`
  width: 300px;
  height: 300px;
  margin: 30px;
  border-radius: 0 10px 10px 10px;
  padding: 5px 10px 10px 5px;
  background-color: #50B9CD;
  box-sizing: border-box;
  box-shadow: 0 8px 6px -6px grey;
  `

export const InnerCard = styled.div`
  border-radius: 0 10px 10px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: white;
`

export const ImageThumbnail = styled.div`
  width: 100%;
  height: 45%;
  background-color: green;
  overflow: hidden;
  border-radius: 0 10px 0 0;
`

export const StatusTitle = styled.h1`
  border-radius: 20px;
  background-color: #FFB560;
  color: white;
  padding: 5px 15px;
  font-size: 16px;
  margin: 5px 0;
  position: relative;
  left: -90px;
  width: 60px;
  text-align: center;
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`
export const Text = styled.p`
  color: #384E52;
  margin: 0;
`

export const ImportantText = styled.h2`
  margin: 5px 0;
  color: #384E52;
`
export const Space = styled.span`
  color: #384E52;
`

export const LocationText = styled.p`
  color: #384E52;
  margin: 0;
  display: flex;
  flex-direction: row;
`

export const IconWrapper = styled.div`
  margin-right: 5px;
`
