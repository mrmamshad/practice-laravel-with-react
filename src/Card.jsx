import React from "react";

function Card(props) {
    // eslint-disable-next-line react/prop-types
  const { username = "guest" , age, programmer } = props;

  return (
    <>
      <h1>Name : {username}</h1>
      <h2>Age = {age}</h2>
      <h2>He is a {programmer ? "programmer" : "not programmer"}</h2>
    </>
  );
}

export default Card;
//src="https://i.ibb.co/GTczMQY/1.jpg"

//  <div className="card ml-16 w-96 bg-base-100 shadow-xl flex flex-row">
//     <div className={'w-28 h-28 rounded-full overflow-hidden'} >
//         <img  src="https://i.ibb.co/GTczMQY/1.jpg" alt="Shoes"/>
//     </div>

//     <div className="card-body flex-grow">
//         <h2 className="card-title">{username}!</h2>
//         <p>A failer programmer who are trying to improve day by day </p>
//         <div className="card-actions justify-end">
//             <button className="btn btn-primary">Upgrade</button>
//         </div>
//     </div>
// </div>
