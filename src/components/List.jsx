import React from "react";

function List({data = [], catagorties = "catagorties"}) {
  // const data = ["apple", "sakib", "banana", "mango"];

  // detailsoffruits.sort((a, b) => b.price - a.price);
  // filter if  color is red then display otherwise not display
  // const redcolorfruits = detailsoffruits.filter((item) => item.color === "red");
  // data.push("cherry");
  // data.sort();
  const froutitems = data.map((item) => (
    <li key={item.id}>{item.name}</li>
  ));
  return (
    <div className="m-5">
      <h3 className="font-bold m-5  text-3xl " >{catagorties}</h3>
      <ol className="mL-5">{froutitems}</ol>
    </div>
  );
}

export default List;
