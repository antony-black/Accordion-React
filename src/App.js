import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import "./index.scss";
import { rounds } from "./constants/rounds";

function App() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [multiple, setMultiple] = useState([]);
  const [isMultipleSelected, setMultipleSelection] = useState(false);

  const handleSwitchButtonClick = () => {
    console.log("CLICK");
    setMultipleSelection(true);
  };

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
    <div className="App">
      <Header />
      <Button handleSwitchButtonClick={handleSwitchButtonClick}>
        Switch To Multiple
      </Button>
      <ul className="rounds">
        {rounds.map((round) => (
          <li
            key={round.id}
            className="round"
            onClick={
              isMultipleSelected
                ? () => handleMultipleSelection(round.id)
                : () => handleSingleSelection(round.id)
            }
          >
            <>
              <p className="question">
                {round.question} <span className="open-answer">+</span>
              </p>
              <p
                className={`answer ${
                  activeQuestion === round.id || multiple.includes(round.id)
                    ? "show"
                    : ""
                }`}
              >
                {round.answer}
              </p>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
