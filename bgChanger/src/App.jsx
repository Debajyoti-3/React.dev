import { useState } from 'react'



function App() {
  const [color, setColor] = useState("blue");

  return (
    <>
     <div className="min-h-screen bg-blue-500 text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold">Tailwind is working!</h1>
    </div>
    </>
  );
}

export default App
