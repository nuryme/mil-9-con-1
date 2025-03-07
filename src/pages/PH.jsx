import React, { useContext } from 'react'
import { AuthContext } from '../layouts/MainLayout'

export default function PH() {

    const {name} = useContext(AuthContext)
  return (
    <div>
      This is PH page
      <p>{name}</p>
    </div>
  )
}
