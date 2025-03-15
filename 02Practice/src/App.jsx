import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [like, setLike] = useState(0)
  const onLike = ()=>{
    setLike(like+1)
    alert(`Congrats! You hit the like button`)
  }

  return (
    <>
    <div>
      <h2>The Likes is: {like}</h2>
      <button onClick={onLike}>Hit Like</button>
    </div>
    </>
  );
}

export default App
