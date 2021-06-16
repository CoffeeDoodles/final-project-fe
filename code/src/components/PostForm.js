import React from "react";
import { Link } from "react-router-dom";

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
  TextArea,
  Form
} from "./styled-components/FormElements";
import { ImageUpload } from "./ImageUpload";

const PostForm = ({ 
  status,
  statusChange, 
  petname, 
  petnameChange, 
  species, 
  speciesChange,
  breed,
  breedChange,
  description,
  descriptionChange,
  location,
  locationChange,
  sex,
  sexChange,
  email,
  emailChange,
  onFormSubmit
}) => {

  return (
    <Form classname="petform" onSubmit={onFormSubmit}>
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
                value={status}
                onChange={statusChange}
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
                value={status}
                onChange={statusChange}
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
                value={status}
                onChange={statusChange}
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
            value={petname}
            onChange={petnameChange}
          />
          <InputWrapper>
            <Label htmlFor="species">
              Species:
            </Label>
              <select
                id="species"
                value={species}
                onChange={speciesChange}
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
            value={breed}
            onChange={breedChange}
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
                value={sex}
                onChange={sexChange}
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
                value={sex}
                onChange={sexChange}
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
                value={sex}
                onChange={sexChange}
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
              value={description}
              onChange={descriptionChange}
            />
            {/* <Text className='char-counter'>
              {description.length}/140
            </Text> */}
            <Label htmlFor="location">
              Location:
            </Label>
            <InputField 
              id="location" 
              type="text"
              value={location}
              onChange={locationChange} 
            />
            <Label htmlFor="contact">
              Contact:
            </Label>
            <InputField 
              id="contact" 
              type="email"
              value={email}
              onChange={emailChange} 
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
    </Form>
  );
};

export default PostForm;
