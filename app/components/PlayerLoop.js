import Image from 'next/image';
import { tarrgetFont } from '../font/font';


const players = [
    { id: 1, name: 'shikari', imgsrc: '/img/samus.png', alt: 'Default Samus' },
    { id: 2, name: 'LAN', imgsrc: '/img/snake.png', alt: 'Default Snake' },
    { id: 3, name: 'Malcolm X', imgsrc: '/img/captain.png', alt: 'Default Captain Falcon' }
]

export default function PlayerLoop() {
    return (
        <>
        
            {players.map((player) => (

<div className='col-12 col-md-3' key={player.id}>
<span className={`${tarrgetFont.className} playername`}>{player.name}
  <Image
    src={player.imgsrc}
    width={100}
    height={100}
    quality={100}
    alt={player.alt}
  />


</span>
</div>
                
                
            )

            )}
            
        </>

        
    );
}