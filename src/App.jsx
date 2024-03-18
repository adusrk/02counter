import './App.css'
import { useState } from 'react';

function App() {
  let [counter, setCounter] = useState(0)

  const addVal = () =>{
if (counter<20) {
      setCounter(counter + 1)
      console.log("Increasing value", Math.random())
  
}  };
  const decValue = () => {
if (counter>0) {
      setCounter(counter - 1)
      console.log("Decreasing value", Math.random())

  
}  }

  return (
    <>
    <h1>React counter</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addVal}>Add value</button>
    <br />
    <button onClick = {decValue}>Decrease value</button>
    </>
  )
}

export default App
