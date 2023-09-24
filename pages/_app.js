import Layout from './layout';
import  '../styles/styles.css';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import lightThemeTheme from '../styles/theme/lightTheme.js';
import lightTheme from '../styles/theme/lightTheme.js';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useRouter } from 'next/router'
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
// library.add(
//   faGithub, faAngleDown
// );
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ThemeProvider theme={lightTheme}>
         <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  )
}