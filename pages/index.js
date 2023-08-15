import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
  Box,
  Stack,
  Item,
  Container,
} from "@mui/material";
import { Button, css } from "@nextui-org/react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import Meta from "../components/Meta";
import { AnimatePresence } from "framer-motion";
import { Text } from "@nextui-org/react";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { textAlign } from "@mui/system";
import myLoader from "../components/Loader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";

export default function Home() {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

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
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%" }}
      >
        <Box component="header" maxWidth="lg">
          <Box
            className="heroText"
            component="div"
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
            <Grid container spacing={4} mt={2} sx={{ maxWidth: "lg" }}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} pt={10}>
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
                      src="assets/blackLadyExec4.png"
                      width={300}
                      height={300}
                      alt="Black Lady Exec"
                      loader={myLoader}
                      blurDataURL="assets/blur-image.jpg"
                      placeholder="blur"
                    ></Image>
                  </motion.div>
                </Box>
                <Box component="div" display="flex" sx={{ justifyContent: { xs: "center", sm: "center", md: "left", lg: "left", xl: "left" } }}>
                  <Button size="lg" color="secondary" css={{ borderRadius: "$2xl" }} >
                    <Link
                      href="/contact"
                      css={{ color: "primaryLinkText", fontSize: '$sm', fontWeight: "$normal" }}
                    >
                      Let's Talk About Your Project
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
                  src="assets/blackLadyExec4.png"
                  width={400}
                  height={400}
                  alt="Black Lady Exec"
                  loader={myLoader}

                ></Image>
                </motion.div>
              </Grid>

            </Grid>
          </Box>
        </Box>

      </Box>
      <main>

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
                src="assets/workcbanner.png"
                width={1200}
                height={150}
                alt="Work Banner"
                layout="responsive"
                loader={myLoader}
                sizes="(max-width: 1200px) 100vw,
               (max-width: 720px) 100vw, 100vw, 
               (max-width: 500px) 100vw, 100vw"
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
            
              <Box component="div" className="grid grid-cols-3 divide-x" sx={{backgroundColor:'lightgray', padding:'1rem', borderRadius:'1rem'}}>

              <Box component="div" sx={{ textAlign: "center", display: 'flex', alignItems: 'center'}}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-1x" style={{ "--fa-primary-color": "#3c6818", "--fa-secondary-color": "#3c6818", marginRight: '.5rem' }} /><h3 className="grid grid-cols-3 divide-x"> Research</h3> {/* <Image src="assets/discover.png"
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
              <p>At our digital experience design and development firm, we place user-centricity at the heart of everything we do, and our UX research process is a testament to that commitment. Through meticulous research, we delve deep into the mindset of your target audience, uncovering valuable insights into their behaviors, preferences, and pain points.Our skilled researchers employ a variety of methods, from user interviews and surveys to extensive data analysis, to create a comprehensive picture of your users' needs. This invaluable knowledge fuels our design and development process, allowing us to create digital experiences that resonate on a profound level. The outcome? Seamlessly tailored solutions that not only meet user expectations but anticipate their needs, fostering engagement, loyalty, and ultimately driving your business success. With our UX research expertise, we ensure that every interaction your users have with your digital platform is not just functional, but delightful, leaving a lasting positive impression and elevating your brand in today's competitive landscape.</p>  
              {/* <button onClick={toggleReadMoreLess}>
        {isShowMore ? "Read Less" : "Read More"}
            </button> */}
            </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Box component="div" sx={{backgroundColor:'lightgray', padding:'1rem', borderRadius:'1rem'}}>
              <Box component="div" sx={{ textAlign: "center", display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faPencil} className="fa-1x" style={{ "--fa-primary-color": "#3c6818", "--fa-secondary-color": "#3c6818", marginRight: '.5rem' }} /><h3> Design</h3>

                {/* <Image src="assets/design1.png" width={88} height={88} alt="Design" layout="fixed" loader={myLoader}></Image> */}
              </Box>
              <p>At our digital experience design and development firm, our design process is an artful fusion of user insight and creative innovation. Beginning with an immersive exploration of user research, we gain a profound understanding of your audience's needs and desires. This knowledge fuels our imaginative journey, where design concepts come to life through sketching, wireframing, and prototyping. Collaborative by nature, we work closely with you to weave your vision seamlessly into every design element. Iteration and refinement are constants as we gather feedback, resulting in harmonious interfaces that reflect your brand and engage users in a meaningful way. The culmination is a testament to our commitment—a digital experience that captivates, resonates, and leaves an enduring imprint, elevating your business in the digital realm.</p> 
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
            <Box component="div" sx={{backgroundColor:'lightgray', padding:'1rem', borderRadius:'1rem'}}>
              <Box component="div" sx={{ textAlign: "center", display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faCode} className="fa-1x" style={{ "--fa-primary-color": "#3c6818", "--fa-secondary-color": "#3c6818", marginRight: '.5rem' }} /><h3> Develop</h3>
                {/* <Image src="assets/dev1.png" width={88} height={88} alt="Develop" layout="fixed" loader={myLoader} sizes="(max-width: 88px) 100vw,
              (max-width: 88px) 50vw,
              33vw"></Image> */}
              </Box>

              {/* <Typography
                variant="h4"
                sx={{ color: "#333", textAlign: "center" }}
              >
               
              </Typography> */}

              <p>  At our digital experience design and development firm, our development process is a symphony of technical expertise and creative ingenuity. Guided by the user-centric designs, we meticulously code and craft every element, ensuring functionality, responsiveness, and seamless interactions. Our skilled developers seamlessly integrate dynamic features and functionalities, breathing life into the designs and creating an immersive user experience. Collaboration with our design team and your input remains pivotal as we navigate the intricacies of development. Rigorous testing and optimization guarantee a flawless performance across devices and browsers, culminating in the deployment of a robust and captivating digital platform. Our development process stands as a testament to our commitment to excellence, delivering digital experiences that not only meet but exceed expectations, empowering your business in the digital landscape.</p>
              {/* <Typography
                variant="body1"
                sx={{ color: "#333", textAlign: "left", marginBottom: "0" }}
              >
             
              </Typography> */}
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
                        css={{ borderRadius: "$xl" }}
                      >
                        <Link
                          href="/west-side-german-shepherd"
                          css={{ color: "primaryLinkText", fontSize: "$sm" }}
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
                          loader={myLoader}
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
                      src="/fadeBlob2.png"
                      width={600}
                      height={600}
                      alt=""
                      layout="responsive"
                      loader={myLoader}
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
                    css={{ borderRadius: "$xl" }}
                  >
                    <Link
                      href="/fade-solutions"
                      css={{ color: "primaryLinkText", fontSize: "$sm" }}
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
                    css={{ borderRadius: "$xl", backgroundColor: '#ccc' }}
                    disabled
                  >
                    <Link
                      className="disabledBtn"
                      href="/"
                      css={{ color: "#333", fontSize: "$sm" }}
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
                      src="/wineBlob2.png"
                      width={600}
                      height={600}
                      layout="responsive"
                      loader={myLoader}
                      alt=""
                    ></Image>
                  </motion.div>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </main>

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
