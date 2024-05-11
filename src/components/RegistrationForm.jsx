import React from "react";
import { useState } from "react";

function RegistrationForm() {
  const [formdata, setformdata] = useState({
    username: "",
    password: "",
    Displayname: "",
  });
    console.log(formdata);
  return (
    <form action="" className="ml-5 mt-2">
      <label htmlFor="username">Username : </label>
      <input
        type="text"
        id="username"
        name="username"
        value={formdata.username}
        onChange={(e) => {
            setformdata((currentstate) => ({
             ...currentstate, 
             username: e.target.value,
         }));
        }}
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        name="password"
        value={formdata.password}
        onChange={(e) => {
            setformdata((currentstate) => ({
                ...currentstate,
                password:e.target.value,
          })  );
        }}
      />
      <br />
      <label htmlFor="Displayname">Displayname: </label>
      <input
        type="text"
        id="Displayname"
        name="Displayname"
        value={formdata.Displayname}
        onChange={(e) => {
            setformdata((currentstate) => ({
                ...currentstate,
                Displayname:e.target.value
          }));
        }}
      />
      <br />
      {/* <button
        disabled={isDisabled}
        className="mt-4 border rounded-lg    px-3 py-1 bg-slate-600 text-white  "
      >
        Sign up
      </button> */}
      <dir>
        <span>
          {" "}
          <b>Username</b> : {formdata.username}
        </span>
        <br />
        <span>
          {" "}
          <b>Password</b> : {formdata.password}
        </span>
        <br />
        <span>
          {" "}
          <b>Displayname</b> : {formdata.Displayname}
        </span>
      </dir>
    </form>
  );
}

export default RegistrationForm;
