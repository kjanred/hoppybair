import './style/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from './components/BootstrapClient';
import { coolveticaFont } from './font/font';




export const metadata = {
  title: 'Hoppy Bairs',
  description: 'website for the crew Hoppy Bairs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${coolveticaFont.className}`}>{children}
      <BootstrapClient />
      </body>
    </html>
  )
}
