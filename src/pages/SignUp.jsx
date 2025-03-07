import React, { useContext } from 'react'
import { AuthContext } from '../layouts/MainLayout'
import { Link } from 'react-router-dom'

export default function SignUp() {

    const {handleSignUp} = useContext(AuthContext)

    const handleSubmit = (event) => {
      event.preventDefault()
      const form = new FormData(event.target)
    //   const name = form.get('name')
      const email = form.get('email')
      const password = form.get('password')
      const conPassword = form.get('conPassword')
    //   console.log(email, password, name, conPassword)

        if(password != conPassword) {
            alert('Password did not match')
            return
        }
        handleSignUp(email, password)

    }
    
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        Name: <input name='name' type="text" />
        <br />
        Email: <input name='email' type="email" />
        <br />
        Password: <input name='password' type="password" />
        <br />
        Confirm Password: <input name='conPassword' type="password" />
        <br />
        <input type="submit" value={'Submit'} />
      </form>
      <Link to={'/login'}><button>Login</button></Link>
    </div>
  )
}
