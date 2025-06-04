import React, { createContext, useContext, useState, useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../firebase/firebaseConfig';
import { isAdmin as checkIsAdmin } from '../utils/adminUIDs';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdminUser, setIsAdminUser] = useState(false);
  const router = useRouter();

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
      console.error("Error logging out:", error.message);
      alert(`Error during logging out`);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        const adminStatus = checkIsAdmin(user.uid);
        setIsAdminUser(adminStatus);

        if (!adminStatus) {
          console.warn(`Unauthorized user ${user.email}. Logging out.`);
          alert(`${user.displayName} is not an authorized user. Logging out`);
          await signOut(auth);
          router.push('/');
        }
      } else {
        setCurrentUser(null);
        setIsAdminUser(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();

  }, [router]);

  const value = {
    currentUser,
    loading,
    isAdminUser,
    googleSignIn,
    logOut
  };

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
    
  );
};
  
