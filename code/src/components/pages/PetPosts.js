import React, { useState, useEffect } from "react";

import CardList from "../cards/CardList";

const PetPosts = () => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/petposts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCards(data);
      });
  }, []);

  return (
    <div className="pet-list-container">
      {cards && <CardList cards={cards} title="Pets" />}
    </div>
  );
};

export default PetPosts;
