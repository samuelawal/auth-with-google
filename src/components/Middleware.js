import React from 'react'
import {Navigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Middleware = ({children}) => {
    const {users} = UserAuth()
    if(!users) {
        return <Navigate to='/'/>
    }
    else{
        return children
    }
}

export default Middleware