import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import "./index.scss";
import Rounds from "./components/Rounds";

export default function App() {
  const [isMultipleSelected, setMultipleSelection] = useState(false);

  const handleSwitchButtonClick = () => {
    setMultipleSelection(true);
  };

  return (
    <div className="App">
      <Header />
      <Button handleSwitchButtonClick={handleSwitchButtonClick}>
        Switch To Multiple
      </Button>
      <Rounds isMultipleSelected={isMultipleSelected} />
    </div>
  );
}
