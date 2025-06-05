'use client'

import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig'; 
import Image from 'next/image';
import { tarrgetFont } from '../font/font';





export default function PlayerLoop() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        setLoading(true);
        setError(null);
        const playersList = [];
        const querySnapshot = await getDocs(collection(db, 'players'));
        querySnapshot.forEach((doc) => {
          playersList.push({ id: doc.id, ...doc.data() });
        });
        setPlayers(playersList);
      } catch (err) {
        console.error("Error fetching players:", err);
        setError("Failed to load players. Please try again");
      } finally {
        setLoading(false);
      }
    };
    fetchPlayers();
  }, []);

  if (loading) {
    return <p>Loading players...</p>;
  }

  if (error) {
    return <p>{error}</p>
  }

  if (players.length === 0) {
    return <p>No players found</p>;
  }

    return (
        <>
        
            {players.map((player) => (

<div className='col-12 col-md-3 text-center' key={player.id}>
<span className={`${tarrgetFont.className} playername`}>{player.name}
  <Image
    src={'/img/'+`${player.imgsrc}`}
    width={100}
    height={100}
    quality={100}
    alt={player.alt}
  />
</span>
</div>     
            ))}
            
        </>

        
    );
}