import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  margin: 10px;
  padding: 20px;
  border-radius: 0 10px 10px 10px;
  background-color: #fff;
`
const SubContainer = styled.div`
  padding: 10px
  border-radius: 0 10px 10px 10px;
  border: 2px solid #black;
  background-color: #50B9CD;

`

const Title = styled.h1`
  margin: 0;
  margin: 24px;
`

// const SubText = styled.p`
//   margin: 0;
// `

export const PetCard = ({ status, name, breed, species, location }) => (
  <Container>
    <SubContainer>
    <Title>PET STUFF</Title>
    </SubContainer>
  </Container>
)

