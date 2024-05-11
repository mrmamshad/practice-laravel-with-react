import React from "react";
import { memo } from "react";

function Navbar  ({ name = "sabbir" , age = 10 })  {
  console.log("Navbar is rendered");
  return(
        <div>
      <h1>I am a {name}</h1>
      <h2>age : {age}</h2>
    </div>
  )
};

export default Navbar;
