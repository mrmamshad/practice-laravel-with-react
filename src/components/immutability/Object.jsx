import React, { useState } from "react";

const Human = {
  name: "sabbir",
  age: 20,
};

export const Object = () => {
  const [human, setHuman] = useState(Human);

  const changestate = () => {
    const newHuman = { ...human };
    newHuman.age = 22;
    (newHuman.name = "mamshad"), setHuman(newHuman);
  };
  return (
    <div>
      <button
        className="border rounded-lg   mx-10 mt-5 px-3 py-1 bg-slate-600 text-white "
        onClick={changestate}
      >
        {human.name}
      </button>
      {console.log(human)}
    </div>
  );
};
