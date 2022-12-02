import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login user
  const Login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser= (userInfo)=> {
    return updateProfile(auth.currentUser, userInfo)
  }
   //signIn with GitHub
   const githubProvider= new GithubAuthProvider()
   const githubSignIn= ()=>{
       setLoading(true)
       return signInWithPopup(auth,githubProvider)
   }

  //logout user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

   //current logged in user
   useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("user observing");
      setLoading(false)
    });
    return ()=> unsubscribe()
  }, []);

  //context data
  const authInfo = {
    user,
    loading,
    signUp,
    Login,
    githubSignIn,
    logOut,
    updateUser

  };
  return (
    <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
  );
};

export default AuthProvider;
