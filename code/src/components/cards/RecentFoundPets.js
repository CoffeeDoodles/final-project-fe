// import React, { useState, useEffect } from 'react'
import React from 'react'

import { PetCard } from '../../lib/PetCard'

// import { PETS_URL } from '../reusable/PET_API'


export const RecentFoundPets = () => {

  // const [ petList, setPetList ] = useState([])
  // const [ error, setError ] = useState('')
  //   const fetchPetList = () => {
  //     fetch(PETS_URL)
//         .then(res => res.json())
//         .then(json => setPetList(json.results))
//         .catch(err => {
//             setError(err)
//         })
  //     }

  // useEffect(() => {
  //   fetchPetList()
  // }, [])

  return (
    <div> 
      <a href="see-more-link">See more</a>
      <h1>Recently Found</h1>
      <PetCard 
        // thumbnailUrl="https://unsplash.com/photos/brFsZ7qszSY"
        status="PET STUFF"/>
    </div>

    // <div className="found- pet-list-container">    
    //    {petList.map(pet => {  
  //         // return (
  //         //     <pets {...pet} /> 
  //         // )
    //     })}
    //     { error && <p>Something went not so great. Details {error}</p> }
    // </div>
  )

}

export default RecentFoundPets