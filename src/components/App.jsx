/* eslint-disable no-unused-vars */
import { useState } from "react";



const peoples = [
  'c',
  'pyhton',
  "html",
  'css',
  'Javascript',
  'react',
  'php',
  'laravel'
];

function App() {
  const [color, setColor] = useState("#1F2937");
  return (
    <div
      className={"w-full h-screen duration-300 "}
      style={{ backgroundColor: color }}
    >
      <h1 className={"font-bold text-center uppercase"}>color changing app</h1>
      <div
        className={
          "fixed  bottom-0 left-0 right-0  flex justify-center  bg-blue-200"
        }
      >
        <div className={"flex gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl"}>
          <button
            className={
              "outline-none px-4 py-1 rounded-full  bg-[#666666] shadow-lg text-black"
            }
            onClick={() => setColor("#666666")}
          >
            change
          </button>
          <button
            className={
              "outline-none px-4 py-1 rounded-full bg-[#D6D1D3]  shadow-lg text-black"
            }
            onClick={() => setColor("#D6D1D3")}
          >
            change
          </button>
          <button
            className={
              "outline-none px-4 py-1 rounded-full bg-[#14B8A6]  shadow-lg text-black"
            }
            onClick={() => setColor("#14B8A6")}
          >
            change
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
