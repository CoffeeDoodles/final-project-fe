import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  CardDescription
} from "../styled-components/PetDetailsElements";

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
            <h1>{details.petCard?.petName}</h1>
            <h2>{details.petCard?.sex}</h2>
            <h2>{details.petCard?.breed}</h2>
            <h2>{details.petCard?.species}</h2>
            <div>
              <p>Last Seen: {details.petCard?.location}</p>
            </div>
          </InfoContainer>
        </InnerCard>
        <CardDescription>
          <Text>{details.petCard?.description}</Text>
        </CardDescription>
      </Card>
    </CardWrapper>
  );
};

export default PetPostDetails;
