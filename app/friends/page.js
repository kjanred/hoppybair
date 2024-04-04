import Image from 'next/image'
import friendsBanner from '@/public/img/friends-banner.jpg'
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
    <div className="row p-2">
        <div className="col-md-2"><br /></div>
        <div id="introh1" className="col-md-8 my-3 my-md-0 p-2 text-center homeCard">
          <Image
            src={friendsBanner}
            quality={100}
          />
        
  
        </div>
        <div className="col-md-2"><br /></div>
    </div>
      
    <div className="row p-2">
        <div className="col-md-2"><br /></div>
        <div id="introh1" className="col-md-8 my-3 my-md-0 p-2 text-center homeCard">
          <h2 className={tarrgetFont.className}>with love...</h2>
          <h6>individuals or entities that have our gratitude</h6>
          <hr className='p-0 mt-0'/>

          <div className='container'>
            <div className='d-flex align-items-center row'>
            <div className='col-6 col-md-3'>
                <h3></h3>
                <Image
                  src={barley}
                  style={bannerStyle}
                />
                <p></p>
              </div>

              <div className='col-6 col-md-3'>
                <h3></h3>
                <Image
                  src={nightShift}
                  style={bannerStyle}
                />
                <p></p>
              </div>

              <div className='col-6 col-md-3'></div>
              <div className='col-6 col-md-3'></div>
            </div>
          </div>
        
  
        </div>
        <div className="col-md-2"><br /></div>
    </div>
    
      
    </>  
  )
};


