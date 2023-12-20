'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Paper, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { transform } from 'framer-motion';
import { useRouter } from 'next/router'
import myLoader from "./Loader";
import Image from "next/image";
import { ThemeProvider } from '@emotion/react';
import { useState, useEffect } from "react";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import lightTheme from '../styles/theme/lightTheme';

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }



const drawerWidth = 240;
//const navItems = ['home', 'story', 'media', 'contact'];
const navLinks = [
  { 
    id: "1",
    name: "Home", 
   path: "/" 
  },
  {
    id: "2",
    name: "Story",
    path: "/story",
  },
  {
    id: "3",
    name: "Contact",
    path: "/contact",
  },
];

export default function NavBar (props) {
 
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const { children, window } = props;
  //const { asPath: currentPath } = useRouter();
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
      <Box sx={{ display:'flex', flexDirection:'column', paddingLeft:'1rem', paddingTop:'1rem' }} 
>
            {navLinks.map((link, id) => {
          return(
              <Link key={id} href={link.path}>
                {link.name}
              </Link>
          );
        })}
          </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  // const router = useRouter();
  // const currentRoute = router.pathname;
  // const trigger = useScrollTrigger({
  //   threshold: 100, // Adjust the threshold as needed
  // });

  const [triggered, setTriggered] = useState(false);

  // Define the container variable
  const trigger = useScrollTrigger({
    target: container, // Use the container as the target
    disableHysteresis: true,
    threshold: 100, // Adjust the threshold as needed
  });

  useEffect(() => {
    if (trigger) {
      setTriggered(true);
    } else {
      setTriggered(false);
    }
  }, [trigger]);

  // return React.cloneElement(children, {
  //   elevation: triggered ? 4 : 0,
  //   sx: {
  //     backgroundColor: triggered ? 'black' : 'transparent',
  //     transition: 'background-color 0.3s', // Add a smooth transition effect
  //   },
  // });

  return (
    <Box component="nav" sx={{ display: 'flex' }}>
      
      {/* <AppBar className={navbar ? "navbar active" : "navbar"} position="fixed" 
      sx={{
        boxShadow: 'none'
      }}
> */}
<AppBar elevation={triggered ? 4 : 0}
      sx={{
        backgroundColor: triggered ? 'black' : 'transparent',
        transition: 'background-color 0.3s', // Add a smooth transition effect
      }}>



        <Toolbar> 
        <Box sx={{ flexGrow: 1, }}>
{/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              mr: 16,
              display: { xs: 'block', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
           
          <Image 
          loader={myLoader}
          src="assets/wslogo8.png"
          width={200} height={24} 
          alt="Logo">

          </Image>
          </Typography>  */}
          {/* <h6 className="leading-4"> */}
              <Link href="/">
              <Image 
          loader={myLoader}
          src="assets/wslogo8.png"
          width={200} height={24} 
          alt="Logo">

          </Image>
              </Link>
            {/* </h6> */}
            </Box>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0,  borderRadius:'50%', backgroundColor:'#0469de',
            display: { xs:'flex', sm: 'flex', md: 'none', horizontal: 'right' }, }}
          >
            <MenuIcon />
          </IconButton>
         
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none' } }}
          >
            worldshaker
          </Typography> */}
          <Box alignItems="center" component="div" className="navItems" sx={{ display: { xs: 'none', sm: 'none', md:'flex', xl:'flex', lg:'flex' } }}>
            {navLinks.map((link, id) => {
              if (link.name != "Contact"){
                return(
                  <Link key={id} href={link.path} >
                    {link.name}
                  </Link>
        
              );
              }
              else{
                // eslint-disable-next-line react/jsx-key
                return ( <button key={id} size="sm" className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-4 mr-2 leading-4" color="secondary" css={{ borderRadius: "$xl", marginLeft:'2rem' }}>
            <Link href={link.path}
             className="leading-4" 
            >
            {link.name} 
            </Link>
          </button> );
              }
        })}
       
          </Box>
        </Toolbar>
     
      </AppBar>
      <Box component="nav" >
        <Drawer
        anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
             display: { xs: 'block', sm: 'block', md:'none', lg:'none', xl:'none'  },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth  },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}