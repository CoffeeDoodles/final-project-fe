import React, { useState } from 'react';

import { PETS_API_URL } from '../reuseables/urls';
import PostForm from './PostForm';

const PostFormLogic = () => {
  const [status, setStatus] = useState('')
  const [petname, setPetname] = useState('')
  const [species, setSpecies] = useState('')
  const [breed, setBreed] = useState('')
  const [sex, setSex] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [email, setEmail] = useState('')

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handlePetnameChange = (event) => {
    setPetname(event.target.value);
  };

  const handleSpeciesChange = (event) => {
    setSpecies(event.target.value);
  };

  const handleBreedChange = (event) => {
    setBreed(event.target.value);
  };

  const handleSexChange = (event) => {
    setSex(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        { 
          status,
          petname,
          species,
          breed,
          sex,
          description,
          location,
          email        
        }
      )};
    
  fetch( PETS_API_URL, options)
    .then((res) => res.json())
    .then(() => 
    setStatus(''),
    setPetname(''),
    setSpecies(''),
    setBreed(''),
    setSex(''),
    setDescription(''),
    setLocation(''),
    setEmail('')
    )
    e.target.reset()
  }
  
  
  return (
    <div>
      <PetCard 
        onFormSubmit={handleFormSubmit}
        status={status}
        onStatusChange={handleStatusChange}
        petname={petname}
        onPetnameChange={handlePetnameChange}
        species={species}
        onSpeciesChange={handleSpeciesChange}
        breed={breed}
        onBreedChange={handleBreedChange}
        sex={sex}
        onSexChange={handleSexChange}
        description={description}
        onDescriptionChange={handleDescriptionChange}
        location={location}
        onLocationChange={handleLocationChange}
        email={email}
        onEmailChange={handleEmailChange}
      />
      petcard goes here!
    </div>
  )
}

export default PostFormLogic;