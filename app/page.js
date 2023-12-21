import Image from 'next/image'
import { tarrgetFont } from './font/font';

export default function Home() {

  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col'>
        <Image 
            src='/img/hero.jpg'
            fill={true}
            alt='hero'
            />
        </div>
      </div>
      <div className="row landing">
        <div className="col-12">

          {/* -----NAV BAR BEGINS ------*/}
        <nav className={`${tarrgetFont.className} navbar navbar-expand-lg bg-body-tertiar sticky-top`}>
  <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <Image
                  src='/img/logo.png'
                  width={100}
                  height={100}
                  alt="logo"
                  className='heroIMG'
                />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    </div>
    <div className="row welcome">
        <div className="col-md-6"><h1 className="text-danger">Hello Bootstrap</h1></div>
        <div className="col-md-6"><p>Here is some basic information text.</p></div>
    </div>
    <div className="row events">
        <div className="col-md-5"></div>
        <div className="col-md-7"></div>
    </div>
    <div className="row links">
        <div className="col-md-6 col-xl-3"></div>
        <div className="col-md-6 col-xl-3"></div>
        <div className="col-md-6 col-xl-3"></div>
        <div className="col-md-6 col-xl-3"></div>
    </div>
    <div className="row footer">
        <div className="col-md-6"></div>
        <div className="col-md-6"></div>
    </div>
</div>
  )
}


