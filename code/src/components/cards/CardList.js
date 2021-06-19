const CardList = ({ cards, title }) => {
  return (
    <div className="card-list">
      <h2>{ title }</h2>
      {cards.map((card) => (
        <div className="card-preview" key={card.petCard._id}>
          <h2>{ card.petCard.petName }</h2>
          <p>Currently { card.petCard.status }</p>
        </div>
      ))}
    </div>
  )
}

export default CardList;