import Image from 'next/image';
import smasher from '@/public/img/members/smasher.jpg';
import transLogo from '@/public/img/logotrans.png';
import manjoe from '@/public/img/team/manjoe.png';
import lan from '@/public/img/team/lan.png';
import { tarrgetFont } from '../font/font';
import PlayerLoop from '../components/PlayerLoop';


export const metadata = {
  title: 'Members | HB',
  description: 'Curent Hoppy Bair team. Each member here adheres to our values of being good to each other and the community.'
}
 

const transLogoStyle = {
  width: '100%',
  height: 'auto'
}
const memberStyle = {
  width: '100%',
  height: 'auto'
}


export default function Members() {

  return (
    <>
      
      <div className="row g-0">
      <h1 className={`${tarrgetFont.className} m-0 text-center main`}>Team</h1>
        <div className="col-md-1"><br /></div>

        <div className="col-md-4 darkCard">
        <p className='teamParagraph m-4'>Our team consists of a group of Smash players in the Sonoma County area who share a love for craft beer and Super Smash Bros. </p>

          

        </div>
        <div className="col-md-6 darkCard">

          <div className='container TOcontainer px-0'>
            <div className='row'><div className='col'><h2 className={`${tarrgetFont.className} text-end subWhite`}>Tournament Organizers</h2></div></div>
            <div className='row justify-content-evenly'>
              <div className='col-md-3 TOcard'><h2 className='TOheader'>SR-SOUL</h2>
              <Image
                  src={smasher}
                  className='img-fluid'
                  alt='image placeholder'
                />
              </div>
              <div className='col-md-3 TOcard'><h2 className='TOheader'>tax fraud</h2>
                <Image
                  src={smasher}
                  className='img-fluid'
                  alt='image placeholder'
                />
              </div>
              <div className='col-md-3 TOcard'><h2 className='TOheader'>Alphie</h2>
              <Image
                  src={smasher}
                  className='img-fluid'
                  alt='image placeholder'
                />
              </div>
            </div>
          </div>
        

          

        </div>
        <div className="col-md-1"><br /></div>
      </div>{/* end of row */}
      

      <div className="row g-0">
        <div className="col-md-1"><br /></div>
        <div className='col-md-10 pb-3 darkCard'>
          <h2 className={`${tarrgetFont.className} subWhite text-center`}>Stream</h2>
          <div className='container'>
            <div className='row justify-content-center'>
            <div className='col-12 col-md-2 streamer'>
              <h3 className='streamHeader'>HB Tournaments</h3>
                <div className='square streamContainer mx-auto'>
                  <Image
                    src={transLogo}
                    width={100}
                    height={100}
                    quality={100}
                    className='streamLogo'
                    />

              </div> 
              </div>

              <div className='col-12 col-md-2 streamer'>
              <h3 className='streamHeader'>Manjoe</h3>
                <div className='square streamContainer mx-auto'>
                  <Image
                    src={manjoe}
                    quality={100}
                    className='streamLogo'
                    />

              </div> 
              </div>

              <div className='col-12 col-md-2 streamer'>
              <h3 className='streamHeader'>LAN</h3>
                <div className='square streamContainer mx-auto'>
                  <Image
                    src={lan}
                    quality={100}
                    className='streamLogo'
                    />

              </div> 
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-1'></div>
      </div> 
      
      <div className="row g-0">
        <div className="col-md-1"><br /></div>
        <div className='col col-md-10 darkCard'>
          <h2 className={`${tarrgetFont.className} subWhite text-center`}>Players</h2>
          <div className='container'>
            <div className='row d-flex justify-content-center'>
             
              <PlayerLoop />            
             
            </div>
          </div>
        </div>
        <div className='col-md-1'></div>
      </div>


      
    </>  
  )
};


