import Image from 'next/image'
import aboutBG from '@/public/img/about.jpg';
import aboutBG2 from '@/public/img/about22.jpg';
import { tarrgetFont } from '../font/font';
import PhotoCarousel from '../components/PhotoCarousel';

export const metadata = {
  title: 'About | HB',
  description: 'Home page of the Hoppy Bair website. Please check out our Super Smash Bros Ultimate tournaments in the Sonoma County area.'
}
 

const aboutPanelStyle = {
  boxShadow: 'inset 0 0 0 1000px #FFFFFF40',
  backgroundImage: `url(${aboutBG.src})`,
  backgroundSize: 'cover'
}

const aboutPanelStyle2 = {
  boxShadow: 'inset 0 0 0 1000px #FFFFFF40',
  backgroundImage: `url(${aboutBG2.src})`,
  backgroundSize: 'cover'
}

const flairSpan = {
  width: '100%',
  color: '#FFFFFF',
  textShadow: '0 0 10px #000000',
  fontSize: '2em',
  textAlign: 'center'
}


const contain = {
  objectFit: 'contain'
}
 
export default function About() {

  return (
    <>
      <div className="row g-0">
        <h1 className={`${tarrgetFont.className} text-center main`}>About</h1>
        <div className="col-md-1"><br /></div>
        <div className="col-md-4 py-5 py-md-0 my-md-0 text-center d-flex align-items-center" style={aboutPanelStyle2}>
        <span className={tarrgetFont.className} style={flairSpan}>EST <br /> 2022 <br/> Santa Rosa, CA</span>
        </div>
        <div className="col-md-6 my-md-0 px-md-5 homeCard">
          <p className="aboutP p-2 p-md-4 mx-md-5">
          <span className={`${tarrgetFont.className} fs-2 test`}>Hoppy Bairs</span> is a team of Super Smash Bros. Ultimate tournament organizers and players based in Santa Rosa, CA. We host Smash Tournaments at local craft breweries, creating a great environment for both the veteran and new player. Hoppy Bairs founder Rodolfo &quot;SR-SOUL&quot; Zarate has been hosting smash tournaments all around Sonoma County for nearly a decade now. He and the team have also been visiting breweries up and down California and beyond. Come visit one of our tournements at our partner venues for a friendly, competitive, and fun evening!</p>
          
      
        </div>
        <div className="col-md-1"><br /></div>
    </div>
    
      <div className="row g-0">
        <div className="col-md-1"></div>
       <div className="col-md-10 my-0 carouselStyle">
        
          <PhotoCarousel />
  
        </div>
        <div className="col-md-1"></div>
    </div>
      
    </>  
  )
};


