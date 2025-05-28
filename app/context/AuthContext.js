'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseConfig';

const AuthContext = createContext(); 

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(null);



  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error during Google sign-in");
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  const checkUser = async (user) => {
    if (!user) {
      setIsAuthorized(false);
      return;
    }


    try {
      const userDocRef = doc(db, "authorizedUsers", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        setIsAuthorized(true);
        console.log("docsnap is true");
      } else {
        setIsAuthorized(false);
        console.log("docsnap is false");
        await signOut(auth);
      }
    } catch (error) {
      console.error("Error checking authorization:", error);
      setIsAuthorized(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      await checkUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = {
    googleSignIn,
    logOut,
    currentUser,
    isAuthorized
  }


  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>

  )
};

export const useAuth = () => {
  return useContext(AuthContext);
}

