import React from 'react'
import { login } from '../../helpers/helpers'
export default function UserLogin() {
  const signIn = (e) => {
    e.preventDefault()  
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    
    login(email, password).then(user =>{
      if(user){
        location.replace('/')
      }
    })
  } 
  return (
    <div className="container">
      <form onSubmit={signIn}>
        <label>
          Email
          <input id="email" type="email" required />
        </label>
        <label>
          Password
          <input id='password' type="password" required />
        </label>
        <input type="submit" value='Login' id="submit" />
      </form>
    </div>
  )
}
