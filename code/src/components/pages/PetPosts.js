import React, { useState, useEffect } from "react";

import CardList from "../cards/CardList";
import { REACT_APP_BASE_URL } from "../../reuseables/urls";

const API_URL = `${REACT_APP_BASE_URL}/petposts`;

const PetPosts = () => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    fetch(API_URL)
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
