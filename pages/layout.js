import DrawerAppBar from '../components/AppBar';
import FooterNav from '../components/FooterNav';
import AppBar from '../components/AppBar';
import Meta from '../components/Meta';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Inconsolata } from 'next/font/google';
const inconsolata = Inconsolata({
  weight: ['200', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
})
export default function RootLayout({ children }) {
  return (
    <> <AppBar />
      <main className={inconsolata.className}>{children}</main>
      <FooterNav />
    </>
     
  )
  }
  