import Image from 'next/image';
import { tarrgetFont } from '../font/font';
import resultsGraphic from '@/public/res-placeholder.png'
import NextEvent from '../components/NextEvent';
import ResultsAccordian from '../components/ResultsAccordian';

export const metadata = {
  title: 'Events | HB',
  description: 'Welcome to the Events page. Here you can find information about our next event, our schedule of future events, and the results of past events and past results graphics.'
}
 



export default function Events() {


  return (
    <>
     
      <div className="row p-2">
      <h1 className={`${tarrgetFont.className} m-0 text-center main`}>Events</h1>
        <div className="col-md-1"><br /></div>
        <div className="col-md-4 homeCard">
          <NextEvent />
        </div>
        <div className="col-md-6 p-0 darkCard">
        <h2 className={`${tarrgetFont.className} subWhite text-end`}>Last Event</h2>

        <Image
                  className='mx-auto img-fluid'
            src={resultsGraphic}
            alt="results graphic"
                />

        </div>
      
        <div className="col-md-1"><br /></div>
    </div>
      
    <div className="row p-2">
        <div className="col-md-1"><br /></div>

        <div className="col-md-10 my-3 my-md-0 darkCard text-center">
          <h2 className='subWhite'><span className={tarrgetFont.className} >Monthly Schedule </span></h2>
         <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FLondon&showPrint=0&showNav=0&showTabs=0&showCalendars=0&showTz=0&title=Tournament%20Schedule&src=ODg5ZDhkZTY1ZTc1NzNkZmE4Yzc4YTVmMTM3MzVlMTYzMjU5MWE4NzUyMGQ2ZmQwYmRlOTZlMjcxZjEzYTQ5YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23616161" className='calendar' width="700" height="500"></iframe>
              
                
        
        </div>

        <div className="col-md-1"><br /></div>
      </div>
      
      
      <div className="row p-2">
        <div className="col-md-1"><br /></div>
        <div className="col-md-10 my-3 my-md-0 homeCard">
        <h2 className='sub'><span className={tarrgetFont.className} >Results Data </span><br /><span className='tag'>Standings for all past tournaments.</span></h2>

        <ResultsAccordian />
          
        </div>
        <div className="col-md-1"><br /></div>
    </div>
    </>
    
  )
}


