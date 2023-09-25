import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
  Box,
  Stack,
  Item,
  Container,
} from "@mui/material";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
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
import { useRouter } from 'next/router'
//useSWR allows the use of SWR inside function components

import useSWR from 'swr';


//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>WorldShaker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        component="section"
        className="homeHero"
        padding={0}
        direction="column"
        display="grid"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%" }}
      >

        <Grid container spacing={4} mt={2} sx={{ maxWidth: "lg" }}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} pt={10} >
            <Box
              className="heroText"
              component="div"
              maxwidth="lg"
              sx={{
                display: "flex",
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "left",
                  lg: "left",
                  xl: "left",
                },

                height: "auto",
                width: "100%",
              }}
            >
              <h1 className="h1Header">
                Elevating Businesses with Seamless Digital Metamorphosis
              </h1>
              <p className="body">
                Unveiling precise challenges via advanced user research methods, designing and delivering solutions centered around people.
              </p>
            
              <Box component="div" mb={5} sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none", xl: "none" } }}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    src="/assets/blackLadyExec4.png"
                    width={300}
                    height={300}
                    alt="Black Lady Exec"

                    blurDataURL="assets/blur-image.jpg"
                    placeholder="blur"
                  ></Image>
                </motion.div>

              </Box>
  <Button size="lg" color="secondary">
                <Link
                  href="/contact"
                >
                  Get Started...
                </Link>
              </Button>


            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block", xl: "block" } }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            ><Image
              src="/assets/blackLadyExec4.png"
              width={600}
              height={400}
              alt="Black Lady Exec"


            ></Image>
            </motion.div>
          </Grid>

        </Grid>
      </Box>
        <Box className="homePage work"
          direction="row"
          display="flex"
          justifyContent="center"
          alignItems="center"
          component="section">
          <Box component="div" maxWidth="lg">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/assets/workcbanner.png"
                width={1200}
                height={150}
                alt="Work Banner"
                layout="responsive"
              >
              </Image>
            </motion.div>
          </Box>
        </Box>
        <Box
          className="homePage"
          direction="row"
          display="flex"
          justifyContent="center"
          component="section"
          id="whatWeDo"
          sx={{
            backgroundColor: "#f9f9f9",
            paddingTop: "3rem",
            paddingBottom: "3rem",
          }}
        >
          <Grid container sx={{ maxWidth: "lg", marginTop: "0" }} spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={0}>
              {/* <Typography variant="h2" sx={{ textAlign: "center" }}> What We Do</Typography> */}
              <h2> What We Do</h2>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} pt={0}>

              <Box component="div" sx={{}}>

                <Box component="div" sx={{ textAlign: "center", display: 'flex', alignItems: 'center' }}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-1x" style={{ "--fa-primary-color": "#3c6818", "--fa-secondary-color": "#3c6818", marginRight: '.5rem' }} /><h4 className="m-0"> Research</h4> {/* <Image src="assets/discover.png"
                  width={88}
                  height={88}
                 alt="Research"
                  layout="fixed" loader={myLoader}></Image> */}
                </Box>

                {/* <Typography
                variant="h4"
                sx={{ color: "#333", textAlign: "center", fontWeight: '500' }}
              >
               
              </Typography> */}

                {/* <Typography
                variant="body1"
                sx={{ color: "#333", textAlign: "left", marginBottom: "0" }}
              >
                
              </Typography> */}
                <ul className="list-disc">
                  <li>Elevate your digital experiences with user-centricity at our design and development firm.</li>
                  <li>Our meticulous UX research uncovers valuable insights into user behaviors and preferences.</li>
                  <li>Diverse methods, from user interviews to data analysis, inform our tailored solutions.</li>
                  <li>Craft exceptional digital experiences that anticipate user needs, fostering engagement and loyalty.</li>
                  <li>Leave a lasting positive impression with every interaction, elevating your brand in today's competitive landscape.</li>
                </ul>
                {/* {showMore ? text : `${text.substring(0, 250)}`} */}

              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box component="div" sx={{}}>
                <Box component="div" sx={{ textAlign: "center", display: 'flex', alignItems: 'center' }}>
                  <FontAwesomeIcon icon={faPencil} className="fa-1x" style={{ "--fa-primary-color": "#3c6818", "--fa-secondary-color": "#3c6818", marginRight: '.5rem' }} /><h4 className="m-0"> Design</h4>

                  {/* <Image src="assets/design1.png" width={88} height={88} alt="Design" layout="fixed" loader={myLoader}></Image> */}
                </Box>
                <ul className="list-disc">
                  <li>Our design process blends user insight and creative innovation for digital experiences.</li>
                  <li>Concepts come alive through sketching, wireframing, and prototyping.</li>
                  <li>Collaborative approach integrates your vision seamlessly into designs.</li>
                  <li>Iteration and feedback refine interfaces, reflecting your brand and engaging users.</li>
                  <li>Result: Captivating, resonating digital experiences that elevate your business.</li>
                </ul>
                {/* <button onClick={toggleReadMoreLess}>
        {isShowMore ? "Read Less" : "Read More"}
      </button> */}
                {/* <Typography
                variant="h4"
                sx={{ color: "#333", textAlign: "center" }}
              >
               
              </Typography> */}
                {/* <Typography
                variant="body1"
                sx={{ color: "#333", textAlign: "left", marginBottom: "0" }}
              >
                
              </Typography> */}
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box component="div" sx={{}}>
                <Box component="div" sx={{ textAlign: "center", display: 'flex', alignItems: 'center' }}>
                  <FontAwesomeIcon icon={faCode} className="fa-1x" style={{ "--fa-primary-color": "#3c6818", "--fa-secondary-color": "#3c6818", marginRight: '.5rem' }} /><h4 className="m-0"> Develop</h4>
                  {/* <Image src="assets/dev1.png" width={88} height={88} alt="Develop" layout="fixed" loader={myLoader} sizes="(max-width: 88px) 100vw,
              (max-width: 88px) 50vw,
              33vw"></Image> */}
                </Box>

                {/* <Typography
                variant="h4"
                sx={{ color: "#333", textAlign: "center" }}
              >
               
              </Typography> */}


                {/* <Typography
                variant="body1"
                sx={{ color: "#333", textAlign: "left", marginBottom: "0" }}
              >
             
              </Typography> */}
                <ul className="list-disc">
                  <li>Development process is a symphony of technical expertise and creative ingenuity.</li>
                  <li>Ensure functionality, responsiveness, and seamless interactions.</li>
                  <li>Skilled developers integrate dynamic features, creating immersive user experiences.</li>
                  <li>Rigorous testing and optimization ensure flawless performance across devices and browsers.</li>
                  <li>Culmination: Deployment of robust and captivating digital platform.</li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          className="homePage"
          direction="row"
          display="flex"
          justifyContent="center"
          component="section"
          sx={{ backgroundColor: "#f1eded" }}
        >
          <Grid container sx={{ maxWidth: "lg" }} spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={8}>
              {/* <Typography variant="h2" sx={{ color: "#333", textAlign: "center" }}>
                
              </Typography> */}
              <h2>Case Studies</h2>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb={10}>
              <Box component="div" className="list-wrap">
                <Box component="div">
                  <Box
                    component="div"
                    className="case"
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    mb={3}
                  >

                  </Box>
                  <Box component="div" display="flex" flexDirection="row" >
                    <Box component="div" width="50vw">
                      {/* <Typography variant="h3">
                        
                      </Typography> */}
                      <h3>Westside German Shepherd Rescue</h3>
                      {/* <Typography variant="body1">
                  
                      </Typography> */}
                      <p>Read our case study on how we came up with a new design
                        for the very outdated look of sheprescue.org and improved
                        the look and user experience for their site.</p>
                      <Button
                        size="sm"
                        color="secondary"
                        
                      >
                        <Link
                          href="/west-side-german-shepherd"
                         
                        >
                          Read more...
                        </Link>
                      </Button>
                    </Box>
                    <Box component="div" width="50vw" p={2}>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                      >
                        <Image
                          src="/assets/wgsrBlob2.png"
                          width={600}
                          height={600}
                          layout="responsive"
                          alt="West-Side German Shepherd Rescue"
                        >

                        </Image>
                      </motion.div>
                    </Box>
                  </Box>

                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb={10}>
              <Box
                component="div"
                className="case"
                display="flex"
                flexDirection="row"
                alignItems="center"
                mb={3}
              >

              </Box>
              <Box component="div" display="flex" flexDirection="row" >
                <Box component="div" width="50vw" p={2}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/assets/fadeBlob2.png"
                      width={600}
                      height={600}
                      alt=""
                      layout="responsive"
                    ></Image>
                  </motion.div>
                </Box>
                <Box component="div" width="50vw">
                  {/* <Typography variant="h3">
                   
                  </Typography>
                  <Typography variant="body1">
                    
                  </Typography> */}
                  <h3> Fade Technology Solutions</h3>
                  <p>Fade Technology Solutions needed a dashboard solution
                    designed to manage their campaigns, users, brands, and
                    agencies. Read about our process and see what we came up
                    with.</p>
                  <Button
                    size="sm"
                    color="secondary"
                    
                  >
                    <Link
                      href="/fade-solutions"
                     
                    >
                      Read more...
                    </Link>
                  </Button>
                </Box>

              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb={8}>
              <Box
                component="div"
                className="case"
                display="flex"
                flexDirection="row"
                alignItems="center"
                mb={3}
              >

              </Box>
              <Box component="div" display="flex" flexDirection="row" >
                <Box component="div" width="50vw">
                  {/* <Typography variant="h3"></Typography>
                  <Typography variant="body1">
                  
                  </Typography> */}
                  <h3>The Winery, Brooklyn</h3>
                  <p>  The Winery, Brooklyn is opening a new wine store in the
                    Prospect Leffertys-Gardens area of Brooklyn and needs a
                    website for that location. We worked with the team to
                    design the new site. Read on to learn our who, what,
                    where, and why.</p>
                  <Button
                    size="sm"
                    
                    disabled
                  >
                    <Link
                      className="disabledBtn"
                      href="/"
                    
                    >
                      Coming soon...
                    </Link>
                  </Button>
                </Box>
                <Box component="div" width="50vw" p={2}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/assets/wineBlob2.png"
                      width={600}
                      height={600}
                      layout="responsive"
                      alt=""
                    ></Image>
                  </motion.div>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
     

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer> */}


    </div>
  )
}
