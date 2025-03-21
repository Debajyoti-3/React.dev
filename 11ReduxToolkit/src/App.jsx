import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './componenets/AddTodo'
import Todos from './componenets/Todos'

function App() {
  

  return (
    <div>
      <div>Learn about Redux-Toolkit</div>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
