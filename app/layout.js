'use client'

import './style/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BootstrapClient from './components/BootstrapClient';
import { coolveticaFont } from './font/font';
import { usePathname } from 'next/navigation';
import heroimg from '@/public/img/hero.jpg'

export default function RootLayout({ children }) {

  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${coolveticaFont.className}`}>
        <div className="container-fluid p-0 main-container">
          {pathname === '/' && (
            <div className='row'>
              <div className='col heroIMG'>
                <Image
                  className='position-relative heroIMG'
                  src={heroimg}
                  quality={100}
                  fill
                  alt='hero'
                />
              </div>
            </div>)}
        
    
      <Navigation />
        
          {children}
          
      <Footer />
    
      </div>
      <BootstrapClient />
      </body>
    </html>
  )
}
