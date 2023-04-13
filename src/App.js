import React from "react";
import { useState } from "react";
import Cardlist from "./Cardlist";
// import Options from "./Options";
// import Score from "./Score";

const cards = [
  { id: 1, front: "media/FS.png", back: "imgs/1f004.png" },
  { id: 2, front: "media/FS.png", back: "imgs/1f0cf.png" },
  { id: 3, front: "media/FS.png", back: "imgs/1f170-fe0f.png" },
  { id: 4, front: "media/FS.png", back: "imgs/1f171-fe0f.png" },
  { id: 5, front: "media/FS.png", back: "imgs/1f17e-fe0f.png" },
  { id: 6, front: "media/FS.png", back: "imgs/1f17f-fe0f.png" },
  { id: 7, front: "media/FS.png", back: "imgs/1f18e.png" },
  { id: 8, front: "media/FS.png", back: "imgs/1f191.png" },
  { id: 9, front: "media/FS.png", back: "imgs/1f192.png" },
  { id: 10, front: "media/FS.png", back: "imgs/1f193.png" },
  { id: 11, front: "media/FS.png", back: "imgs/1f194.png" },
  { id: 12, front: "media/FS.png", back: "imgs/1f195.png" },
  { id: 13, front: "media/FS.png", back: "imgs/1f196.png" },
  { id: 14, front: "media/FS.png", back: "imgs/1f197.png" },
  { id: 15, front: "media/FS.png", back: "imgs/1f198.png" },
  { id: 16, front: "media/FS.png", back: "imgs/1f199.png" },
  { id: 17, front: "media/FS.png", back: "imgs/1f19a.png" },
  { id: 18, front: "media/FS.png", back: "imgs/1f1e6-1f1e8.png" },
  { id: 19, front: "media/FS.png", back: "imgs/1f1e6-1f1e9.png" },
  { id: 20, front: "media/FS.png", back: "imgs/1f1e6-1f1ea.png" },
  { id: 21, front: "media/FS.png", back: "imgs/1f1e6-1f1eb.png" },
  { id: 22, front: "media/FS.png", back: "imgs/1f1e6-1f1ec.png" },
  { id: 23, front: "media/FS.png", back: "imgs/1f1e6-1f1ee.png" },
  { id: 24, front: "media/FS.png", back: "imgs/1f1e6-1f1f1.png" },
  { id: 25, front: "media/FS.png", back: "imgs/1f1e6-1f1f2.png" },
  { id: 26, front: "media/FS.png", back: "imgs/1f1e6-1f1f4.png" },
  { id: 27, front: "media/FS.png", back: "imgs/1f1e6-1f1f6.png" },
  { id: 28, front: "media/FS.png", back: "imgs/1f1e6-1f1f7.png" },
  { id: 29, front: "media/FS.png", back: "imgs/1f1e6-1f1f8.png" },
  { id: 30, front: "media/FS.png", back: "imgs/1f1e6-1f1f9.png" },
  { id: 1, front: "media/FS.png", back: "imgs/1f004.png" },
  { id: 2, front: "media/FS.png", back: "imgs/1f0cf.png" },
  { id: 3, front: "media/FS.png", back: "imgs/1f170-fe0f.png" },
  { id: 4, front: "media/FS.png", back: "imgs/1f171-fe0f.png" },
  { id: 5, front: "media/FS.png", back: "imgs/1f17e-fe0f.png" },
  { id: 6, front: "media/FS.png", back: "imgs/1f17f-fe0f.png" },
  { id: 7, front: "media/FS.png", back: "imgs/1f18e.png" },
  { id: 8, front: "media/FS.png", back: "imgs/1f191.png" },
  { id: 9, front: "media/FS.png", back: "imgs/1f192.png" },
  { id: 10, front: "media/FS.png", back: "imgs/1f193.png" },
  { id: 11, front: "media/FS.png", back: "imgs/1f194.png" },
  { id: 12, front: "media/FS.png", back: "imgs/1f195.png" },
  { id: 13, front: "media/FS.png", back: "imgs/1f196.png" },
  { id: 14, front: "media/FS.png", back: "imgs/1f197.png" },
  { id: 15, front: "media/FS.png", back: "imgs/1f198.png" },
  { id: 16, front: "media/FS.png", back: "imgs/1f199.png" },
  { id: 17, front: "media/FS.png", back: "imgs/1f19a.png" },
  { id: 18, front: "media/FS.png", back: "imgs/1f1e6-1f1e8.png" },
  { id: 19, front: "media/FS.png", back: "imgs/1f1e6-1f1e9.png" },
  { id: 20, front: "media/FS.png", back: "imgs/1f1e6-1f1ea.png" },
  { id: 21, front: "media/FS.png", back: "imgs/1f1e6-1f1eb.png" },
  { id: 22, front: "media/FS.png", back: "imgs/1f1e6-1f1ec.png" },
  { id: 23, front: "media/FS.png", back: "imgs/1f1e6-1f1ee.png" },
  { id: 24, front: "media/FS.png", back: "imgs/1f1e6-1f1f1.png" },
  { id: 25, front: "media/FS.png", back: "imgs/1f1e6-1f1f2.png" },
  { id: 26, front: "media/FS.png", back: "imgs/1f1e6-1f1f4.png" },
  { id: 27, front: "media/FS.png", back: "imgs/1f1e6-1f1f6.png" },
  { id: 28, front: "media/FS.png", back: "imgs/1f1e6-1f1f7.png" },
  { id: 29, front: "media/FS.png", back: "imgs/1f1e6-1f1f8.png" },
  { id: 30, front: "media/FS.png", back: "imgs/1f1e6-1f1f9.png" },
];

function shuffle(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

const newDeck = shuffle(cards);

console.log(newDeck);

function App() {
  return (
    <div className="App">
      <Cardlist cards={cards} />
    </div>
  );
}

export default App;
