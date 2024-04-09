import Image from 'next/image'
import aboutBG from '@/public/img/about.jpg';
import aboutBG2 from '@/public/img/about22.jpg';
import rudy from '@/public/img/rudy.jpg';
import { tarrgetFont } from '../font/font';

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
    <div className="row p-2">
        <div className="col-md-2"><br /></div>
        <div className="col-md-4 my-3 my-md-0 p-2 text-center" style={aboutPanelStyle}><h1 className={`${tarrgetFont.className} text-start ps-2 main`}>About</h1>
        
        </div>
        <div className="col-md-4 my-3 my-md-0 p-2 d-flex align-items-center homeCard"><p className="aboutP"><span className={`${tarrgetFont.className} fs-2 test`}>Hoppy Bairs</span> is a team of Super Smash Bros. Ultimate tournament organizers and players based in Santa Rosa, CA. We host Smash Tournaments at local craft breweries, creating a great environment for both the veteran and new player. Hoppy Bairs founder Rodolfo &quot;SR-SOUL&quot; Zarate has been hosting smash tournaments all around Sonoma County for nearly a decade now. He and the team have also been visiting breweries up and down California and beyond. Come visit one of our tournements at our partner venues for a friendly, competitive, and fun evening!</p>
          
      
        </div>
        <div className="col-md-2"><br /></div>
    </div>
      
    <div className="row p-2">
        <div className="col-md-2"><br /></div>
        <div className="col-md-8 my-3 my-md-0 p-0 homeCard">
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12 col-md-7'>
              <br /> <br /> <br /> <br /> <br /><br /> <br /> <br /> <br /> <br /><br /> <br /> <br /> <br /> <br />
              </div>
              <div className='col-12 col-md-5 d-flex align-items-center' style={aboutPanelStyle2}>
                <span className={tarrgetFont.className} style={flairSpan}>EST <br /> 2022 <br/> Santa Rosa, CA</span>
              </div>
            </div>
          </div>

        </div>
        <div className="col-md-2"><br /></div>
    </div>

    <div className="row p-2">
        <div className="col-md-2"><br /></div>

        <div className="col-md-8 p-3 my-3 my-md-0 homeCard ">

          <div className='container-fluid'>
            <div className='row'>
              <div className='col-6'>
<span className='question'>When did you start TOing?</span>
	<span className='answer'>I hosted my first Tourney in 2017.It was a Smash 4 tournament called Button Smash.</span>

  <span className='question'>Who were some of the community leaders you looked up to when you first started playing/TOing?</span>
	<span className='answer'>I looked up to Major aka Big Mama (Ian) and Happa (Sam) because they were the ones that showed me how to T.O. and supported my events.</span>

  <span className='question'>When did your love of craft beer begin?</span>
	<span className='answer'>Somewhere between 2016 and 2017. My first craft beer was Fresh Squeezed from Deschutes Brewery. It was on tap and I got it from a place called the Green Lantern in Walla Walla, Washington.</span>

  <span className='question'>What are some of your favorite breweries?</span>
	<span className='answer'>HenHouse Brewery, Cooperage Brewery, Revision Brewery, Laughing Monk and Ghost Town Brewery. I got others but these are the first that popped in my head.</span>

  <span className='question'>Where are some of your favorite places to play smash and why?</span>
	<span className='answer'>I love playing at Barley and Bine in Windsor, CA. The staff is friendly, a huge selection of beer and the community is chill.</span>

  <span className='question'>When did Hoppy Bairs start and why?</span>
                <span className='answer'>HB started April 22, 2022. I always wanted to start an esports team based centered around craft beer. A passion project that I felt I can do because I live in one of the most popular craft beer cities in the world. After my Epicenter days I really did not see any point of hosting anymore. I went from hosting small locals to running a regional in my town. What was there else to do? I was very relieved to know other people stepped up to host. As time went on I felt it be super cool by adding variety to the smash community by hosting squad strike events.  By hosting squad strike events at breweries, it really gives a very approachable and easy going environment that attracts newcomers. Even try hards can relax at my events. I think that's super healthy when you need a break from the grind. It's a win- win situation.</span>
                </div>
    
              <div className='col-6'>
          <Image
            src={rudy}
                  alt="Rodlfo 'SR-SOUL' Zarate"
                  className='img-fluid p-xxl-5'
                />
                </div>
              </div>{/* end of row */}
 </div>  {/* end of container */}
           
          
        </div>
        <div className="col-md-2"><br /></div>
    </div>
    
      
    </>  
  )
};


