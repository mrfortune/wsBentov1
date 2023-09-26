import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
  Box, 
  Stack,
  Container
} from "@mui/material";
import { Typography } from "@mui/material";
import { Paper, Button } from "@mui/material";
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";
import Meta from "../components/Meta";
import { AnimatePresence } from "framer-motion";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { textAlign } from "@mui/system";
import myLoader from "../components/Loader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
//useSWR allows the use of SWR inside function components
import useSWR from 'swr';


//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
// function Item(props) {
//   const { sx, ...other } = props;
//   return (
//     <Box
//       sx={{
//         bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
//         color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
//         border: '1px solid',
//         borderColor: (theme) =>
//           theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
//         p: 1,
//         m: 1,
//         borderRadius: 2,
//         fontSize: '0.875rem',
//         fontWeight: '700',
//         ...sx,
//       }}
//       {...other}
//     />
//   );
// }
// Item.propTypes = {
//   /**
//    * The system prop that allows defining system overrides as well as additional CSS styles.
//    */
//   sx: PropTypes.oneOfType([
//     PropTypes.arrayOf(
//       PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
//     ),
//     PropTypes.func,
//     PropTypes.object,
//   ]),
// };
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  return (
  //   <Box
  //   sx={{
  //     width: '100%',
  //     height: '140px',
  //     color: '#fff',
  //     '& > .MuiBox-root > .MuiBox-root': {
  //       p: 1,
  //       border:'1px solid #ccc',
  //       borderRadius: 2,
  //       fontSize: '0.875rem',
  //       fontWeight: '700',
  //     },
  //   }}
  // >
  
    <div className={styles.container}>
     
      <Head>
        <title>WorldShaker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Box component="div" maxWidth="lg">
 
     <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 4,
          gridTemplateRows: 'auto',
          gridTemplateAreas: `"header header header header"
        "projects projects projects projects"  
        "work work work work"
        "case case main main"`,
        }}
      >
         <Box sx={{ gridArea: 'header' }} className=" ">
          <Box
              className="heroText"
              component="div"
            >
          <h1 className="h1Header">
              Data, Insights,
Creativity, and Transformation
              </h1>
              <p className="body">
                Unveiling precise challenges via advanced user research methods, designing and delivering solutions centered around people.
              </p>
            
            
  <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium inline-flex rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <Link
                  href="/contact"
                >
                 
                  Get Started <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
                </Link>
              </button>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <Link
                  href="/contact"
                >
                  Learn more...
                </Link>
              </button>
              </Box>
              </Box>
        <Box sx={{ gridArea: 'main'}}>
        

</Box>
        
        <Box className="bentoBox" sx={{ gridArea: 'work' }}>
        
         <h2> Our Expertise</h2>
         <p className="w-5/6">Explore our diverse range of services, from data analysis to design innovation, to development all driven by a passion for transforming businesses</p>
                
                <Box component="div" sx={{display:'flex'}}>
 <Box component="div" className="bentoContent">
                   <Box className="expertiseCopy" component="div">

<Box component="div" sx={{ textAlign: "center", display: 'flex', alignItems: 'center' }}>
  <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-1x" style={{ "--fa-primary-color": "#3c6818", "--fa-secondary-color": "#3c6818", marginRight: '.5rem' }} /><h4 className="m-0"> Research</h4> 
</Box>


<ul className="list-disc list-inside mb-8">
  <li>Elevate your digital experiences with user-centricity at our design and development firm.</li>
  <li>Our meticulous UX research uncovers valuable insights into user behaviors and preferences.</li>
  
</ul>

                <Link
                  href="/contact"
                >
                  Learn more...
                </Link>
             

