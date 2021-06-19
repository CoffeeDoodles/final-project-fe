import { CardSection, Card, CardPreview, Image, Status, Pet, Species, Location } from '../styled-components/CardElements'

const CardList = ({ cards }) => {
  return (
    <div>
        {cards.map((card) => (
          <Card>
            <CardPreview key={card.petCard._id}>
              <Image>Image</Image>
              <Status>{ card.petCard.status }</Status>
              <h2>" { card.petCard.petName } "</h2>
              
                <p>{ card.petCard.breed }</p>
                { card.petCard.species }
                { card.petCard.location }
            </CardPreview>
          </Card>
        ))}     
    </div>
  )
}

export default CardList;