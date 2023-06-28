import React from 'react'
import Link from 'next/link';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Typography, Box, Grid } from '@mui/material';

const Custom404 = () => {
  return (
    <div>
      <Box className="contact" component="div" direction="row" display="flex" mt={15} mb={2} justifyContent="center" sx={{minHeight:'300px'}}>
	<Grid container spacing={2} sx={{maxWidth:'md', marginLeft: '0', }}>
	
	<Grid item xs={12} sm={12} md={12} lg={12}>
 <SentimentVeryDissatisfiedIcon/> 
      <Typography variant="body1" color="secondary">Sorry, but this page does not exist.</Typography>
    <Link href="/">Return to the home page.</Link>
  </Grid>
    </Grid>
    </Box>

    </div>
  )
}

export default Custom404