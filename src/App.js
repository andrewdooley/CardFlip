import React from "react";
import { useState } from "react";
import Cardlist from "./Cardlist";
import flagsAndPairs from "./dummy";

function shuffle(flagsAndPairs) {
  for (let i = flagsAndPairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flagsAndPairs[i], flagsAndPairs[j]] = [flagsAndPairs[j], flagsAndPairs[i]];
  }
  return flagsAndPairs;
}

const newDeck = shuffle(flagsAndPairs);

function App() {
  // const [flippedCards, setFlippedCards] = useState([]);

  // const handleCardFlip = (id) => {
  //   setFlippedCards((prevFlippedCards) => [...prevFlippedCards, id]);
  // };

  // if (!matched) {
  //   setFlippedCards([]);
  // }

  return (
    <div className="App">
      <h1>FLAGS OF THE WORLD MEMORY</h1>
      <h1>Score: </h1>
      <Cardlist cards={flagsAndPairs} />
    </div>
  );
}

export default App;
