import React, { useState } from "react";

export default function Card({card}) {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => {
        setFlip(!flip);
      }}
    >
      {flip ? <img src={card.back} alt="" /> : <img src={card.front} alt="" />}
    </div>
  );
}
