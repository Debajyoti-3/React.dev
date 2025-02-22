import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //useState hook
  let [counter, setCounter] = useState(10);

  //let counter = 5;

  // counter increase function
  const addValue = () => {
    if(counter<=19){
    counter = counter +1;
    setCounter(counter)
    }
  }

  // counter decrease function
  const removeValue = () =>{
    if(counter>0){
    counter = counter-1;
    setCounter(counter)
    }
  }

  return (
    <>
      <h1>React aur Rick</h1>
      <h2>Counter Value = {counter}</h2>

      <button
      onClick={addValue}>Add value {counter}</button>
      <br/> <br />
      <button
      onClick={removeValue}>Remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
