import React, { useEffect, useState } from "react";

function Userinfo({ user, setusers }) {
  const [isEditing, setIsEditing] = useState(false);
  const [Username, setusername] = useState(user.name);
  const [Useremail, setuseremail] = useState(user.email);

  console.log(isEditing);
  return (
    <div key={user.id}>
      <button
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
        onClick={() => {
          setIsEditing((currentstate) => !currentstate);
        }}
      >
        edit
      </button>
      <button
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
        onClick={() => {
          setusers((currentuserstate) =>
            currentuserstate.filter((currentuser) => currentuser.id !== user.id)
          );
        }}
      >
        delete
      </button>

      {isEditing && (
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
          onClick={() => {
            setusers((currentuserstate) =>
              currentuserstate.map((currentuser) =>
                currentuser.id === user.id
                  ? { ...currentuser, name: Username, email: Useremail }
                  : currentuser
              )
            );
            setIsEditing(false);
          }}
        >
          save
        </button>
      )}
      <br />
      <b>ID:</b>
      <span className="text-red-500 text-xl font-semibold hover:underline">
        {user.id}
      </span>
      <br />
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
            setuseremail(e.target.value);
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


export default Userinfo;
