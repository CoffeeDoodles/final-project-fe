import React, { useState, useEffect } from "react";

import CardList from "../cards/CardList";
import { REACT_APP_BASE_URL } from "../../reuseables/urls";
import { MainContainer, ListContainer, Title } from "../styled-components/PetListElements";


const PetPosts = () => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    fetch(`${REACT_APP_BASE_URL}/petposts`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCards(data);
      });
  }, []);

  return (
    <>
      <MainContainer> 
        <Title>Pet Postings</Title>         
        <ListContainer className="pet-list-container">        
          {cards && <CardList cards={cards} title="Pets" />}
        </ListContainer>      
        <Title>
          <span role="img" aria-label="heart">❤️ </span>
          Returned Home
          <span role="img" aria-label="heart"> ❤️</span>
        </Title>       
        <ListContainer>
        </ListContainer>
      </MainContainer>
    </>
  );
};

export default PetPosts;


