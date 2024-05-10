import React, { useState } from "react";
import CardDetail from "./card";

const ListComponents = () => {
  const [cards, setCards] = useState([]);

  const createLiComp = () => {
    const randomNum = { ID: Math.floor(Math.random() * 1000) };
    setCards([...cards, randomNum]);
  };

  const deleteBtn = (ID) => {
    const updatedCards = cards.filter((component) => component.ID !== ID);
    setCards(updatedCards);
  };

  return (
    <div className="list">
      <h1>List</h1>

      <button onClick={createLiComp}>Create+</button>

      {cards.map((component) => (
        <CardDetail key={component.ID} ID={component.ID} deleteBtn={deleteBtn} />
      ))}

    </div>
  );
};

export default ListComponents;
