import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Coffee with react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={decreaseValue}>decrease value</button>
    </>
  );
}

export default App;
