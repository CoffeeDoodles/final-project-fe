import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { REACT_APP_BASE_URL } from "../reuseables/urls";
import {
  MainContainer,
  RadioButton,
  RadioDiv,
  TitleLabel,
  Form,
  Header,
  TextArea,
  InputField,
  Wrapper,
  RadioWrapper,
  InputWrapper,
  Label,
  SelectField,
  PrimaryButton,
  SecondaryButton,
  ButtonWrapper,
} from "./styled-components/FormElements";

const IMAGE_API_URL = `${REACT_APP_BASE_URL}/upload-images`;

const PostForm = () => {
  const [status, setStatus] = useState("");
  const [petName, setPetName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [sex, setSex] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const accessToken = useSelector((store) => store.user.accessToken);
  const history = useHistory();
  const fileInput = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", fileInput.current.files[0]);

    fetch(IMAGE_API_URL, { method: "POST", body: formData })
      .then((res) => res.json())
      .then(({ imageUrl }) => {
        fetch(`${REACT_APP_BASE_URL}/petposts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: accessToken,
          },
          body: JSON.stringify({
            status,
            petName,
            species,
            breed,
            sex,
            location,
            description,
            email,
            imageUrl,
          }),
        }).then(() => {
          history.push("/petposts");
          setIsLoading(false);
        });
      });
  };

  return (
    <MainContainer className="create-post">
      <Header>Create a new post!</Header>
      <Form onSubmit={handleOnSubmit}>
        <Wrapper>
          <TitleLabel htmlFor="status">Pet Status:</TitleLabel>
          <RadioWrapper className="radio-wrapper">
            <RadioDiv>
              <RadioButton
                id="statusLost"
                name="statusRadio"
                type="radio"
                required
                value="lost"
                onChange={(e) => setStatus(e.target.value)}
              />
              <Label htmlFor="status">Lost</Label>
            </RadioDiv>
            <RadioDiv>
              <RadioButton
                id="statusFound"
                name="statusRadio"
                type="radio"
                required
                value="found"
                onChange={(e) => setStatus(e.target.value)}
              />
              <Label htmlFor="status">Found</Label>
            </RadioDiv>
            <RadioDiv>
              <RadioButton
                id="statusReturned"
                name="statusRadio"
                type="radio"
                required
                value="returned"
                onChange={(e) => setStatus(e.target.value)}
              />
              <Label htmlFor="returned-home">Returned Home</Label>
            </RadioDiv>
          </RadioWrapper>
        </Wrapper>
        <InputWrapper>
          <TitleLabel htmlFor="petImage">Pet Image</TitleLabel>
          <InputField type="file" ref={fileInput} />
        </InputWrapper>
        <InputWrapper>
          <TitleLabel htmlFor="petName">Pet Name:</TitleLabel>
          <InputField
            id="petName"
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <TitleLabel htmlFor="species">Species:</TitleLabel>
          <SelectField
            id="species"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
          >
            <option defaultValue>Select an Species (More coming soon!)</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
          </SelectField>
        </InputWrapper>
        <InputWrapper>
          <TitleLabel htmlFor="breed">Breed:</TitleLabel>
          <InputField
            id="breed"
            type="text"
            required
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </InputWrapper>
        <Wrapper className="radio-wrapper">
          <TitleLabel htmlFor="sex">Sex:</TitleLabel>
          <RadioWrapper>
            <RadioDiv>
              <RadioButton
                id="sexFemale"
                name="sexRadio"
                type="radio"
                required
                value="female"
                onChange={(e) => setSex(e.target.value)}
              />
              <Label htmlFor="sex">Female</Label>
            </RadioDiv>
            <RadioDiv>
              <RadioButton
                id="sexMale"
                name="sexRadio"
                type="radio"
                required
                value="male"
                onChange={(e) => setSex(e.target.value)}
              />
              <Label htmlFor="sex">Male</Label>
            </RadioDiv>
            <RadioDiv>
              <RadioButton
                id="sexOther"
                name="sexRadio"
                type="radio"
                required
                value="other"
                onChange={(e) => setSex(e.target.value)}
              />
              <Label htmlFor="other">Other</Label>
            </RadioDiv>
          </RadioWrapper>
        </Wrapper>
        <InputWrapper>
          <TitleLabel htmlFor="location">Location:</TitleLabel>
          <InputField
            id="location"
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <TitleLabel htmlFor="description">
            Description of Pet:
          </TitleLabel>
          <TextArea
            id="description"
            placeholder="Please describe in as much detail as possible.
           Fur color/patterns, eye color, distinguishing marks etc."
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <TitleLabel htmlFor="email">Contact Email:</TitleLabel>
          <InputField
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>
        <ButtonWrapper>
          <PrimaryButton type="submit" disabled={isLoading}>
            Add Post
          </PrimaryButton>
          <SecondaryButton>Cancel</SecondaryButton>
        </ButtonWrapper>
      </Form>
    </MainContainer>
  );
};

export default PostForm;
