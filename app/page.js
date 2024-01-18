import Image from 'next/image'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { tarrgetFont } from './font/font';

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
        <div id="introh1" className="col-md-4 text-center justify-content-center homeCard"><h1 className={`${tarrgetFont.className} text-danger`}>Hoppy Bairs</h1>
          <Image 
            src="/img/controller.jpg"
            height={200}
            width={350}
            alt="weed controller"
          />
        </div>
        <div className="col-md-4 homeCard"><p className="introP">Welcome to the new website for the Hoppy Bairs, the centralized location for information about the org and our Smash Ultimate events in the Sonoma County area.</p>
        </div>
        <div className="col-md-2"><br /></div>
    </div>
      
    <div className="row events p-2">
        <div className="col-md-2"><br /></div>
        <div className="col-md-4 homeCard"><p>Our next event is: <span className="fs-1">01/03/23 6:00pm</span><br />at <span className="fs-1">Hen House Santa Rosa</span></p> </div>
        <div className="col-md-4 homeCard">
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


