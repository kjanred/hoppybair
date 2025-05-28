import Image from 'next/image'
import LogoScroll from './components/LogoScroll';
import NextEvent from './components/NextEvent';
import { tarrgetFont } from './font/font';
import logoTrans from '@/public/img/logotrans.png';
import x from '@/public/img/x.png';




export const metadata = {
  title: 'Home | HB',
  description: 'Home page of the Hoppy Bair website. Please check out our Super Smash Bros Ultimate tournaments in the Sonoma County area.'
}

const homePanelStyle = {
  boxShadow: '0 0 40px 20px #00000080, inset 0 0 40px 20px #000000BF, inset 0 0 0 1000px #FFFFFF10',
  backgroundSize: 'cover'
}
 

export default function Home() {

  return (
    <>
    <div className="row px-2">
        <div className="col-md-1"><br /></div>
        <div className="col-md-10 my-3 p-0 my-md-0 homeCard">
          <div className="container-fluid">
            <div className="row">
              <div className='col-md-8 p-0 welcomeCardColor welcomeCardImg'>
                <h1 className={`${tarrgetFont.className} main m-0 pe-3 text-center`}>Welcome</h1>
                <div className='homeParagraphBox'><p>We are a grassroots Super Smash Bros Ultimate Esports orginization based in Sonoma County, California and work closely with local brweries and tap rooms to host free-to-enter Smash Tournaments. Grab your controller and come play some games at one of our next events. </p><p className='subtext'>All ages and skill levels are welcome to enter and play. Must be 21 or older to purchase and/or consume alcohol.</p>
                  <hr />
                  <div className='clickMe'>
                  <p className='ms-2 me-auto'>Click here to sign up <br />for our next event!</p>
                    <svg  className="me-2" width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 20h7.5A1.25 1.25 0 0 0 10 18.75v-7.5A1.25 1.25 0 0 1 11.25 10h27.5A1.25 1.25 0 0 0 40 8.75V1.25A1.25 1.25 0 0 0 38.75 0H10A10 10 0 0 0 0 10v8.75A1.25 1.25 0 0 0 1.25 20Z" fill="#3f80ff"></path><path d="M38.75 20h-7.5A1.25 1.25 0 0 0 30 21.25v7.5A1.25 1.25 0 0 1 28.75 30H1.25A1.25 1.25 0 0 0 0 31.25v7.5A1.25 1.25 0 0 0 1.25 40H30A10 10 0 0 0 40 30V21.25A1.25 1.25 0 0 0 38.75 20Z" fill="#ff2768"></path></svg>
                    </div>


                </div>
              </div>
              <div className='col-md-4'>
                <NextEvent />
              </div>
            </div> {/*end of row*/}

          </div>{/*end of container*/}
        
        </div>
        <div className="col-md-1"><br /></div>
    </div>
      
    <div className="row p-2">
        <div className="col-md-1"><br /></div>

       
       
        <div className="col my-3 my-md-0 d-flex justify-content-center align-items-center logoContainer">
         
          <Image src={logoTrans} quality={100} alt='hoppy bairs drawn logo' className='home-logo' /><Image src={x} quality={100} alt='x symbol' className='w-md-50 me-2 img-fluid' />

            <LogoScroll /> 
            
        </div>
        <div className="col-md-1"><br /></div>
      </div>

      <div className="row px-2">
        <div className="col-md-1"><br /></div>

       
       
        <div className="col homeCard homeBottomTextCard d-flex justify-content-between">
          <p>At our events, we welcome players of all kinds. Just make sure to bring your own controller! </p>
          <p>See you soon! </p>
         
        
        </div>
        <div className="col-md-1"><br /></div>
      </div>
      

   
      
    </>  
  )
};


