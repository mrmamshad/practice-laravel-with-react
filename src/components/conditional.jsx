import {  useState } from "react";

function Conditional({ name, isKnowledgeable }) {
  const [isChecked, setIsChecked] = useState(false);

  function chackToggle() {
      setIsChecked(!isChecked);
      console.log("input checked...")
      
    }
    


  
const listItem = isKnowledgeable ? <li>{name + " ✔"}</li> : <li>{name}</li>;

  return (
    <>
      <div className="flex gap-3">
              <input
                  type="checkbox"
                  name=""
                  id="" 
                  onChange={chackToggle} />
        <ul>{isChecked ? <DeleteItem name={name} /> : listItem}</ul>
      </div>
    </>
  );
}


function DeleteItem({ name }) {
  return <del>{name}</del>;
}
export default Conditional;
