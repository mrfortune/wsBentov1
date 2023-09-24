import DrawerAppBar from '../components/AppBar';
import FooterNav from '../components/FooterNav';
import AppBar from '../components/AppBar';
import Meta from '../components/Meta';
import SimpleBottomNavigation from '../components/bottom';
import { Inter } from 'next/font/google'
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Layout({ children }) {
  return (
    <>
      <AppBar />
      <main>{children}</main>
      <FooterNav />
      <SimpleBottomNavigation/>
    </>
  )
  }
  