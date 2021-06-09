import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  margin: 10px;
  padding: 20px;
  border-radius: 0 10px 10px 10px;
  background-color: #fff;
`
// const SubContainer = styled.div`
//   padding: 10px
//   border-radius: 0 10px 10px 10px;
//   border: 2px solid #black;
//   background-color: #50B9CD;

// `

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`

const ImageThumbnail = styled.div`
  width: 150px;
  height: 60px;
  background-color: #000;
`
 /* This is for image thumbnail when url is ready
  background-image: url(${(props) => props.url});
  background-size: cover; */

// const SubText = styled.p`
//   margin: 0;
// `

export const PetCard = ({ status, name, breed, species, location }) => (
  <Container>
    {/* <SubContainer> */}
    <ImageThumbnail />
    {/* also add thumbnailUrl as a prop above 
    <ImageThumbnail url={thumbnailUrl}/> */}
    {status && <Title>{status}</Title>}
    {/* </SubContainer> */}
  </Container>
)

