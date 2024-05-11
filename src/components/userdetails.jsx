import React from 'react'

function Userdetails(user) {
  return (
    <div key={user.id}>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
    </div>
  )
}

export default Userdetails
