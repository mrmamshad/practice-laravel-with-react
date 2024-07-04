import React, { useState } from "react";

const Human = ["sabbir", "mamshad", "utso", "mahim"];
export const Array = () => {
  const [human, setHuman] = useState(Human);
  return (
    <div>
      <button
        className="border rounded-lg   mx-10 mt-5 px-3 py-1 bg-slate-600 text-white "
        onClick={() => {
          const newHuman = [...human];
          newHuman.push("radwan");
          newHuman.push("mahdi");
          setHuman(newHuman);
        }}
      >
       {human.length}
      </button>
      {human.map((name) => {
          return <div key={name}>{name}</div>;
        })}
      {console.log(human)}
    </div>
  );
};
