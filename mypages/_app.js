import Layout from './layout.js';
import  '../styles/styles.css';
import './globals.css';
import { ThemeProvider } from '@mui/material';
import lightTheme from '../styles/theme/lightTheme.js';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useRouter } from 'next/router';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
// library.add(
//   faGithub, faAngleDown
// );

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider> 
  )
}