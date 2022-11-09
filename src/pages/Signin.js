import {GoogleButton} from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react'

const Signin = () => {
    const { googleSignIn, users } = UserAuth();
    const navigate = useNavigate()
    const handleSignIn = async () => {
        try{
           const data = await googleSignIn()
          return data
        }catch(err) {
            console.log(err)
        }
    }
    useEffect(()=> {
      if(users != null) {
        navigate('/account')
      }
    }, [users])
  return (
    <div>
      <h2>Sign in</h2>
        <GoogleButton onClick={handleSignIn}/>
    </div>
  )
}

export default Signin