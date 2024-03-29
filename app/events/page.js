import Image from 'next/image';
import { tarrgetFont } from '../font/font';
import resultsGraphic from '@/public/res-placeholder.png'
import ResultsAccordian from '../components/ResultsAccordian';

export const metadata = {
  title: 'Events | HB',
  description: 'Welcome to the Events page. Here you can find information about our next event, our schedule of future events, and the results of past events and past results graphics.'
}
 

const imageStyle = {
  width: '100%',
  height: 'auto'
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
          
        
              <table className='table table-bordered'>
                  <thead><tr><th>MON</th><th>TUE</th><th>WED</th><th>THUR</th><th>FRI</th><th>SAT</th><th>SUN</th></tr></thead>
                  <tbody><tr><td>Iron Ox<br />4:00pm</td> <td></td><td>Flagship<br /> 5:00pm</td><td></td><td></td><td>HH: Santa Rosa<br />5:00pm</td><td>HH: Petaluma<br />5:00pm</td></tr></tbody>
                </table>
              
                
        
        </div>

        <div className="col-md-2"><br /></div>
      </div>
      
      <div className="row p-2">
        <div className="col-md-2"><br /></div>
        <div className="col-md-8 my-3 my-md-0 p-5 text-center homeCard">

          <Image
            src={resultsGraphic}
            alt="results graphic"
            style={imageStyle}
          />

        </div>
        <div className="col-md-2"><br /></div>
      </div>
      
      <div className="row p-2">
        <div className="col-md-2"><br /></div>
        <div className="col-md-8 my-3 my-md-0 p-5 text-center homeCard">

        <ResultsAccordian />
          
        </div>
        <div className="col-md-2"><br /></div>
    </div>
    </>
    
  )
}


