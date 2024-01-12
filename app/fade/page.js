'use client'
import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Container, Item, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import { borders } from "@mui/system";
import { motion, AnimatePresence } from 'framer-motion';
import usabilityTest from '/public/assets/FadeUsabilityTest_LoriMarion_2.gif';
const commonStyles = {
  bgcolor: "#e7e6e2",
  borderColor: "text.primary",
  m: 1,
  p: 1,
  border: 0,
};
import { useRouter } from 'next/router'
const FadeDesign = () => {
  return (
    <div className="fade">
  
      <Box
        mt={8}
        component="section"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid container spacing={2} sx={{ maxWidth: "sm" }}>
          <Grid item xs={12} lg={12} xl={12} md={12} sm={12}>
            <Box component="div" pt={4} pb={4} sx={{ textAlign: "left" }}>
              <h1 className="caseStudyHeads">Unleashing Insights at a Glance</h1>
              <p className="body1">
                Revolutionizing Ad Campaign Management with Fade Technology Solutions' Visual Dashboard for Publishers, Advertisers, and Brands
              </p>
            </Box>
          </Grid>
          <Grid item xs={12} lg={12} xl={12} md={12} sm={12}>
            <Box component="div">
              <Image layout="responsive"
                src="/assets/fadeMacBookDesktop.png"
                width={960}
                height={648}
                alt="WGSR Hero"
                quality={75}
                blurDataURL="/assets/path-to-blur-image.jpg"
                placeholder="blur"
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Grid container spacing={2} sx={{ maxWidth: "sm" }}>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <h6>
                    Client
                  </h6>
                  <p>
                    Fade Technology - fade.technology{" "}
                  </p>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <h6>Year</h6>
                  <p>2021</p>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <h6>Role</h6>

                  <p>
                    Information Architect &amp; UX Researcher
                  </p>
                </Grid>

                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <h6>What I Did</h6>
                  <p>
                    My principal role was Information Architect and I
                    collaborated on research and visual design. I drew low
                    fidelity sketches in our design studio workshop, designed
                    site maps, user flows, and conducted usability testing to
                    validate prototypes.
                  </p>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        component="div"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container mt={6} spacing={0} sx={{ maxWidth: "sm" }}>
          <Grid item xs={12} md={12} lg={12} mb={8}>
            <h5>Overview</h5>
            <h2>About This Project</h2>

            <p>
              Fade Technology is an early-stage startup with a team of
              entertainment technology, payments, and digital leaders from
              leading companies. Fade Technology provides the quickest way to
              embed the next-generation of shoppable media on the digital
              publisher and streaming service platforms. It is a cloud-based
              platform that enables digital publishers to monetize editorial,
              sponsored, advertorial, and original video content natively. It
              allows a new e-commerce experience that lets viewers instantly
              discover and buy products directly from the video on the platform
              they are on, without redirects.
            </p>
          </Grid>
          <Grid item xs={12} lg={12} md={12} mb={8}>
            <h2>The Problem</h2>

            <p>
              Fade Technology Solutions needs an admin UI for their clients so
              that they can easily track and manage their sales data and
              campaign metrics.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <h5>Discovery</h5>
          </Grid>
          <Grid item xs={12} lg={12} md={12} mb={8}>
            <h2>The Project Brief</h2>
            <p>
              The Fade executives and technology teams came to us with a
              detailed project brief, inclding how their system worked for
              publishers, agencies, brands and admins and examples of Facebook
              Business Suite and Snapchat's Business dashboard. We did not have
              access to user info, nor could we interview users since their
              users are their business clients.
            </p>

            <p>
              Fade did part of our Double Diamond work for us and we just needed
              to build on what they provided and begin with competitive and
              comparative analysis then moved to sketches and low-fidelity
              wireframing based on the examples.
            </p>
          </Grid>

          <Grid item xs={12} lg={12} xl={12} mb={8}>
            <h2>Competitive Analysis</h2>
            <p>
              Campaign managment solutions and administrative dashboards are
              nothing new. Many companies, such as Amazon, YouTube and Facebook
              alll have those solutions for their business users. We simply
              looked at those properties and features and applied it to Fades
              project brief.
            </p>
            <p>
              Fades business model is an advertiser driven B2B model not for
              consumers, so we focused heavily on their layout and UI components
              including analytics. Fade has no direct competitors based on their
              unique offering.
            </p>
            <p>Observations:</p>
            <ul className="list-disc">
              <li>
                Dashboards all have analytics and charts and features to analyse
                the data.
              </li>
              <li>
                There are access and privilege levels assigned to users
                including who has administrative rights.
              </li>
              <li>Administrators invite users to the platform.</li>
              <li>
                Security protocols are put in place to prevent unauthorized
                access of the platform.
              </li>
              <li>
                Campaign management features such as 'Create a Campaign',
                'Start/Stop a Campaign'.
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} lg={12} md={12} mb={8}>
            <h2>Comparative Analysis</h2>
            <p>
              Fades proposition is a unique technology and although there are
              similarites in the online ad space they do not have a direct
              competitor. We next looked at Amazon's Seller Central's dashboard.
              Their business model is not an advertishing based model but there
              are similarities in their solutions. This was to gather more data
              on how these solutions are designed, and to get more inspiration.
            </p>
          </Grid>
          <Grid item xs={12} lg={12} md={12} mb={8}>
            <Box
              component="div"

              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image layout="responsive" layout="responsive"
                className="imageBorderradius"
                src="/assets/comparacampaign.png"

                width={540}
                height={182}
                alt=""
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} lg={12} md={12} mb={8}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"

              alignItems="center"
            >
              <Image layout="responsive"

                src="/assets/comparamanusers.png"
                width={543}
                height={182}
                alt=""
              ></Image>
            </Box>
          </Grid>

          <Grid item xs={12} lg={12} mb={8}>
            <h2 mb={4}>
              Persona:Meet Pamela Wu
            </h2>
            <Box
              component="div"
              display="flex"
              justifyContent="center"

              alignItems="center"
            >
              <Image layout="responsive"
                src="/assets/fadepersona.png"
                className="imageBorderradius"
                alt="Persona"
                height={636}
                width={900}

              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <h5>Define</h5>
            <h2>Journey Map</h2>
            <p>
              In the image below we map the user journey of Pamela Wu, the
              Account Administrator, as she interacts with the proposed solution
              to accomplish various tasks.
            </p>

            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"

            >
              <Image layout="responsive"
                src="/assets/FadeJourneyMap.png"
                className="imageBorderradius"
                alt="Journey Map"
                height={675}
                width={900}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <h2>User Need</h2>
            <p>
              Pamela Wu needs to set up her account in Fade Technology Solutions
              admi panel and be invite her team to use the system.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <h5>Design</h5>
            <h2>Design Thinking Workshop</h2>
            <p>
              We began our process by sketching low fidelity wireframes with pen
              and paper. Since the brief informed us of what the dashboard
              should look like, based on the examples provided, and the fact
              that we had no ability to do user research with participants, we
              just started sketching. The results were that we got early buyin
              from the client and we could procede to site-mapping and
              mid-fidelity wireframing.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <h2>User Flows</h2>
            <p>
              Fades user flow was touched on earlier at the journey map but here
              is a bit more detail showing how some users navigate on the
              platform. We focused on the primary flow, which is the 'Sign-Up'
              process for the platform. Below are the user flows that we
              designed.
            </p>

            <Box
              component="div"
              display="flex"
              justifyContent="center"

              alignItems="center"
            >
              <Image layout="responsive"
                src="/assets/FadeB2B_Page_userflow1.png"
                alt="User Flow"
                className="imageBorderradius"
                height={506}
                width={900}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"

            >
              <Image layout="responsive"

                src="/assets/FadeB2B_Page_userflow2.png"
                className="imageBorderradius"
                alt="User Flow"
                height={506}
                width={900}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"

              alignItems="center"
            >
              <Image layout="responsive"

                src="/assets/FadeB2B_Page_sitemap1.png"
                alt="Site Map"
                className="imageBorderradius"
                height={506}
                width={900}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"

            >
              <Image layout="responsive"

                src="/assets/FadeB2B_Page_sitemap2.png"
                alt="Site Map 2"
                className="imageBorderradius"
                height={506}
                width={900}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"

            >
              <Image layout="responsive"
                src="/assets/FadeB2B_Page_sitemap3.png"
                alt=""
                className="imageBorderradius"
                height={506}
                width={900}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <h5>Visual Design</h5>

            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"

            >
              <Image layout="responsive"
                src="/assets/earlysketches.png"
                height={560}
                width={900}
                className="imageBorderradius"
                alt="Fade Login"
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"

            >
              <Image layout="responsive"

                src="/assets/midfidelity.png"
                height={352}
                width={900}
                className="imageBorderradius"
                alt="Fade Login"
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <h2>Simple and Intuitive Dashboard</h2>
            <p>
              A simple and intuitive dashboard with all of the minimal features
              that Fade needs for its clients. These are the final design that
              the team and I came up with for Fade's dashboard. Desktop was
              primary so we did not design a mobile solution{" "}
            </p>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"

            >
              <Image layout="responsive"
                src="/assets/PublisherFlow_FinalWelcome.png"
                width={900}
                height={640}
                alt=""
                className="imageBorderradius"
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"

            >
              <Image layout="responsive"
                src="/assets/SignUpFlow_FinalSignup.png"
                width={900}
                height={640}
                alt=""
                className="imageBorderradius"
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"

            >
              <Image layout="responsive"
                src="/assets/PublisherFlow_FinalManageUsers.png"
                className="imageBorderradius"
                width={900}
                height={640}
                alt=""
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb={8}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"

            >
              <Image layout="responsive"
                src="/assets/PublisherFlow_FinalOverview.png"
                width={720}
                height={1080}
                className="imageBorderradius"
                alt=""
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <h5>Testing</h5>
            <h2>Usability Testing</h2>
            <p>
              Finally, we conducted qualitative usability testing sessions with
              our clients to identify problems in our prototype, uncover
              opportunities and to discover users' behaviors and preferences. We
              worked from user testing scripts and guided our users to perform
              specific tasks. We conducted our sessions via Zoom and recorded
              the sessions.
            </p>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"

            >
              <Image layout="responsive"
                src="/assets/FadeUsabilityTest_LoriMarion_2.gif"
                width="640"
                height="378"
                alt="Usability Testing"
                layout="responsive"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <h5>Results & Reflections</h5>

            <h2>Work With What You Have</h2>
            <p>
              Dashboards are a challenging undertaking due to the
              data-visulization features and figuring out the best user
              experience for those components. In this particualr project we had
              to rely on the brief which gave us a lot of information to begin
              designing our solution and we were then able to validate our
              assumptions by usability-testing.
            </p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default FadeDesign;
