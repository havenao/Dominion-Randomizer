import React from "react";

const Card = ({ card }) => {
  return (
    <div className="card item">
      <img src={`./images/${card.name.toLowerCase()}.jpg`} alt={card.name} />
      <h4 className="overlay-text">{card.name}</h4>
    </div>
  );
};
export default Card;
