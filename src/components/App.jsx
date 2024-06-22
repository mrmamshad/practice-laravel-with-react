import { useState } from "react";
import List from "./List";


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
  const detailsoffruits = [
    { id: 1, name: "apple", color: "red", price: 100 },
    { id: 2, name: "banana", color: "yellow", price: 200 },
    { id: 3, name: "mango", color: "green", price: 300 },
    { id: 4, name: "sakib", color: "red", price: 400 },
    { id: 5, name: "cherry", color: "red", price: 500 },
  ];
  const items = [
    { id: 6, name: "item1", color: "red", price: 100 },
    { id: 7, name: "item2", color: "yellow", price: 200 },
    { id: 83, name: "item3", color: "green", price: 300 },
    { id: 9, name: "item4", color: "red", price: 400 },
    { id: 10, name: "item5", color: "red", price: 500 },
  ];

  return (
    // <div
    //   className={"w-full h-screen duration-300 "}
    //   style={{ backgroundColor: color }}
    // >
    //   <h1 className={"font-bold text-center uppercase"}>color changing app</h1>
    //   <div
    //     className={
    //       "fixed  bottom-0 left-0 right-0  flex justify-center  bg-blue-200"
    //     }
    //   >
    //     <div className={"flex gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl"}>
    //       <button
    //         className={
    //           "outline-none px-4 py-1 rounded-full  bg-[#666666] shadow-lg text-black"
    //         }
    //         onClick={() => setColor("#666666")}
    //       >
    //         change
    //       </button>
    //       <button
    //         className={
    //           "outline-none px-4 py-1 rounded-full bg-[#D6D1D3]  shadow-lg text-black"
    //         }
    //         onClick={() => setColor("#D6D1D3")}
    //       >
    //         change
    //       </button>
    //       <button
    //         className={
    //           "outline-none px-4 py-1 rounded-full bg-[#14B8A6]  shadow-lg text-black"
    //         }
    //         onClick={() => setColor("#14B8A6")}
    //       >
    //         change
    //       </button>
    //     </div>
    //   </div>
    // </div>
   <>
    <List data = {detailsoffruits} catagorties="fruits"/>
    <List data = {items} catagorties="Items"/>
 
  </>
   );
}

export default App;
