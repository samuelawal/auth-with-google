import React from 'react'
import { UserAuth } from '../context/AuthContext'
const Account = () => {
    const {users, logOut} = UserAuth()

    const handleSignOut = async() => {
        try{
            await logOut()
        }catch(err) {
            console.log(err)
        }
    }
  return (
    <div className='container'>
        <h2>Account</h2>
        <p>Welcome {users?.displayName}</p>
        <button className='log_out' onClick={handleSignOut}>Log out</button>
    </div>
  )
}

export default Account