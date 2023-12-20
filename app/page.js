'use client'
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Box from '@mui/material/Box'; 
import Container from '@mui/material/Container'; 
import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography'; 
import Card from '@mui/material/Card'; import CardContent from '@mui/material/CardContent'; 
import CardMedia from '@mui/material/CardMedia'; 
import Divider from '@mui/material/Divider'; 
import Button from '@mui/material/Button';
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";
import Meta from "../components/Meta";
import { AnimatePresence } from "framer-motion";
import Chip from "@mui/material/Chip";
import { textAlign } from "@mui/system";
import myLoader from "../components/Loader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";
//import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
//useSWR allows the use of SWR inside function components
//import useSWR from 'swr';

const { heroContent, heroWrapper, overlay, imageWrapper, heroImage } = styles;

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="grid-container">
      <Head>
        <title>WorldShaker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
<div>
      <h1 className="h1Header mb-8">
                Data, Insights, &
                Creativity, <br></br>Produce Transformation
              </h1>
              <p className="mb-8">
                At WorldShaker Interactive, we harness the power of data, unearth insights,<br></br> and infuse creativity to catalyze transformative solutions for our clients.
              </p>


              <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium inline-flex rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <Link className="flex leading-4"
                  href="/submit-info"
                >

                  Get Started <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor"  d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </Link>
              </button>
              <button className="text-white hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 leading-4">
                <Link className="leading-4"
                  href="/contact"
                >
                  Learn more...
                </Link>
              </button>

      </div>
      <div></div>
      <div></div>
