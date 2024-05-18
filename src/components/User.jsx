import React, { useEffect, useState } from "react";
import Userinfo from "./userdetails";

function User() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [counter, setcounter] = useState(5);
 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("profile.json")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newuser = {
            id: counter,
            name: name,
            email: email,
          };
          setcounter((currentcounter) => currentcounter + 1);
          setUsers((currentuserstate) => [...currentuserstate, newuser])
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>
        <button className="bg-gray-800 mt-3 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
          Add user
        </button>
      </form>
      <br />
      {users.map((user) => (
        <Userinfo key={user.id} user={user} setusers={setUsers} />
      ))}
    </div>
  );
}

export default User;
