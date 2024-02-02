import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { tarrgetFont } from '../font/font';

export const metadata = {
  title: 'Events | HB',
  description: 'Welcome to the Events page. Here you can find information about our next event, our schedule of future events, and the results of past events and past results graphics.'
}
 
const imageContainer = {
  position: 'relative',
  overflow: 'hidden'
}

const imageStyle = {
  objectFit: 'contain'
}

export default function Events() {

  return (
  <>
    <div className="row p-2">
        <div className="col-md-2"><br /></div>
        <div className="col-md-8 my-3 my-md-0 p-5 text-center homeCard">

          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
          <h1 className={`${tarrgetFont.className} text-start ps-2 introH1`}>Next Event: </h1>
                <p className='nextEvent'>Our next event is: <span className="fs-1">01/03/23 6:00pm</span><br />at <span className="fs-1">Hen House Santa Rosa</span></p> 
              </div>
              <div className='col-md-6'>
        <Image
            src="/img/henhouse.png"
            height={200}
            width={300}
            alt="henhouse logo"
                />
                </div>
              </div>
          </div>

        </div>
        <div className="col-md-2"><br /></div>
    </div>
      
    <div className="row p-2">
        <div className="col-md-2"><br /></div>

        <div className="col-md-8 my-3 my-md-0 p-5 text-center homeCard">
          
        <div className='container'>
            <div className='row'>

              <div className='col-md-6'>
        
              <Image
            src="/cal-placeholder.png"
            height={200}
            width={300}
            alt="Calendar"
                />

              </div>
              <div className='col-md-6 text-start'>
              <table className='eventTable'>
                  <tr><th><p>MON</p></th><td><p>Iron Ox<br />4:00pm</p></td></tr> 
                  <tr><th><p>TUE</p></th><td></td></tr> 
                  <tr><th><p>WED</p></th><td><p>Flagship: Windsor<br />5:00pm</p></td></tr> 
                  <tr><th><p>THUR</p></th><td></td></tr> 
                  <tr><th><p>FRI</p></th><td></td></tr> 
                  <tr><th><p>SAT</p></th><td><p>HenHouse: Santa Rosa<br />5:00pm</p></td></tr> 
                  <tr><th><p>SUN</p></th><td><p>HenHouse: Petaluma<br />5:00pm</p></td></tr> 
                </table>
              
                </div>
              </div>
          </div>
        
        </div>

        <div className="col-md-2"><br /></div>
      </div>
      
      <div className="row p-2">
        <div className="col-md-2"><br /></div>
        <div className="col-md-8 my-3 my-md-0 p-5 text-center homeCard" style={imageContainer}>

          <Image
            src='/res-placeholder.png'
            fill={true}
            style={imageStyle}
            alt="results graphic"
          />

        </div>
        <div className="col-md-2"><br /></div>
    </div>
    </>
    
  )
}


