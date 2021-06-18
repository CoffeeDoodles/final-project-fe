import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { PETS_API_URL } from '../reuseables/urls';
import PostForm from './PostForm';

import form from '../reducers/form'

const PostFormLogic = () => {
  const details = useSelector((store) => store.form.details);
  const dispatch = useDispatch();

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
  console.log(handleLocationChange)

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
    .then((data) => {
      dispatch(form.actions.setAddSinglePost(data))
    })

    //it clear
    event.target.reset()
  }
  
  return (
    <div>
      <PostForm 
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
      ></PostForm>
      petcard goes here!
    </div>
  )
}

export default PostFormLogic;