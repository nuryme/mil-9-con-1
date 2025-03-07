import React, { useContext } from 'react'
import { AuthContext } from '../layouts/MainLayout'
import { Link } from 'react-router-dom'

export default function Login() {

    const {handleSignIn} = useContext(AuthContext)

    const handleSubmit = (event) => {
      event.preventDefault()
      const form =new FormData(event.target)
      const email = form.get('email')
      const password = form.get('password')
      console.log(email, password)

      handleSignIn(email, password)
    }
    
  return (
    <div>
      <form action=""  onSubmit={handleSubmit}>
        Email: <input name='email' type="email" />
        <br />
        Password: <input  name='password' type="password" />
        <br />
        <input type="submit" value={'Submit'} />
      </form>
      <Link to={'/'}><button>Home</button></Link>

    </div>
  )
}
