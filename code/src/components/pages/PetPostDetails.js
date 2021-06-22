import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


const PetPostDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  const PET_DETAILS_URL = `http://localhost:8080/posts/${id}`
 
  useEffect(() => {
    fetch(PET_DETAILS_URL)
      .then((res) => res.json())
      .then((json) => setDetails(json));
  }, [PET_DETAILS_URL]);

  return (
    <div className="main-container">
     WIP
    </div>
  )
}

export default PetPostDetails