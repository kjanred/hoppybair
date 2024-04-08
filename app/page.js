import Image from 'next/image'
import HomeCarousel from './components/HomeCarousel';
import NextEvent from './components/NextEvent';
import { tarrgetFont } from './font/font';
import homeBG from '@/public/img/home-bg.jpg';
import ironOx from '@/public/img/venue-logo/iron-ox.jpg';
import henHouseSR from '@/public/img/venue-logo/henhouse-sr.jpg';
import henHouseP from '@/public/img/venue-logo/henhouse-p.jpg';
import fourLegs from '@/public/img/venue-logo/four-legs.jpg';
import indianValley from '@/public/img/venue-logo/indian-valley.jpg';


export const metadata = {
  title: 'Home | HB',
  description: 'Home page of the Hoppy Bair website. Please check out our Super Smash Bros Ultimate tournaments in the Sonoma County area.'
}

const homePanelStyle = {
  boxShadow: '0 0 40px 20px #00000080, inset 0 0 40px 20px #000000BF, inset 0 0 0 1000px #FFFFFF10',
  backgroundImage: `url(${homeBG.src})`,
  backgroundSize: 'cover'
}
 

export default function Home() {

  return (
    <>
    <div className="row p-2">
        <div className="col-md-2"><br /></div>
        <div style={homePanelStyle} className="col-md-8 my-3 my-md-0 p-2 pb-4 text-center homeCard"><h1 className={`${tarrgetFont.className} text-ce ps-2 main`}>Hoppy Bairs</h1>
          <HomeCarousel />
        
        </div>
        <div className="col-md-2"><br /></div>
    </div>
      
    <div className="row p-2">
        <div className="col-md-2"><br /></div>

        <div className="col-md-8 p-5 my-3 my-md-0 homeCard d-flex justify-content-center align-items-center">
         <NextEvent />
        </div>
        
        <div className="col-md-2"><br /></div>
      </div>
      

    <div className="row p-2 links">
        <div className="col-md-2"><br /></div>
        <div className="col-md-8 homeCard">

          <div className="container">
            <div className="row d-flex justify-content-center">

             <div className="col-12 col-md-4 venueCard">
                <Image
                  className='img-fluid'
                  src={henHouseSR}
                  alt="HenHouse, Santa Rosa"
                />
                <p> 322 Bellevue Ave<br />Santa Rosa, CA 95407</p>
              </div>
              
              <div className="col-12 col-md-4 venueCard">
                <Image
                  className='img-fluid'
                  src={henHouseP}
                  alt="HenHouse, Petaluma"
                />
                <p>1333 N McDowell Blvd <br />Petaluma, CA 94954</p>
              </div>

              <div className="col-12 col-md-4 venueCard">
                <Image
                  className='img-fluid'
                  src={ironOx}
                  alt="Iron Ox Brewing"
                  />
                  
                <p>3334 Industrial Dr <br />Santa Rosa, CA 95403</p>
              </div>
              <div className="col-12 col-md-4 venueCard">
                <Image
                  className='img-fluid'
                  src={fourLegs}
                  alt="Four Legs Brewing"
                />
                <p>2010 Elkins Way<br />Brentwood, CA 94513</p>
              </div>
              <div className="col-12 col-md-4 venueCard">
                <Image
                  className='img-fluid'
                  src={indianValley}
                  alt="Indian Valley Brewing"
                />
                <p>1016 Railroad Ave<br />Novato, CA 94945</p>
              </div>



            </div>

          </div>{/*--- END OF VENUE CONTAINER --*/}


        </div>
        <div className="col-md-2"><br /></div>
      </div>
      
    </>  
  )
};


