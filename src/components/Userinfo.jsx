import React, { useState } from "react";

export function Userinfo({ user, setusers }) {
  const [isEditing, setIsEditing] = useState(false);
  const [Username, setusername] = useState(user.name);
  const [Useremail, setuseremail] = useState(user.email);

  console.log(isEditing);
  return (
    <div key={user.id}>
      <button
        className="bg-gray-800 hover:bg-gray-700 mr-5 text-white font-bold py-2 px-4  mt-2 border border-solid border-#F5FEFD rounded-lg"
        onClick={() => {
          setIsEditing((currentstate) => !currentstate);
        }}
      >
        edit
      </button>
      <button
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
        onClick={() => {
          setIsEditing((currentstate) => !currentstate);
        }}
      >
        delete
      </button>
      <br />
      <button onClick={() => console.log(user)}>save</button>
      <b>Username:</b>
      {isEditing ? (
        <input
          name="username"
          type="text"
          className="mb-5"
          value={Username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
      ) : (
        <span className="text-red-500 text-xl font-semibold hover:underline">
          {user.name}
        </span>
      )}
      <br />
      <b>Useremail:</b>
      {isEditing ? (
        <input
          name="email"
          type="email"
          className="mb-5"
          value={Useremail}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
      ) : (
        <span className="text-red-500 text-xl font-semibold hover:underline">
          {user.email}
        </span>
      )}
    </div>
  );
}
