import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import useFetch from '../useFetch';

import status from '../PostForm';


const PetProfile = () => {
  const { id } = useParams();
  const { data, error, isPending } = useFetch('http://localhost:8080/petposts/' + id )

  return (
    <div className="main-container">
      <div className="petpost-details">
        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div> }
      </div>
      <label>Status: {status}</label>

    </div>
  )
}

export default PetProfile