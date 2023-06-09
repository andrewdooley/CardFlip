import React from "react";
import Card from "./Card";
import { cards } from "./dummy";

export default function Cardlist({ cards }) {
  return (
    //nav component with score and timer
    <div className="card-grid">
      {cards.map((card) => {
        return <Card card={card} key={card.id} />;
      })}
    </div>
  );
}
