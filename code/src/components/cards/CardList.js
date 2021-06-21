
import { BiMap } from 'react-icons/bi'

import { CardWrapper, IconWrapper, Card, InnerCard, ImageThumbnail, Space, StatusTitle, TextWrapper, Text, ImportantText, LocationText } from '../styled-components/CardElements'
import TestImage from '../../assets/poyapup.jpg';

const style = { color: "teal", fontSize: "1.5em" }

const CardList = ({ cards }) => {
  return (
      <CardWrapper>
        {cards.map((card) => (
            <Card key={card.petCard._id}>
              <InnerCard>
                <ImageThumbnail>
                  <TestImage />
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
                  {/* <IconContext.Provider value={{ fill: 'blue', size: '20px' }}> */}
                    <IconWrapper>
                      < BiMap style={style} className="location-icon"/>
                    </IconWrapper>                   
                  {/* </ IconContext.Provider> */}
                   { card.petCard.location }
                  </LocationText>
                </TextWrapper>
              </InnerCard>
            </Card>
        ))}     
      </CardWrapper> 
  )
}

// const GrLocation  = styled(GrLocation)`
//   color: skyblue;
// `;

export default CardList;