import Image from 'next/image'
import rudy from '@/public/img/members/rudy.jpg'
import smasher from '@/public/img/members/smasher.jpg'
import transLogo from '@/public/img/logotrans.png'
import { tarrgetFont } from '../font/font';

export const metadata = {
  title: 'Members | HB',
  description: 'Curent Hoppy Bair team. Each member here adheres to our values of being good to each other and the community.'
}
 
const founderStyle = {
  width: '50%',
  height: 'auto',
  float: 'left',
  padding: '0px 15px 15px 0px'
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
    <div className="row p-2">
        <div className="col-md-2"><br /></div>
        <div id="introh1" className="col-md-8 my-3 my-md-0 px-2 homeCard">
          <div className='container'>
            <div className='row'>

              
              <div className='col-7 p-3'>
                <h3><span className={tarrgetFont.className}>Founder:</span> Rodolfo Zarate</h3>
                <p id='founderParagraph'>
                <Image
                  src={rudy}
                  alt='Rodolfo Zarate'
                  quality={100}  
                  style={founderStyle}
                />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue varius lorem, et dignissim nibh euismod nec. Sed nec arcu aliquet, ultrices elit eu, tincidunt sem. Nunc id quam ut turpis ullamcorper varius. Sed erat ex, venenatis quis pulvinar eget, fermentum id augue. Proin semper non felis eu ultrices. Vivamus fringilla gravida ipsum at condimentum. Curabitur a tortor at tortor dapibus laoreet.

Cras luctus quam sed odio volutpat gravida. Fusce sagittis nisi sit amet arcu rutrum pharetra. Praesent blandit sodales vehicula. Maecenas egestas ipsum mi, eget tincidunt odio pharetra eu. Aenean in ullamcorper metus, vel tincidunt leo. Sed purus felis, commodo nec mauris et, dictum fringilla arcu. Quisque sed interdum tellus. Fusce sit amet aliquam tortor. Suspendisse placerat ultrices leo, id pellentesque turpis dictum eu. Aliquam erat volutpat.
                </p></div>
                <div className='col-5'>
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
      
    <div className="row p-2">
        <div className="col-md-2"><br /></div>

        <div className="col-md-8 my-3 my-md-0 px-2 homeCard">
          <h3 className={tarrgetFont.className}>Tournament Organizers</h3>

          <div className='container'>
            <div className='row'>
          <div className='col-2'>
            <h5>Alphie</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
          </div>
          <div className='col-2'>
            <h5>Rudy</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
              </div>
              <div className='col-2'>
            <h5>Nick</h5>
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
      

    <div className="row p-2">
        <div className="col-md-2"><br /></div>

        <div className="col-md-8 my-3 my-md-0 px-2 homeCard">
          <h3 className={tarrgetFont.className}>Streamers</h3>

          <div className='container'>
            <div className='row'>
          <div className='col-2'>
            <h5>Manjoe</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
          </div>
          <div className='col-2'>
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
      

      <div className="row p-2">
        <div className="col-md-2"><br /></div>

        <div className="col-md-8 my-3 my-md-0 px-2 homeCard">
          <h3 className={tarrgetFont.className}>Design</h3>

          <div className='container'>
            <div className='row'>
          <div className='col-2'>
            <h5>shikari</h5>
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
      

      <div className="row p-2">
        <div className="col-md-2"><br /></div>

        <div className="col-md-8 my-3 my-md-0 px-2 homeCard">
          <h3 className={tarrgetFont.className}>Players</h3>

          <div className='container'>
            <div className='row'>
          <div className='col-2'>
            <h5>Malcolm X</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
          </div>
          <div className='col-2'>
            <h5>LAN</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
              </div>
              <div className='col-2'>
            <h5>Kelp</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
              </div>
              <div className='col-2'>
              <h5>Fuigi</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
              </div>
              <div className='col-2'>
              <h5>tax fraud</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
              </div>
              <div className='col-2'>
              <h5>Cockerelking</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
          </div>
          <div className='col-2'>
              <h5>NPC</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
              </div>
              <div className='col-2'>
              <h5>Backflip</h5>
            <Image
              src={smasher}
              alt='clueless smash player' 
              style={memberStyle}
              quality={100} />
              </div>
              <div className='col-2'>
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
      


      
    </>  
  )
};


