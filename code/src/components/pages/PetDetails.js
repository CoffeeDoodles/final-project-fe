import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BiMap } from "react-icons/bi";

import { REACT_APP_BASE_URL } from "../../reuseables/urls";
import {
  CardWrapper,
  Card,
  InnerCard,
  ImageWrapper,
  Image,
  InfoContainer,
  Wrapper,
  StatusTitle,
  Text,
  CardDescription,
  TextWrapper,
  PetName,
  InfoText,
  PetText,
} from "../styled-components/PetDetailsElements";
// import CommentApp from "../Comments/CommentApp";

const style = { color: "#50B9CD", fontSize: "1.5em" };

const PetPostDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const DETAILS_URL = `${REACT_APP_BASE_URL}/posts/${id}`;

  useEffect(() => {
    fetch(DETAILS_URL)
      .then((res) => res.json())
      .then((res) => setDetails(res));
  }, [DETAILS_URL]);

  return (
    <CardWrapper className="main-container">
      <Card>
        <InnerCard>
          <ImageWrapper>
            <Image
              src={details.petCard?.imageUrl}
              className="center-image"
              alt="pet"
            />
          </ImageWrapper>
          <InfoContainer>
            <Wrapper>
              <StatusTitle>{details.petCard?.status}</StatusTitle>
            </Wrapper>
            <PetName>"{details.petCard?.petName}"</PetName>
            <InfoText>{details.petCard?.sex}</InfoText>
            <TextWrapper>
              <PetText>{details.petCard?.breed}</PetText>
              <span>
                <PetText>{details.petCard?.species}</PetText>
              </span>
            </TextWrapper>
            <div>
              <InfoText>
                {" "}
                <BiMap style={style} /> {details.petCard?.location}
              </InfoText>
            </div>
          </InfoContainer>
        </InnerCard>
        <CardDescription>
          <Text>{details.petCard?.description}</Text>
        </CardDescription>
      </Card>
      {/* <CommentApp /> Needs work on Logic, not functioning yet*/}
    </CardWrapper>
  );
};

export default PetPostDetails;
