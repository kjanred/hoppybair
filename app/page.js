import Image from 'next/image'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { tarrgetFont } from './font/font';
import { coolveticaFont } from './font/font';

export default function Home() {


  return (
    <div className="container-fluid p-0 main-container">
      <div className='row'>
        <div className='col heroIMG'>
          <Image 
            className='position-relative heroIMG'
            src='/img/hero.jpg'
            fill
            alt='hero'
            />
        </div>
      </div>

    
      <Navigation />
    
    <div className="row p-2">
        <div className="col-md-2"><br /></div>
        <div id="introh1" className="col-md-4 my-3 my-md-0 p-2 text-center justify-content-center homeCard"><h1 className={`${tarrgetFont.className} text-danger`}>Hoppy Bairs</h1>
          <Image 
            src="/img/controller.jpg"
            height={200}
            width={350}
            alt="weed controller"
          />
        </div>
        <div className="col-md-4 my-3 my-md-0 p-2 homeCard"><p className={`${coolveticaFont.className} introP`}>Hoppy Bairs is a team of Super Smash Bros. Ultimate players and tournament organizers based in the Santa Rosa, CA area and specialize in hosting fun tournaments with both the competitive Smash player and the first-timer in mind. We love playing Smash, supporting our community, and drinking good beer! Our founder, Rodolfo "SR-SOUL" Zarate has been hosting smash tournaments all around Sonoma County and has been visiting breweries up and down California and beyond! Come visit one of our tournements at the venues listed below and we will show you a good time.</p>
        </div>
        <div className="col-md-2"><br /></div>
    </div>
      
    <div className="row events p-2">
        <div className="col-md-2"><br /></div>
        <div className="col-md-4 p-2 my-3 my-md-0 homeCard"><p>Our next event is: <span className="fs-1">01/03/23 6:00pm</span><br />at <span className="fs-1">Hen House Santa Rosa</span></p> </div>
        <div className="col-md-4 p-2 my-3 my-md-0 homeCard">
          <Image
            src="/img/henhouse.png"
            height={200}
            width={300}
            alt="henhouse logo"
          /> </div>
        <div className="col-md-2"><br /></div>
    </div>
    <div className="row links">
        <div className="col-md-6 col-xl-3"></div>
        <div className="col-md-6 col-xl-3"></div>
        <div className="col-md-6 col-xl-3"></div>
        <div className="col-md-6 col-xl-3"></div>
    </div>
    <div className="row footer">
        <Footer />
    </div>
</div>
  )
}


