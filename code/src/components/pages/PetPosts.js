import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

// import { CardThumbnail } from '../cards/CardThumbnail'
import CardList from '../cards/CardList';

const BackgroundColor = styled.div`
  background-color: pink;

`

const PetPosts = () => {
  const [ cards, setCards ] = useState(null);
  // const [ error, setError ] = useState('');
      

  useEffect(() => {
    fetch('http://localhost:8080/petposts')
      .then(res => {
        return res.json()
      })
      .then((data) => {
        console.log(data);
        setCards(data);
      })
    }, []);
    

  return (
    <BackgroundColor>
      <div className="pet-list-container">   
          {cards && <CardList cards={cards} title="Pets"/>}
      </div> 
    </BackgroundColor>
  )
}

export default PetPosts