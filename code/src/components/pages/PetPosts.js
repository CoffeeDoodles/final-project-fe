import React, { useState, useEffect } from 'react'

import { CardThumbnail } from '../cards/CardThumbnail'

const PetPosts = () => {
  const [ petList, setPetList ] = useState([]);
  const [ error, setError ] = useState('');

  useEffect(() => {
    fetch("http://localhost:8080/petposts")
      .then(res => res.json())
      .then(json => setPetList(json.results))
      .catch(err => {
        setError(err)
      })
  }, [])

  return (
    <div className="pet-list-container">   
        {petList.map(pets => {  
            return (
                <CardThumbnail {...pets} key={pets.id} />
            )
        })}
        { error && <p>Something went not so great. Details {error}</p> }
    </div> 
  )
}

export default PetPosts