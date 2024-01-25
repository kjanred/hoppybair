import './style/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BootstrapClient from './components/BootstrapClient';
import { coolveticaFont } from './font/font';




export const metadata = {
  title: 'Hoppy Bairs',
  description: 'website for the crew Hoppy Bairs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${coolveticaFont.className}`}>
      <div className="container-fluid p-0 main-container">
      <div className='row'>
        <div className='col heroIMG'>
          <Image 
            className='position-relative heroIMG'
            src='/img/hero.jpg'
            fill
            alt='hero'
            />
        </div>
      </div>

    
      <Navigation />
        
          {children}
          
      <Footer />
    
      </div>
      <BootstrapClient />
      </body>
    </html>
  )
}
