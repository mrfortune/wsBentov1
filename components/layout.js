import DrawerAppBar from './AppBar';
import FooterNav from './FooterNav';
import AppBar from './AppBar';
import Meta from './Meta';
import SimpleBottomNavigation from './bottom';
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
  