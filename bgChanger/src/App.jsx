import { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState("#173737");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          className="fixed flex flex-wrap justify-center
        bottom-15 inset-x-0 px-2"
        >
          <div
            className="flex flex-wrap justify-center gap-5
          shadow-lg bg-white px-0.5 py-0.5 rounded-3xl h-10"
          >
            <button
              onClick={()=>{setColor("cyan")}}
              className="outline-none px-4 rounded-3xl shadow-lg"
              style={{ backgroundColor: "cyan" }}
            >
              Red
            </button>
            <button
              onClick={()=>{setColor("yellow")}}
              className="outline-none px-4 rounded-3xl shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={()=>{setColor("purple")}}
              className="outline-none px-4 rounded-3xl shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={()=>{setColor("green")}}
              className="outline-none px-4 rounded-3xl shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={()=>{setColor("pink")}}
              className="outline-none px-4 rounded-3xl shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Green
            </button>
            <button
              onClick={()=>{setColor("red")}}
              className="outline-none px-4 rounded-3xl shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