<div></div>

      </div>
      
      <Box component="section" className="container mx-auto max-w-7xl">
        <Box component="div" className="grid-container"
         
         >
          {/* <Box sx={{ gridArea: 'header' }} className="mt-40">
            <Box
              className="heroText"
              component="div"
            >
              <h1 className="h1Header mb-8">
                Data, Insights, &
                Creativity, <br></br>Produce Transformation
              </h1>
              <p className="mb-8">
                At WorldShaker Interactive, we harness the power of data, unearth insights,<br></br> and infuse creativity to catalyze transformative solutions for our clients.
              </p>


              <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium inline-flex rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <Link className="flex leading-4"
                  href="/submit-info"
                >

                  Get Started <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor"  d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </Link>
              </button>
              <button className="text-white hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 leading-4">
                <Link className="leading-4"
                  href="/contact"
                >
                  Learn more...
                </Link>
              </button>
            </Box>
          </Box> */}
          <Box sx={{ gridArea: 'main' }}>


          </Box>

          <Box className="bentoBox rounded-2xl" sx={{ gridArea: 'work' }}>
            <Box component="div" className="bentoContent">


              <Box component="div" className="bentoImg">

                {/* <Image
                  priority
                  src="https://ik.imagekit.io/ylqs11u10/doctor.png"
                  // layout="fill"
                  objectFit="cover"
                  width="2560"
                  height="1440"
                  objectPosition="center"
                  alt="Dream Medical Hero"
                  // display='grid'
                  className="rounded-2xl image"
                /> */}
                <Box component="div" className="overlay rounded-2xl">


                </Box>  
                <Box component="div" className="bentoCopy p-4">
                <h3 className="mt-4">Our Expertise</h3>
                <p className="w-5/6 mt-4">Explore our diverse range of services, from data analysis to design innovation, to development all driven by a passion for transforming businesses.</p>
              </Box>

              </Box>

            
            </Box>
            <Box component="div" sx={{ display: 'flex' }}>
              {/* <Box component="div" className="bentoContent">


                <Box component="div" sx={{ textAlign: "center", display: 'flex', alignItems: 'center' }}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-1x" style={{ "--fa-primary-color": "#3c6818", "--fa-secondary-color": "#3c6818", marginRight: '.5rem' }} /><h4 className="m-0"> Research</h4>
                </Box>


                <ul className="list-disc list-outside pl-4 mb-8">
                  <li>Elevate your digital experiences with user-centricity at our design and development firm.</li>
                  <li>Our meticulous UX research uncovers valuable insights into user behaviors and preferences.</li>

                </ul>

                <Link
                  href="/contact"
                >
                  Learn more...
                </Link>



              </Box> */}
              <Box component="div" className="bentoContent">

                {/* <Box component="div" className="bentoCopy p-2">
                  <Box component="div" sx={{ textAlign: "center", display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faPencil} className="fa-1x" style={{ "--fa-primary-color": "#3c6818", "--fa-secondary-color": "#3c6818", marginRight: '.5rem' }} />
                    <h4 className="m-0"> Design</h4>

                    {/* <Image src="assets/design1.png" width={88} height={88} alt="Design" layout="fixed" loader={myLoader}></Image> 
                  </Box>
                  <ul className="list-disc list-outside pl-4 mb-8">
                    <li>Our design process blends user insight and creative innovation for digital experiences.</li>
                    <li>Concepts come alive through sketching, wireframing, and prototyping.</li>

                  </ul>

                  <Link
                    href="/contact"
                  >
                    Learn more...
                  </Link>

                </Box> */}
              </Box>
              <Box component="div" className="bentoContent">

                {/* <Box className="bentoCopy p-2" component="div">

                  <Box component="div" sx={{ textAlign: "center", display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faCode} className="fa-1x" style={{ "--fa-primary-color": "#3c6818", "--fa-secondary-color": "#3c6818", marginRight: '.5rem' }} /><h4 className="m-0"> Develop</h4>

                  </Box>


                  <ul className="list-disc list-outside pl-4 mb-8">
                    <li>Development process is a symphony of technical expertise and creative ingenuity.</li>
                    <li>Ensure functionality, responsiveness, and seamless interactions.</li>

                  </ul>

                  <Link
                    href="/contact"
                  >
                    Learn more...
                  </Link>


                </Box> */}
              </Box>
            </Box>

          </Box>
          <Box sx={{ gridArea: 'projects' }} className="mt-20">
            <p className="text-center mb-10">Discover the remarkable companies and organizations we've had the privilege<br></br> to collaborate with on their journeys to success</p>
            {/* <Image
              src="/assets/workcbanner.png"
              width={1200}
              height={150}
              alt="Work Banner"
              layout="responsive"
            >
            </Image> */}
          </Box>
          <Box sx={{ gridArea: 'case' }}>

            <Box component="div" className="bentoBox rounded-2xl">
              <Box component="div" className="bentoContent">
                <Box component="div" className="bentoImg">
                  {/* <Image
                    priority
                    src="https://ik.imagekit.io/ylqs11u10/doctor.png"
                    // layout="fill"
                    objectFit="cover"
                    width="2560"
                    height="1440"
                    objectPosition="center"
                    alt="Dream Medical Hero"
                    className="rounded-2xl"
                  /> */}
                  <Box component="div" className="overlay rounded-2xl">
                  </Box> 
                  <Box component="div" className="bentoCopy p-4">
                  <h3 className="mt-4">Case Studies</h3>

                  <p className="mt-4">Delve into our portfolio of case studies, showcasing how we've partnered with clients to overcome challenges and achieve remarkable outcomes</p>

                  <ul className="list-disc list-outside pl-4 mb-8">
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
         
          <Box sx={{ gridArea: 'tools' }} className="bentoBox rounded-2xl">
            <Box component="div" className="bentoContent">
              <Box component="div" className="bentoImg">

                {/* <Image
                  priority
                  src="https://ik.imagekit.io/ylqs11u10/doctor.png"
                  // layout="fill"
                  objectFit="cover"
                  width="2560"
                  height="1440"
                  objectPosition="center"
                  alt="Dream Medical Hero"
                  className="rounded-2xl"
                /> */}
                <Box component="div" className="overlay rounded-2xl">
                </Box>
                <Box component="div" className="bentoCopy p-4">
                <h3>Innovative Toolkit</h3>
              </Box>
              </Box>
              
            </Box>
          </Box>
          <Box sx={{ gridArea: 'designsystem' }} className="bentoBox rounded-2xl">
            <Box component="div" className="bentoContent">
              <Box component="div" className="bentoImg">
                <h6>Media</h6>
                {/* <Image
                  priority
                  src="https://ik.imagekit.io/ylqs11u10/doctor.png"
                  // layout="fill"
                  objectFit="cover"
                  width="2560"
                  height="1440"
                  objectPosition="center"
                  alt="Dream Medical Hero"
                  display='grid'
                  className="rounded-2xl"
                /> */}
                <Box component="div" className="overlay rounded-2xl">
                </Box> 
                <Box component="div" className="bentoCopy p-4">
                <h3>Picture Perfect Moments</h3>
              </Box>
              </Box>
             
            </Box>
          </Box>
          <Box sx={{ gridArea: 'domain' }} className="bentoBox rounded-2xl">
            <Box component="div" className="bentoContent">
              <Box component="div" className="bentoImg">
                <h3>Domain Excellence</h3>
                {/* <Image
                  priority
                  src="https://ik.imagekit.io/ylqs11u10/doctor.png"
                  // layout="fill"
                  objectFit="cover"
                  width="2560"
                  height="1440"
                  objectPosition="center"
                  alt="Dream Medical Hero"
                  display='grid'
                  className="rounded-2xl"
                />  */}
                <Box component="div" className="overlay rounded-2xl">
                </Box>
              </Box>

            </Box>
          </Box>
          <Box sx={{ gridArea: 'newsletter' }} className="bentoBox rounded-2xl">
            <Box component="div" className="bentoContent">
              <Box component="div" className="bentoImg">
                <h3>Signup for Newsletter</h3>
                {/* <Image
                  priority
                  src="https://ik.imagekit.io/ylqs11u10/doctor.png"
                  // layout="fill"
                  objectFit="cover"
                  width="2560"
                  height="1440"
                  objectPosition="center"
                  alt="Dream Medical Hero"
                  display='grid'
                  className="rounded-2xl"
                /> */}
                <Box component="div" className="overlay rounded-2xl">
                </Box> 
                <Box component="div" className="bentoCopy p-4">

              </Box>
              </Box>

             
            </Box>
          </Box>
        </Box>
      </Box>

    </div>

  )
}
