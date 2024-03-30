import Image from 'next/image'
import { tarrgetFont } from '../font/font';

export const metadata = {
  title: 'About | HB',
  description: 'Home page of the Hoppy Bair website. Please check out our Super Smash Bros Ultimate tournaments in the Sonoma County area.'
}
 

export default function About() {

  return (
    <>
    <div className="row p-2">
        <div className="col-md-2"><br /></div>
        <div id="introh1" className="col-md-4 my-3 my-md-0 p-2 text-center homeCard"><h1 className={`${tarrgetFont.className} text-start ps-2 introH1`}>About</h1>
        
        </div>
        <div className="col-md-4 my-3 my-md-0 p-2 d-flex align-items-center homeCard"><p className="introP">We are Hoppy Bairs and we focus on a few things:
          <ul>
            <li>Hosting Smash Tournaments
            </li>
            <li>Playing Smash Bros
            </li>
            <li>Drinking Good Beer
            </li>
        </ul>
        </p>
        </div>
        <div className="col-md-2"><br /></div>
    </div>
      
    <div className="row events p-2">
        <div className="col-md-2"><br /></div>

        <div className="col-md-8 p-5 my-3 my-md-0 homeCard d-flex justify-content-center align-items-center"> <br/></div>
        <div className="col-md-2"><br /></div>
    </div>
    
      
    </>  
  )
};


