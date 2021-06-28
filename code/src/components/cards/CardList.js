import { BiMap } from "react-icons/bi";

import {
  CardsWrapper,
  Card,
  CardLink,
  InnerCard,
  ImageThumbnail,
  Image,
  Space,
  StatusTitle,
  TextWrapper,
  Text,
  ImportantText,
  LocationText,
} from "../styled-components/CardElements";

const style = { color: "teal", fontSize: "1.5em" };


const CardList = ({ cards }) => {
  return (
    <CardsWrapper>
      {cards.map((card) => (
        <CardLink to={`/pet/${card._id}`} key={card.id}>
          <Card key={card.id} >
            <InnerCard >
              <ImageThumbnail >
                <Image
                  src={card.petCard.imageUrl}
                  alt="petImg"
                  key={card.imageUrl}
                  className="center-thumbnail"
                />
              </ImageThumbnail>
              <StatusTitle key={card.status}>{card.petCard.status}</StatusTitle>
              <TextWrapper key={card.petName}>
                <Text key={card.petName}>"{card.petCard.petName}"</Text>
                <ImportantText key={card.breed}>
                  {card.petCard.breed}
                  <Space key={card.species}>{card.petCard.species}</Space>
                </ImportantText>
                <LocationText key={card.location}>
                    <BiMap
                      style={style}
                      className="location-icon"
                      key={card.location}
                    />
                  {card.petCard.location}
                </LocationText>
              </TextWrapper>
            </InnerCard>
          </Card>
        </CardLink>
      ))}
    </CardsWrapper>
  );
};

export default CardList;
