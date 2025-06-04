'use client'

import Image from 'next/image';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';




export default function Dashboard() {

    const { googleSignIn, logOut, currentUser, isAdminUser, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading) {
            if (!currentUser) {
                console.log('No current user.');
                router.replace('/');
            } else if (!isAdminUser) {
                console.log('User is not an Admin');
                router.replace('/');
            }
        }
    }, [loading, currentUser, isAdminUser, router]);

    if (loading) {
        return <div>... loading dashboard</div>
    }
    if (!isAdminUser) {
        return <div>not an admin! </div>
        
    }
    
    
  return (
    <>
    <div className="row px-2">
        <div className="col-md-1"><br /></div>
              <div className="col-md-10 my-3 p-0 my-md-0 homeCard">
                  You made it! 
        </div>
        <div className="col-md-1"><br /></div>
    </div>
      
      

   
      
    </>  
  )
};


