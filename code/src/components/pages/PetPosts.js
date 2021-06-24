import React, { useState, useEffect } from "react";

import CardList from "../cards/CardList";
import { REACT_APP_BASE_URL } from "../../reuseables/urls";

// const PET_API_URL = `${API_URL}/petposts`;

const PetPosts = () => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    fetch(`${REACT_APP_BASE_URL}petposts`)
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
