import Image from 'next/image'
import Navigation from './components/Navigation';
import HomeCarousel from './components/HomeCarousel';
import Footer from './components/Footer';
import { tarrgetFont } from './font/font';

export const metadata = {
  title: 'Home Page',
  description: 'Hoppy Bairs Home'
}
 

export default function Home() {

  return (
    <>
    <div className="row p-2">
        <div className="col-md-2"><br /></div>
        <div id="introh1" className="col-md-4 my-3 my-md-0 p-2 text-center homeCard"><h1 className={`${tarrgetFont.className} text-start ps-2 introH1`}>Hoppy Bairs</h1>
          <HomeCarousel />
        </div>
        <div className="col-md-4 my-3 my-md-0 p-2 d-flex align-items-center homeCard"><p className="introP">Hoppy Bairs is a team of Super Smash Bros. Ultimate players and tournament organizers based in the Santa Rosa, CA area. We specialize in hosting fun tournaments with both the competitive Smash player and the first-timer in mind. Our team loves playing Smash, supporting our community, and drinking good beer. Hoppy Bairs founder Rodolfo &quot;SR-SOUL&quot; Zarate has been hosting smash tournaments all around Sonoma County for about a decade now. He and the team have also been visiting breweries up and down California and beyond. Come visit one of our tournements at our partner venues for a friendly, competitive, and fun evening!</p>
        </div>
        <div className="col-md-2"><br /></div>
    </div>
      
    <div className="row events p-2">
        <div className="col-md-2"><br /></div>

        <div className="col-md-4 p-5 my-3 my-md-0 homeCard d-flex justify-content-center align-items-center"><p className='nextEvent'>Our next event is: <span className="fs-1">01/03/23 6:00pm</span><br />at <span className="fs-1">Hen House Santa Rosa</span></p> </div>
        <div className="col-md-4 p-5 my-3 my-md-0 homeCard d-flex justify-content-center align-items-center">
          <Image
            src="/img/henhouse.png"
            height={200}
            width={300}
            alt="henhouse logo"
          /> </div>
        <div className="col-md-2"><br /></div>
    </div>
    <div className="row p-2 links">
        <div className="col-md-2"><br /></div>
        <div className="col-md-8 homeCard">

          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-4 venueCard">
                <h3 className="">HenHouse: Santa Rosa</h3>
                <Image
                  src="/img/venue/henhouse-sr.jpg"
                  height={200}
                  width={300}
                  alt="HenHouse, Santa Rosa"
                />
                <p>322 Bellevue Ave <br /> Santa Rosa, CA 95407</p>
              </div>
              
              <div className="col-12 col-md-6 col-xl-4 venueCard">
                <h3>HenHouse: Petaluma</h3>
                <Image
                  src="/img/venue/henhouse-petaluma.jpg"
                  height={200}
                  width={300}
                  alt="HenHouse, Petaluma"
                />
                <p>1333 N McDowell Blvd <br /> Petaluma, CA 94954</p>
              </div>

              <div className="col-12 col-md-6 col-xl-4 venueCard">
                <h3>Flagship: Windsor</h3>
                <Image
                  src="/img/venue/flagship-windsor.jpg"
                  height={200}
                  width={300}
                  alt="Flagship, Windsor"
                />
                <p>1001 McClelland Dr <br /> Windsor, CA 95492</p>
              </div>
            </div>

          </div>{/*--- END OF VENUE CONTAINER --*/}


        </div>
        <div className="col-md-2"><br /></div>
      </div>
      
    </>  
  )
};


