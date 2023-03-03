import React, { useState } from "react";
import Heading from "./Heading";
import "./App.css";
function App() {
  const [word, setWord] = React.useState("Eat");
  // can't use the state's setting variable from your state directly.
  //  Instead of updating it directly, I can update it based on a click event.
  function handleClick() {
    setWord("drink");
  }
  return (
    <div className="App">
      <Heading message={word + " at little lemon"} />
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}

export default App;
