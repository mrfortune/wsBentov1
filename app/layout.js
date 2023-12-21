import './global.css'
import DrawerAppBar from '../components/NavBar';
import FooterNav from '../components/FooterNav';
import NavBar from '../components/NavBar';
import { Metadata } from 'next';
import { ThemeProvider } from '@mui/material';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Inconsolata } from 'next/font/google';
import { CssBaseline } from '@mui/material';
import './styles.css';
// import './Home.module.css';
const inconsolata = Inconsolata({
  weight: ['200', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
  preload: false,
  // variable: '--font-inconsolata',
})



export const metadata = {
  title: '...',
  description: '...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inconsolata.className}>
    <body >
      <NavBar/>
      {children}
      <FooterNav/>
    </body>
  </html> 
  )
  }
  