import React from 'react'

export default function UserRegister() {
    const signUp = (e) =>{
        e.preventDefault()
    }
  return (
    <div className="container">
      <form onSubmit={signUp}>
        <label>
          Email
          <input type="email" required />
        </label>
        <label>
          Password
          <input type="password" required />
        </label>
        <input type="submit" value='Login' id="submit" />
      </form>
    </div>
  )
}
