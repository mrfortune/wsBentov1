import DrawerAppBar from '../components/AppBar';
import FooterNav from '../components/FooterNav';
import AppBar from '../components/AppBar';
import Meta from '../components/Meta';
import { ThemeProvider } from '@mui/material';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { useState, useEffect } from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Inconsolata } from 'next/font/google';
import { CssBaseline } from '@mui/material';
const inconsolata = Inconsolata({
  weight: ['200', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || 0);
    };

    // Attach the scroll event listener if window is available (client-side)
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        // Remove the scroll event listener when the component unmounts
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  const backgroundColor = scrollY >= 100 ? 'black' : 'transparent';
  return (
    <> 
    <CssBaseline/>
    <AppBar backgroundColor={backgroundColor} />
      <main className={inconsolata.className}>{children}</main>
      <FooterNav />
    </>
     
  )
  }
  