import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { tarrgetFont } from '../font/font';

export default function Events() {


  return (
  <>
    <div className="row p-2">
        <div className="col-md-2"><br /></div>
              <div id="introh1" className="col-md-8 my-3 my-md-0 p-2 text-center homeCard"><h1 className={`${tarrgetFont.className} text-start ps-2 introH1`}>Next Event: </h1>
              <p className='nextEvent'>Our next event is: <span className="fs-1">01/03/23 6:00pm</span><br />at <span className="fs-1">Hen House Santa Rosa</span></p> 
       
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
    </>
    
  )
}


