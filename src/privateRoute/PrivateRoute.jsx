import React, { useContext } from 'react'
import { AuthContext } from '../layouts/MainLayout'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({children}) {

    const {loading} = useContext(AuthContext)

    const {user} = useContext(AuthContext)
    if(loading) {
      return <h1>loading...</h1>
    }
    if(!user) {
        return <Navigate to={'/login'}></Navigate>
    }

    

    console.log(children)
    return (
        <div>
            {
                children
            }
        </div>
    )
}
