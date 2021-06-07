import React, { useState, useEffect } from 'react'

import { PETS_URL } from '../reusable/PET_API'


export const Home = () => {
    const [ petList, setPetList ] = useState([])
    const [ error, setError ] = useState('')
    
        const fetchPetList = () => {
            fetch(PETS_URL)
                .then(res => res.json())
                .then(json => setPetList(json.results))
                .catch(err => {
                    setError(err)
                })
        }

    useEffect(() => {
        fetchPetList()
    }, [])

    return (
        <div className="pet-list-container">    
            {petList.map(pet => {  
                // return (
                //     <pets {...pet} /> 
                // )
            })}
            { error && <p>Something went not so great. Details {error}</p> }
        </div>
    )

}