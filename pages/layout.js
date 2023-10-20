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
})

export default function RootLayout({ children }) {
  const [navbar, setNavbar] = useState(false)

  //logo scroll when active
  // const [navbarLogo, setNavbarLogo] = useState(logo)

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
  return (
    <> 
    <CssBaseline/>
    <NavBar/>
      <main className={inconsolata.className}>{children}</main>
      <FooterNav />
    </>
     
  )
  }
  