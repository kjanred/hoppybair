import Image from 'next/image'
import nightShift from '@/public/img/friends/nightshift.png';
import barley from '@/public/img/friends/bb.png'
import { tarrgetFont } from '../font/font';

export const metadata = {
  title: 'Friends | HB',
  description: 'Friends of the Hoppy Bairs Team'
}

const bannerStyle = {
  width: '100%',
  height: 'auto'
}
 

export default function Friends() {

  return (
    <>
    <div className="row">
        <div className="col-md-1"><br /></div>
        <div className="col-md-10 my-3 my-md-0 p-2 text-center homeCard">
         <span className={`${tarrgetFont.className} comingsoon`}>Coming Soon!</span>
        
  
        </div>
        <div className="col-md-1"><br /></div>
    </div>
      
      

    
      
    </>  
  )
};


