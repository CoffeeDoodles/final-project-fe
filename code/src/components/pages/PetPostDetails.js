import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components/macro';

import { REACT_APP_BASE_URL } from '../../reuseables/urls';

const PetPostDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const DETAILS_URL = `${REACT_APP_BASE_URL}/posts/${id}`
 
  useEffect(() => {
    fetch(DETAILS_URL)
      .then((res) => res.json())
      .then((res) => setDetails(res));
  }, [DETAILS_URL]);

  return (
    <CardWrapper className="main-container">
      <Card>
        <InnerCard>
          <ImageWrapper>
            <Image src={details.petCard?.imageUrl} alt="pet"/>
          </ImageWrapper>
          <InfoContainer>
            <Wrapper>
              <StatusTitle>
                {details.petCard?.status}
              </StatusTitle>

            </Wrapper>
            <h1>{details.petCard?.petName}</h1>
            <h2>{details.petCard?.sex}</h2>
            <h2>{details.petCard?.breed}</h2>
            <h2>{details.petCard?.species}</h2>
            <div>
              <p>Last Seen: {details.petCard?.location}</p>
            </div>
            
            
         </InfoContainer>
       </InnerCard>
       <CardDescription>
         <Text>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent tristique magna. Nulla facilisi etiam dignissim diam quis. In est ante in nibh. Massa vitae tortor condimentum lacinia quis vel. Tortor at auctor urna nunc id cursus. Orci nulla pellentesque dignissim enim sit. Aliquam vestibulum morbi blandit cursus risus at ultrices.
         </Text>
       </CardDescription>
     </Card>
    </CardWrapper>
  )
}

export default PetPostDetails

const CardWrapper = styled.main`
  margin: 0;
  padding: 20px;
`;
const Card = styled.article`
  width: 100%;
  border-radius: 0 10px 10px 10px;
  padding: 5px 10px 10px 5px;
  background-color: #50b9cd;
  box-sizing: border-box;
  box-shadow: 0 8px 6px -6px grey;
`;

const InnerCard = styled.div`
  border-radius: 0 10px 10px 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: white;
  min-height: 300px;
`;

const CardDescription = styled.div`
  border-radius: 0 10px 10px 10px;
  display: flex;
  align-items: center;
  background-color: white;
  margin-top: 16px;
`;


const InfoContainer = styled.section`
  width: 50%;
  min-height: 300px;
  background-color: grey;
  border-radius: 0 10px 10px 0;
`;

const StatusTitle = styled.h1`
  border-radius: 0 10px 10px 10px;
  background-color: #ffb560;
  color: white;
  padding: 1px 8px;
  font-size: 18px;
  margin: 5px 0;
  text-align: center;
`;

const ImageWrapper = styled.div `
  width: 50%;
  background-color: pink;
`;

const Image = styled.img`
  object-fit: cover;
`;

const Text = styled.p`
  word-wrap; break-word;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
`

