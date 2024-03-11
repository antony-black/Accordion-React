import React from "react";
import { useState } from "react";
import { rounds } from "../constants/rounds";
import Round from "./Round";

export default function Rounds ({isMultipleSelected}) {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    setActiveQuestion((prevActiveQuestion) =>
      prevActiveQuestion === id ? null : id
    );
  };

  const handleMultipleSelection = (id) => {
    if (multiple.includes(id)) {
      setMultiple((prev) => prev.filter((_id) => _id !== id));
    } else {
      setMultiple((prev) => [...prev, id]);
    }
    console.log(multiple);
  };
  
  return (
    <ul className="rounds">
    {rounds.map((round) => (
      <Round 
      key={round.id} 
      {...round} 
      isMultipleSelected={isMultipleSelected}
      activeQuestion={activeQuestion}
      multiple={multiple}
      handleSingleSelection={handleSingleSelection}
      handleMultipleSelection={handleMultipleSelection}
      />
    ))}
  </ul>
  )
}

 // <li
      //   key={round.id}
      //   className="round"
      //   onClick={
      //     isMultipleSelected
      //       ? () => handleMultipleSelection(round.id)
      //       : () => handleSingleSelection(round.id)
      //   }
      // >
      //   <>
      //     <p className="question">
      //       {round.question} <span className="open-answer">+</span>
      //     </p>
      //     <p
      //       className={`answer ${
      //         activeQuestion === round.id || multiple.includes(round.id)
      //           ? "show"
      //           : ""
      //       }`}
      //     >
      //       {round.answer}
      //     </p>
      //   </>
      // </li>