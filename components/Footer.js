import * as React from 'react';
import Image from 'next/image';
//import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Paper } from '@mui/material';
import {Container, Box, Grid, Typography} from '@mui/material';
import Link from 'next/link';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Facebook from '@mui/icons-material/Facebook';
import { Instagram } from '@mui/icons-material';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className="navBG"  sx={{ bottom: 0, left: 0, right: 0 }} elevation={3}>
  <BottomNavigation sx={{ height:'auto', }} value={value} onChange={handleChange}> 
      
      <Box component="div" pr={0} pl={1} mr={0} pt={2} direction="row" display='flex' alignItems='center' justifyContent='center' height="200px" sx={{width:'100%'}}>
         <Grid container spacing={1} sx={{maxWidth:'md', }}>

         <Grid item xs={4} sm={4} lg={4} md={4}>
       <Box component="ul" sx={{
    padding: "0 0",
    listStyle: "none",
    display: "grid",
    gap: "8px",
    color:'#333',
  }} >
    <Box component="li" mb={2}>
        <Typography variant="h4">Pages</Typography>
    </Box>
      <Box component="li">
        <Link href="/">Home</Link>
    </Box>
    <Box component="li">
        <Link href="/story">Story</Link>
    </Box>
    <Box component="li">
        <Link href="/contact">Contact</Link>
    </Box>
    </Box>
    </Grid>
    <Grid item xs={4} lg={4} >
       <Box component="ul" sx={{
    padding: "0 0",
    listStyle: "none",
    display: "grid",
    gap: "8px",
    color:'#333',
  }} >
    <Box component="li" mb={2}>
        <Typography variant="h4" className="header">Resources</Typography>
    </Box>
      <Box component="li">
        <Link href="/">Terms</Link>
    </Box>
    <Box component="li">
        <Link href="/Story">Privacy</Link>
    </Box>
    
    </Box>
    </Grid>
    <Grid item xs={4} lg={4}>
    <Box component="div" mb={2}>
        <Typography variant="h4" className="header" sx={{color:'#333'}}>Sharing</Typography>
    </Box>
    <Box
      sx={{
        width:'160',
        color:'#333',
        '& > :not(style)': {
          mr: 1,
        },
      }}
    >
      <Link href="http://linkedin.com/in/robertsharris">
      <LinkedIn fontSize="medium"/>
        </Link>
      <Link href="/"><Facebook fontSize="medium"/></Link>
      <Link href="/"><Instagram fontSize="medium"/></Link>
      </Box>
    </Grid>
    <Grid item xs={12} sm={12} lg={12} md={12}>
      <Typography variant="body1">&copy 2022 WorldShaker, Interactive, Inc. All rights reserved.</Typography>
      </Grid>
       </Grid>
      
   </Box> 
  </BottomNavigation>
    </Paper>
  );
}
