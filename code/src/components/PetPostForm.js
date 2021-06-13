import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch, batch} from 'react-redux'

import { MainContainer, Header, InputWrapper, ErrorMessage, Form, Label, InputField, PrimaryButton, SecondaryButtonContainer, SecondaryButton, Text } from '../components/styled-components/Form'

import { ImageUpload } from './ImageUpload'

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
        {/* <Label htmlFor="photo">Upload image:</Label>  */}
          <ImageUpload />
        <Label htmlFor="pet-name">Pet Name (optional):</Label> 
        <InputField
          id='petname'
          type='text'
        />
        <InputWrapper>
          <Label htmlFor="species">Species:</Label> 
            <select id="species" onChange={(e) => {
                                setSpecies(e.target.value);
                            }}>
                                <option disabled selected value>Select an Species (More coming soon!)</option>
                                <option>Cat</option>
                                <option>Dog</option>
            </select>
        </InputWrapper>

                              
        <Label htmlFor="breed">Breed:</Label> 
        <InputField
          id='breed'
          type='text'
        />
        <InputWrapper>
          <Label htmlFor="sex">Sex:</Label> 
            <SecondaryButtonContainer>
            <Label htmlFor="female">Female</Label>
            <InputField
              id='female'
              type='radio'
              name='sexRadio'
              value='female'
            />
            <Label htmlFor="male">Male</Label>
            <InputField
              id='male'
              type='radio'
              name='sexRadio'
              value='male'
            />
            <Label htmlFor="other">Other</Label>
            <InputField
              id='other'
              type='radio'
              name='sexRadio'
              value='other'
            />
            </SecondaryButtonContainer>
        </InputWrapper>
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