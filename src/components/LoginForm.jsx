import React from 'react'

function LoginForm() {
  return (
      <form action="" className='ml-5 mt-2' >
          <label htmlFor="username">Username</label>
          <br />
      <input type="text" id='username' onChange={(e) => {
        console.log(e.target.value);
        console.log("value targeted");
          } }  />
          <br />
          <label htmlFor="password">password</label>
          <br />
          <input type="password" id='password' />
          <br />
          <button className='mt-4 border rounded-lg    px-3 py-1 bg-slate-600 text-white  ' >Login</button>
  </form>
  )
}

export default LoginForm
