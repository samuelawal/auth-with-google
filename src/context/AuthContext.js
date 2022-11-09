import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [users, setUsers] = useState({})

    const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
      signOut(auth)
  }

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
     setUsers(currentUser)
    });
    return () =>{
      unsuscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, users }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
