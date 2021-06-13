import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch, batch} from 'react-redux'

import { MainContainer, Header, InputWrapper, ErrorMessage, Form, Label, InputField, PrimaryButton, SecondaryButtonContainer, SecondaryButton, Text } from '../components/styled-components/Form'

const CreatePost = () => {
  const [petName, setPetName] = useState('')
  const [breed, setBreed] = useState('')
  const [species, setSpecies] = useState('')
  const [status, setStatus] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [photo, setPhoto] = useState('')
  const [sex, setSex] = useState('')
  const [email, setEmail] = useState('')



return ( 
  <MainContainer>
    {/* <Form onSubmit={onFormSubmit}> */}
      <Header>
        Create new post
      </Header>
      <InputWrapper>
        <Label htmlFor="status">Status of pet:</Label> 
          <InputField
            id='status'
            type='text' 
          />
        <Label htmlFor="photo">Upload image:</Label> 
          <InputField
            id='photo'
            type='file'
            accept='image/*'
          />
        <Label htmlFor="pet-name">Pet Name (optional):</Label> 
        <InputField
          id='petname'
          type='text'
        />
        <Label htmlFor="species">Species:</Label> 
        <InputField
          id='species'
          type='text'
        />
        <Label htmlFor="breed">Breed:</Label> 
        <InputField
          id='breed'
          type='text'
        />
        <Label htmlFor="species">Sex:</Label> 
        <InputField
          id='sex'
          type='radiobutton'
        />
        <Label htmlFor="description">Description:</Label> 
        <InputField
          id='description'
          type='text'
        />
        <Label htmlFor="location">Location:</Label> 
        <InputField
          id='location'
          type='text'
        />
        <Label htmlFor="contact">Contact:</Label> 
        <InputField
          id='contact'
          type='text'
        />
      </InputWrapper>
      {/* {error && <ErrorMessage>{error.message}</ErrorMessage>} */}
      {/* <PrimaryButton
        type='submit'
        onClick={() => setMode('authenticate-user')}
      >
        Login
      </PrimaryButton> */}
      <SecondaryButtonContainer>
        <Text>
          Register as a PetSpotter? 
        </Text>
        <Link to="/register">
          <SecondaryButton>
            Register
          </SecondaryButton>
        </Link>
      </SecondaryButtonContainer>
    {/* </Form> */}
  </MainContainer>
)
}

export default CreatePost