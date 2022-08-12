import React from 'react'

export default function UserLogin() {
  return (
    <div className="container">
      <form>
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
