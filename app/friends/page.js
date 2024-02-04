import Image from 'next/image'
import { tarrgetFont } from '../font/font';

export const metadata = {
  title: 'Friends | HB',
  description: 'Friends of the Hoppy Bairs Team'
}
 

export default function Friends() {

  return (
    <>
    <div className="row p-2">
        <div className="col-md-2"><br /></div>
        <div id="introh1" className="col-md-4 my-3 my-md-0 p-2 text-center homeCard"><h1 className={`${tarrgetFont.className} text-start ps-2 introH1`}>Friends of the Hoppy Bair team.</h1>
        
        </div>
        <div className="col-md-4 my-3 my-md-0 p-2 d-flex align-items-center homeCard"><p className="introP"></p>
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


