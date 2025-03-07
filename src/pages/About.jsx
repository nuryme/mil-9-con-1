import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../layouts/MainLayout'

export default function About() {
    const {user} = useContext(AuthContext)
  return (
    <div>
      This is about page
      <p className={''}>{user?.displayName}</p>
      <Link to={'/about/ph'}><button>PH</button></Link>
    <Outlet></Outlet>
    </div>
  )
}
