
import { CardWrapper, Card, InnerCard, ImageThumbnail, Space, StatusTitle, TextWrapper, Text, ImportantText, LocationText } from '../styled-components/CardElements'
import Logo from '../Logo';

const CardList = ({ cards }) => {
  return (
      <CardWrapper>
        {cards.map((card) => (
            <Card key={card.petCard._id}>
              <InnerCard>
                <ImageThumbnail>
                  <Logo />
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
                   <Space> { card.petCard.species } </Space>
                  </ImportantText>
                  <LocationText>
                    { card.petCard.location }
                  </LocationText>
                </TextWrapper>
              </InnerCard>
            </Card>
        ))}     
      </CardWrapper> 
  )
}

export default CardList;