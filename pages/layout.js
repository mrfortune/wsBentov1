import DrawerAppBar from '../components/NavBar';
import FooterNav from '../components/FooterNav';
import NavBar from '../components/NavBar';
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
  preload: false,
})

export default function RootLayout({ children }) {
  return (
    <> 
      <style jsx global>{`
        html {
          font-family: ${inconsolata.style.fontFamily};
        }
      `}</style>
    <CssBaseline/>
       <NavBar/>
      <main className={inconsolata.className}>{children}</main>
      <FooterNav />
    </>
     
  )
  }
  