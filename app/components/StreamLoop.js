import Image from 'next/image';


const streamers = [
    { id: 1, name: 'HB Tournaments', imgsrc: 'logotrans.png', alt: 'HB Tournaments Twitch Avatar' },
    { id: 2, name: 'Manjoe', imgsrc: 'manjoe.png', alt: 'Manjoe Twitch Avatar' },
    { id: 3, name: 'LAN', imgsrc: 'lan.png', alt: 'LAN Twitch Avatar' }
    

]

export default function StreamLoop() {
    return (
        <>
        
            
            
            {streamers.map((streamer) => (

<div className='col-12 col-md-2 streamer' key={streamer.id}>
                          <h3 className='streamHeader'>{streamer.name}</h3>
                            <div className='square streamContainer mx-auto'>
                              <Image
                                src={'/img/team/'+`${streamer.imgsrc}`}
                                width={70}
                                height={70}
                                quality={100}
                                className='streamLogo'
                                alt={streamer.alt}
                                />
            
                          </div> 
                          </div>    
            ))}
            
        </>

        
    );
}