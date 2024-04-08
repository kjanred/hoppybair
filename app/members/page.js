import Image from 'next/image'
import rudy from '@/public/img/members/rudy.jpg'
import smasher from '@/public/img/members/smasher.jpg'
import transLogo from '@/public/img/logotrans.png'
import { tarrgetFont } from '../font/font';

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
    <div className="row g-0 mt-2">
        <div className="col-md-2"><br /></div>
        <div className="col-md-8 my-3 my-md-0 pb-3 homeCard teamCard">
        <h1 className={`${tarrgetFont.className} ps-2 m-0 text-center main`}>Members</h1>
          <div className='container'>
            <div className='row d-flex align-items-center'>

              
              <div className='col-6 p-3 text-center'>
                <h3><span className={tarrgetFont.className}>Founder:</span> Rodolfo "SR-SOUL" Zarate</h3>
                
                <Image
                  src={rudy}
                  alt='Rodolfo Zarate'
                  quality={100}  
                  
                />
                </div>
                <div className='col-6 text-center'>
                <Image
                  src={transLogo}
                  alt='Hoppy Bairs logo'
                  quality={100}
                  style={transLogoStyle}
                />
          <h6 className='px-2 py-0'>We value being good to each other and the community.</h6>
              </div>


            </div>
          </div>
          
        </div>
        <div className="col-md-2"><br /></div>
    </div>
      
    <div className="row g-0">
        <div className="col-md-2"><br /></div>

        <div className="col-md-8 my-3 my-md-0 homeCard teamCard">
          <h3 className={tarrgetFont.className}>Tournament Organization</h3>

          <div className='container'>
            <div className='row pb-4'>
          <div className='col-2 memberCard'>
            <h5>Alphie</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
          </div>
              <div className='col-2 memberCard'>
            <h5>tax fraud</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
              </div>
              

              </div>  {/*  end of row */}
          </div> {/*  end of container*/}
          

        </div>
        <div className="col-md-2"><br /></div>
      </div> {/* end of row */}
      

    <div className="row g-0">
        <div className="col-md-2"><br /></div>

        <div className="col-md-8 my-3 my-md-0 homeCard teamCard">
          <h3 className={tarrgetFont.className}>Stream</h3>

          <div className='container'>
            <div className='row pb-4'>
          <div className='col-2 memberCard'>
            <h5>Manjoe</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
          </div>
          <div className='col-2 memberCard'>
            <h5>Jemrock</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
              </div>
             
              

              </div>  {/*  end of row */}
          </div> {/*  end of container*/}
          

        </div>
        <div className="col-md-2"><br /></div>
      </div>{/* end of row */}
      

      <div className="row g-0">
        <div className="col-md-2"><br /></div>

        <div className="col-md-8 my-3 my-md-0 homeCard teamCard">
          <h3 className={tarrgetFont.className}>Design</h3>

          <div className='container'>
            <div className='row pb-4'>
          <div className='col-2 memberCard'>
            <h5>shikari</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
              </div>
              <div className='col-2 memberCard'>
              <h5>Ziggurat</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
          </div>
             
              

              </div>  {/*  end of row */}
          </div> {/*  end of container*/}
          

        </div>
        <div className="col-md-2"><br /></div>
      </div>{/* end of row */}
      

      <div className="row g-0">
        <div className="col-md-2"><br /></div>

        <div className="col-md-8 my-3 my-md-0 homeCard teamCard">
          <h3 className={tarrgetFont.className}>Players</h3>

          <div className='container'>
            <div className='row pb-4'>
          <div className='col-2 memberCard'>
            <h5>Malcolm X</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
          </div>
          <div className='col-2 memberCard'>
            <h5>LAN</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
              </div>
              <div className='col-2 memberCard'>
            <h5>Kelp</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
              </div>
              <div className='col-2 memberCard'>
              <h5>Fuigi</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
              </div>
              <div className='col-2 memberCard'>
              <h5>Cockerelking</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
          </div>
          <div className='col-2 memberCard'>
              <h5>NPC</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
              </div>
              <div className='col-2 memberCard'>
              <h5>Backflip</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
              </div>
             

              </div>  {/*  end of row */}
          </div> {/*  end of container*/}
          

        </div>
        <div className="col-md-2"><br /></div>
    </div>{/* end of row */}
      


      
    </>  
  )
};


