import Image from 'next/image';
import HenHouseSR from '@/public/img/venue-logo/henhouse-sr.jpg';
import HenHouseP from '@/public/img/venue-logo/henhouse-p.jpg';
import fourLegs from '@/public/img/venue-logo/four-legs.jpg';
import IronOx from '@/public/img/venue-logo/iron-ox.jpg';
import IndianValley from '@/public/img/venue-logo/indian-valley.jpg';

export default function LogoScroll() {
    return (
<div className="scroll-container">
      <div className="scroll-parent">
        <div className="innerShadow"></div>
                <div className="scroll-element primary">
                    <Image 
                        className='img-fluid'
                        src={HenHouseSR}
                        quality={100}
                        alt="Hen House Santa Rosa"
                    />
                    <Image 
                        className='img-fluid'
                        src={HenHouseP}
                        quality={100}
                        alt="Hen House Petaluma"
                    />
                    <Image 
                        className='img-fluid'
                        src={fourLegs}
                        quality={100}
                        alt="Four Legs Brewing"
                    />
                    <Image 
                        className='img-fluid'
                        src={IronOx}
                        quality={100}
                        alt="Iron Ox"
                    />
                    <Image 
                        className='img-fluid'
                        src={IndianValley}
                        quality={100}
                        alt="indian Valley"
                    />
        
      </div>
                <div className="scroll-element secondary">
                    <Image 
                        className='img-fluid'
                        src={HenHouseSR}
                        quality={100}
                        alt="Hen House Santa Rosa"
                    />
                    <Image 
                        className='img-fluid'
                        src={HenHouseP}
                        quality={100}
                        alt="Hen House Petaluma"
                    />
                    <Image 
                        className='img-fluid'
                        src={fourLegs}
                        quality={100}
                        alt="Four Legs Brewing"
                    />
                    <Image 
                        className='img-fluid'
                        src={IronOx}
                        quality={100}
                        alt="Iron Ox"
                    />
                    <Image 
                        className='img-fluid'
                        src={IndianValley}
                        quality={100}
                        alt="indian Valley"
                    />
        
      </div>
    </div>
                            </div>
        
                        );
                    }