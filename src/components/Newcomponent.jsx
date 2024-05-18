import React, { useEffect, useState } from "react";

function Newcomponent() {
    const [counter, setcounter] = useState(0);
    const [toggle, settoggle] = useState(false);



    useEffect(() => {
        console.log("rendaring...")
        document.title = "changed by useEffect " + counter; 
    }, [toggle])
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => {
            console.log(err);
            console.log("error is happend");
          });
    } )
  return (
      <div>
          you have clicked button {counter} times
          <br />
      <button
        onClick={() => {
          setcounter((a)=> 
              a + 1
          );
        }}
      >
        increase
          </button>
          <button onClick={() => {
              settoggle((change) => !change )
       } } >runuseeffect</button>   
    </div>
  );
}

export default Newcomponent;
