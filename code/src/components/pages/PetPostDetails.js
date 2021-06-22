import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


const PetPostDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const PET_DETAILS_URL = `http://localhost:8080/posts/${id}`
 
  useEffect(() => {
    fetch(PET_DETAILS_URL)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [PET_DETAILS_URL]);

  return (
    <CardsWrapper className="main-container">
     <p> Status: {details.status}</p>
    </CardsWrapper>
  )
}

export default PetPostDetails

const CardsWrapper = styled.main`
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const Card = styled.article`
  width: 300px;
  height: 300px;
  margin: 30px;
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
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: white;
`;
