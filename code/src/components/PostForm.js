import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch, batch } from "react-redux";


import {
  MainContainer,
  Header,
  InputWrapper,
  Label,
  InputField,
  RadioButton,
  RadioWrapper,
  Wrapper,
  SecondaryButtonContainer,
  SecondaryButton,
  Text,
  TextArea
} from "./styled-components/FormElements";

import { ImageUpload } from "./ImageUpload";

const PostForm = () => {
  // const [petName, setPetName] = useState('')
  // const [breed, setBreed] = useState('')
  const [species, setSpecies] = useState('')
  const [status, setStatus] = useState('')
  // const [description, setDescription] = useState('')
  // const [location, setLocation] = useState('')
  // const [photo, setPhoto] = useState('')
  // const [sex, setSex] = useState('')
  // const [email, setEmail] = useState('')

  return (
    <MainContainer>
      <Header>Create new post</Header>
      <InputWrapper>
        <Wrapper>
          <RadioWrapper>
            <Label htmlFor="status">
              Status of pet:
            </Label>
            <RadioButton
              id="lost" 
              type="radio" 
              name="statusRadio"
              value="lost"
            />
          </RadioWrapper>
          <RadioWrapper>
            <Label htmlFor="lost">
              lost
            </Label>
            <RadioButton 
              id="found" 
              type="radio"
              name="statusRadio"
              value="found" 
            />
          </RadioWrapper>
          <RadioWrapper>
            <Label htmlFor="found">
              found
            </Label>
            <RadioButton
              id="returned" 
              type="radio" 
              name="statusRadio"
              value="returnedHome" 
            />
          </RadioWrapper>
          <Label htmlFor="returned-home">
            returned home
          </Label>
        </Wrapper>        
        {/* <Label htmlFor="photo">Upload image:</Label>  */}
        <ImageUpload />
        <Label htmlFor="pet-name">
          Pet Name (optional):
        </Label>
        <InputField 
          id="petname" 
          type="text" 
        />
        <InputWrapper>
          <Label htmlFor="species">
            Species:
          </Label>
            <select
              id="species"
              onChange={(e) => {
                setSpecies(e.target.value);
              }}
            >
              <option disabled selected value>
                Select an Species (More coming soon!)
              </option>
              <option>
                Cat
              </option>
              <option>
                Dog
              </option>
            </select>
        </InputWrapper>
        <Label htmlFor="breed">
          Breed:
        </Label>
        <InputField 
          id="breed" 
          type="text" 
        />
        <Wrapper>
          <Label htmlFor="sex">
            Sex:
          </Label>
          <RadioWrapper>            
            <RadioButton
              id="female"
              type="radio"
              name="sexRadio"
              value="female"
            />
            <Label htmlFor="female">
              Female
            </Label>
          </RadioWrapper>          
          <RadioWrapper>
            <RadioButton
              id="male" 
              type="radio" 
              name="sexRadio" 
              value="male"
            />
            <Label htmlFor="male">
              Male
            </Label>
          </RadioWrapper>
          <RadioWrapper>
            <RadioButton
              id="other" 
              type="radio" 
              name="sexRadio" 
              value="other" 
            />
            <Label htmlFor="other">
              Other
            </Label>
          </RadioWrapper>
        </Wrapper>
          <Label htmlFor="description">
            Description:
          </Label>
          <TextArea
            className="pet-description"
            id="description"
            type="text"
            placeholder="Please describe the pet in detail."
            // value={}
            // onChange={} 
          />
          <Label htmlFor="location">
            Location:
          </Label>
          <InputField 
            id="location" 
            type="text" 
          />
          <Label htmlFor="contact">
            Contact:
          </Label>
          <InputField 
            id="contact" 
            type="text" 
          />
      </InputWrapper>
      <SecondaryButtonContainer>
        <Text>
          Ready to Post?
        </Text>
        <Link to="/petposts">
          <SecondaryButton>Submit Pet</SecondaryButton>
        </Link>
      </SecondaryButtonContainer>
      <SecondaryButtonContainer>
        <Link to="/home">
          <SecondaryButton>
            Cancel
          </SecondaryButton>
        </Link>
      </SecondaryButtonContainer>
    </MainContainer>
  );
};

export default PostForm;
