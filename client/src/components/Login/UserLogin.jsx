import React from 'react'
import { login } from '../../helpers/helpers'
export default function UserLogin() {
  const signIn = (e) => {
    e.preventDefault()
    login('gerozwa49@g12312mail.com', 'callof1dutymw32').then(user =>{
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
