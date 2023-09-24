import DrawerAppBar from '../components/AppBar';
import FooterNav from '../components/FooterNav';
import AppBar from '../components/AppBar';
import Meta from '../components/Meta';
import SimpleBottomNavigation from '../components/bottom';
import { Inter } from 'next/font/google'
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
})
export default function RootLayout({ children }) {
  return (
    <> <AppBar />
      <main>{children}</main>
      <FooterNav />
      <SimpleBottomNavigation/>
    </>
     
  )
  }
  