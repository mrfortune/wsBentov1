import DrawerAppBar from '../components/NavBar';
import FooterNav from '../components/FooterNav';
import NavBar from '../components/NavBar';
import Meta from '../components/Meta';
import { ThemeProvider } from '@mui/material';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Inconsolata } from 'next/font/google';
import { CssBaseline } from '@mui/material';
import './global.css'
import './styles.css'
import './Home.module.css'
const inconsolata = Inconsolata({
  weight: ['200', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
  preload: false,
})
import { useRouter } from 'next/navigation'
export default function RootLayout({ children }) {
  return (
    <html lang="en" >
    <body className={inconsolata.className}>
      <NavBar/>
      {children}
      <FooterNav/>
    </body>
  </html> 
  )
  }
  