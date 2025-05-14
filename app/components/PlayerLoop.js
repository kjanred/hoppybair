import Image from 'next/image';
import { tarrgetFont } from '../font/font';


const players = [
    { id: 1, name: 'shikari', imgsrc: 'samus.png', alt: 'Default Samus' },
    { id: 2, name: 'LAN', imgsrc: 'snake.png', alt: 'camo Snake' },
    { id: 3, name: 'Malcolm X', imgsrc: 'captain.png', alt: 'Default Captain Falcon' },
    { id: 4, name: 'kelp', imgsrc: 'kirby.png', alt: 'dark Kirby' },
    { id: 5, name: 'Cockerlking', imgsrc: 'yink.png', alt: 'white young link' },
    { id: 6, name: 'Fooigi', imgsrc: 'luigi.png', alt: 'default luigi' },  
    { id: 7, name: 'NPC', imgsrc: 'bloodcaptain.png', alt: 'dark red captain falcon' }, 
    { id: 8, name: 'Backflip', imgsrc: 'whitesamus.png', alt: 'White Samus' },
    { id: 9, name: 'Ramone', imgsrc: 'sleepjiggs.png', alt: 'Sleep Hat Jigglypuff' },
    { id: 10, name: 'tax fraud', imgsrc: 'blackincin.png', alt: 'Black Incineroar' },
    { id: 11, name: 'Alphie', imgsrc: 'pplant.png', alt: 'Piranha Plant' },
    { id: 12, name: 'Jemrock', imgsrc: 'yellowmegaman.png', alt: 'Yellow Mega Man' },
    { id: 13, name: 'Manjoe', imgsrc: 'pinkbanjo.png', alt: 'Pink Banjo and Kazooie' },
    { id: 14, name: 'SR-SOUL', imgsrc: 'mario.png', alt: 'Default Mario' },
    

]

export default function PlayerLoop() {
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