import { useState } from 'react'
import Card from './Component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className= ' text-black p-10 rounded-2xl bg-amber-500 font-bold font-serif mb-4'>Tailwind CSS</h1>

    // Card component using dev.UI library
    <Card username='Rick' />
    <Card username='Hardik'/>
      
    </div>
  )
}

export default App