</Box>
                 </Box>
 <Box component="div" className="bentoContent"> 
                  <Box component="div" className="expertiseCopy">
           <Box component="div" sx={{ textAlign: "center", display: 'flex', alignItems: 'center' }}>
             <FontAwesomeIcon icon={faPencil} className="fa-1x" style={{ "--fa-primary-color": "#3c6818", "--fa-secondary-color": "#3c6818", marginRight: '.5rem' }} /><h4 className="m-0"> Design</h4>

             {/* <Image src="assets/design1.png" width={88} height={88} alt="Design" layout="fixed" loader={myLoader}></Image> */}
           </Box>
           <ul className="list-disc list-inside mb-8">
             <li>Our design process blends user insight and creative innovation for digital experiences.</li>
             <li>Concepts come alive through sketching, wireframing, and prototyping.</li>
             
           </ul>
           
                <Link
                  href="/contact"
                >
                  Learn more...
                </Link>
             
         </Box>  
         </Box>
         <Box component="div" className="bentoContent"> 
                  <Box className="expertiseCopy" component="div">
         <Box component="div" className="expertiseCopy">
           <Box component="div" sx={{ textAlign: "center", display: 'flex', alignItems: 'center' }}>
             <FontAwesomeIcon icon={faCode} className="fa-1x" style={{ "--fa-primary-color": "#3c6818", "--fa-secondary-color": "#3c6818", marginRight: '.5rem' }} /><h4 className="m-0"> Develop</h4>
           
           </Box>

          
           <ul className="list-disc list-inside mb-8">
             <li>Development process is a symphony of technical expertise and creative ingenuity.</li>
             <li>Ensure functionality, responsiveness, and seamless interactions.</li>
             
           </ul>
           
                <Link
                  href="/contact"
                >
                  Learn more...
                </Link>
              
         </Box>
        </Box>
                    </Box> 
                </Box>
                
                
                 
                
                   
                  
       
      
        </Box>
        <Box sx={{ gridArea: 'projects' }} className="">
         <Image
                src="/assets/workcbanner.png"
                width={1200}
                height={150}
                alt="Work Banner"
                layout="responsive"
              >
              </Image>
        </Box>
        <Box sx={{ gridArea: 'case' }}>
        
           <Box component="div" className="bentoBox">   
           <h2>Case Studies</h2>
        <p>Delve into our portfolio of case studies, showcasing how we've partnered with clients to overcome challenges and achieve remarkable outcomes</p>
                  <Box className="expertiseCopy" component="div">
         <Box component="div" className="expertiseCopy">
           <Box component="div" sx={{ textAlign: "center", display: 'flex', alignItems: 'center' }}>
             <FontAwesomeIcon icon={faCode} className="fa-1x" style={{ "--fa-primary-color": "#3c6818", "--fa-secondary-color": "#3c6818", marginRight: '.5rem' }} /><h4 className="m-0"> Develop</h4>
           
           </Box>

          
           <ul className="list-disc list-inside mb-8">
             <li>Development process is a symphony of technical expertise and creative ingenuity.</li>
             <li>Ensure functionality, responsiveness, and seamless interactions.</li>
             
           </ul>
          
                <Link
                  href="/contact"
                >
                  Learn more...
                </Link>
             
         </Box>
        </Box>
                    </Box>    
          </Box> 
          <Box sx={{ gridArea: 'main' }}>
        
        <Box component="div" className="bentoBox">   
        <h2>Case Studies</h2>
     <p>Delve into our portfolio of case studies, showcasing how we've partnered with clients to overcome challenges and achieve remarkable outcomes</p>
               <Box className="expertiseCopy" component="div">
      <Box component="div" className="expertiseCopy">
        <Box component="div" sx={{ textAlign: "center", display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faCode} className="fa-1x" style={{ "--fa-primary-color": "#3c6818", "--fa-secondary-color": "#3c6818", marginRight: '.5rem' }} /><h4 className="m-0"> Develop</h4>
        
        </Box>

       
        <ul className="list-disc list-inside mb-8">
          <li>Development process is a symphony of technical expertise and creative ingenuity.</li>
          <li>Ensure functionality, responsiveness, and seamless interactions.</li>
          
        </ul>
       
             <Link
               href="/contact"
             >
               Learn more...
             </Link>
           
      </Box>
     </Box>
                 </Box>    
       </Box>   
       <Box className="bentoBox" sx={{ gridArea: 'process' }}>

        </Box> 
      </Box>
  
     </Box>
     
    </div>
    
  )
}
