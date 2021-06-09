// import React, { useState, useEffect } from 'react'
import React from 'react'

// import { PETS_URL } from '../reusable/PET_API'


export const RecentLostPets = () => {
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
        <h1>Recently Lost</h1>
        <a href="see-more-link">See more</a>
        {/* petcards */}
      </div>
      // <div className="lost-pet-list-container">    
    //     {petList.map(pet => {  
    //         // return (
    //         //     <pets {...pet} /> 
    //         // )
    //     })}
    //     { error && <p>Something went not so great. Details {error}</p> }
      // </div>
    )

}

export default RecentLostPets