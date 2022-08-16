import React from 'react'
import { login } from '../../helpers/helpers'
import { useState } from 'react'
export default function UserLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleEmail = (e) => setEmail(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)
  const signIn = (e) => {
    e.preventDefault()  
    login({email, password})
    .then(user =>{
      if(user.token){
        sessionStorage.setItem('token', user.token)
      }
    }).then(() => {
      location.replace('/')
    })
  } 
  return (
    <div className="container">
      <form onSubmit={signIn}>
        <label>
          Email
          <input onChange={handleEmail} id="email" type="email" required />
        </label>
        <label>
          Password
          <input onChange={handlePassword} id='password' type="password" required />
        </label>
        <input type="submit" value='Login' id="submit" />
      </form>
    </div>
  )
}
