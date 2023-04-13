import React, { useState } from "react";

export default function Card({ card }) {
  const [flip, setFlip] = useState(false);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [score, setScore] = useState(0);

  function handleClick(card) {
    console.log(card.id);
    if (firstCard === null && flip) {
      setFirstCard(card.id);
    } else if (secondCard === null) {
      if (card.id + firstCard === +31) {
        setScore(score + 1);
        setFirstCard(null);
        console.log(score);
      } else {
        setSecondCard(card.id);
        if (card.id + firstCard === +31) {
          console.log("match");
          setScore(score + 1);
          setFirstCard(null);
          setSecondCard(null);
        } else if (card.id === secondCard) {
          console.log("same card flipped");
          setFirstCard(null);
          setSecondCard(null);
        } else {
          console.log("no match");
          setFirstCard(null);
          setSecondCard(null);
        }
      }
    }
  }

  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => {
        handleClick(card);
        setFlip(!flip);
      }}
    >
      {flip ? <img src={card.back} alt="" /> : <img src={card.front} alt="" />}
    </div>
  );
}
