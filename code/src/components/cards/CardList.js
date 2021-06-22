
import { BiMap } from 'react-icons/bi'

import { CardsWrapper, IconWrapper, Card, CardLink, InnerCard, ImageThumbnail, Image, Space, StatusTitle, TextWrapper, Text, ImportantText, LocationText } from '../styled-components/CardElements'
import TestImage from '../../assets/poyapup.jpg';

const style = { color: "teal", fontSize: "1.5em" }

const CardList = ({ cards }) => {
  return (
      <CardsWrapper>
        {cards.map((card) => (
          <CardLink to={`/pet/${card._id}`}>
              <Card key={card.id}>             
                <InnerCard>
                  <ImageThumbnail>
                  {/* <img src={card.petImage.imageUrl} /> */}
                    <Image src={TestImage} alt="poya the best pup"/>
                  </ImageThumbnail>
                  <StatusTitle>
                    { card.petCard.status }
                  </StatusTitle>
                  <TextWrapper>
                    <Text>
                      "{ card.petCard.petName }"
                    </Text>
                    <ImportantText>
                      { card.petCard.breed }
                    <Space>
                      { card.petCard.species } 
                    </Space>
                    </ImportantText>
                    <LocationText>
                      <IconWrapper>
                        < BiMap style={style} className="location-icon"/>
                      </IconWrapper>                   
                    { card.petCard.location }
                    </LocationText>
                  </TextWrapper>
                </InnerCard>
              </Card>
          </CardLink>       
        ))}     
      </CardsWrapper> 
  )
}


export default CardList;