import "./App.css";

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  // let counter = 20;
  const addValue = () => {
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    console.log(counter);
  };
  const deleteCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>React Course {counter}</h1>
      <h2>Counter {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={deleteCounter}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
