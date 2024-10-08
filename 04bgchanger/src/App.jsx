import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  // function changeColor(color) {
  //   setColor(color);
  // }
  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-red-600"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-green-600"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-blue-600"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-yellow-400"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-pink-400"
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
