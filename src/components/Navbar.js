import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
const Navbar = () => {
    const {users, logOut} = UserAuth()

    const handleSignOut = async() => {
        try{
            await logOut()
        }catch(err) {
            console.log(err)
        }
    }
  return (
    <nav>
        <div className='nav_Container'>
            <ul>
                <li><Link to="/" className='nav__link'>Home</Link></li>
                <li>
                    {users?.displayName ? <button className='nav__logOut' onClick={handleSignOut}>Logout</button> : <Link to="/signin" className='nav__link'>Sign in</Link>}    
                    </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar