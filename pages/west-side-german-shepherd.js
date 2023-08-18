import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Container, Item, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import myLoader from "../components/Loader";
import Meta from "../components/Meta";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useRouter } from 'next/router';

function createData(criteria, test, evaluation) {
  return { criteria, test, evaluation };
}
const rows = [
  createData(
    "Visibility of system status ",
    "Always keep users informed about what is going on.Provide appropriate feedback within reasonable time.",
    "Pass. Site is up and running as expected and loads quickly."
  ),
  createData(
    "Match between system and the real world ",
    "Speak the users' language, with words, phrases and concepts familiar to the user, rather than system-oriented terms. Follow real-world conventions, making information appear in a natural and logical order.",
    "Fails. The website speaks the user’s language, but some information is out of order or not as well organized as it could be for users to find what they are searching for."
  ),
  createData(
    "User control and freedom ",
    "Users often choose system functions by mistake.Provide a clearly marked out to leave an unwanted state without having to go through an extended dialogue. Support undo and redo",
    "Fails. Hard to find and get to where you want to be."
  ),
  createData(
    "Consistency and standards ",
    "Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform conventions.",
    "Fails. The site is totally inconsistent in the design across pages and navigation."
  ),
  createData(
    "Error prevention ",
    "Even better than good error messages is a careful design which prevents a problem from occurring in the first place.",
    "Fails. A user could easily get lost in the site and not be sure of where they are."
  ),
  createData(
    "Recognition rather than recall ",
    "Make objects, actions, and options visible. User should not have to remember information from one part of the dialogue to another. Instructions for use of the system should be visible or easily retrievable whenever appropriate.",
    "Fails."
  ),
  ,
  createData(
    "Flexibility and efficiency of use ",
    "Accelerators -- unseen by the novice user -- may often speed up the interaction for the expert user so that the system can cater to both inexperienced and experienced users. Allow users to tailor frequent actions.",
    "Fails."
  ),
  createData(
    "Aesthetic and minimalist design ",
    "Dialogues should not contain information which is irrelevant or rarely needed. Every extra unit of information in a dialogue competes with the relevant units of information and diminishes their relative visibility.",
    "Fails. Too much information on the home page laid out and formatted inconsistently. Your attention is drawn all over the page. No visual hierarchy established."
  ),
  createData(
    "Help users recognize, diagnose, and recover from errors ",
    "Expressed in plain language (no codes) Precisely indicate the problem Constructively suggest a solution. ",
    "Fails."
  ),
  createData(
    "Help and documentation",
    "Even though it is better if the system can be used without documentation, it may be necessary to provide help and documentation. Help  information should be easy to search, focused on the user's task, list concrete steps to be carried out, and not be too large.",
    "Fails. They provide an FAQ page, but the formatting makes it confusing to read and absorb the information."
  ),
];
const WestSide = () => {
  return (
    <div className="wgsr">
      <Meta title="Case Study::West-Side German Shepherd Rescue" />

      <Box
        component="div"
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={8}
      >
        <Grid container spacing={2} maxWidth="sm">
          <Grid item xs={12} lg={12}>
            <Box component="div" mt={4} mb={3} sx={{ textAlign: "left" }}>
              <h1 className="caseStudyHeads">
                Pawsitively Transformed
              </h1>
              <p>
                Redesigning West Side German Shepherd's Website for Enhanced Canine Connections
              </p>
              <Image layout="responsive" layout="responsive"
                src="/assets/wgsr_hero_study.png"
                width={900}
                height={506}
                alt="WGSR Hero"
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} lg={12} md={12} xl={12}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ flexgrow: "1" }}
            >
              <Grid container spacing={2} sx={{ maxWidth: "md" }}>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                  <h6>Client </h6>
                  <p>
                    West Side German Shepherd Rescue - sheprescue.org
                  </p>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                  <h6>Year</h6>
                  <p>2021</p>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                  <h6>Role</h6>
                  <p>Information Architect</p>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                  <h6>What I Did</h6>
                  <p>
                    My principal role was Information Architect and I
                    collaborated on research and visual design. I drew low
                    fidelity sketches with pencil and paper, designed site maps,
                    user flows and conducted usability testing.
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
        mb={15}
        sx={{ flexGrow: 1 }}
      >
        <Grid container mt={6} spacing={0} sx={{ maxWidth: "sm" }}>
          <Grid item xs={12} md={12} lg={12} mb={8}>
            <h5>Overview</h5>
            <h2>About This Project</h2>

            <p>
              Our team was tasked with designing a new feature(s) and/or improve
              an existing feature(s) for our assigned client(West Side German
              Shepherd Rescue -shepresue.org), to create a delightful experience
              for the persona(s) we defined through research.
            </p>
            <h2>The Problem</h2>
            <p>
              German shepherd lovers need a more personable and updated way to
              select an animal rescue in order to find a german shepherd to add
              to her family. One look at sheprescue.org and you can see that
              this site design is 20 years old.
            </p>
            <Box component="div" mt={6} mb={6}>
              <Image layout="responsive"
                className="imageBorderradius"
                src="/assets/wgsrpresent.png"
                alt=""
                width={900}
                height={705}
              ></Image>
            </Box>
            <h2>How Might We...?</h2>
            <p>
              How might we design an updated experience of sheprescue.org for
              that delivers a more personable experience for their customers?
              The challenge was to design and build a user-centered website for
              West Side German Shepherd Rescue that organized the wines in
              proper categories and provided navigation and search for the user
              to be able to easily find and purchase wines and have them
              delivered.
            </p>
          </Grid>

          <Grid item xs={12} lg={12} md={12} mb={5}>
            <h5>Discover</h5>
          </Grid>

          <Grid item xs={12} lg={12} mb={8}>
            <h2>Research Process</h2>
            <p>
              Our research process consisted of user surveys, user interviews,
              heuristic evaluation, competitive analysis, and comparative analysis.
            </p>
            <h2>1.Heuristic Evaluation</h2>
            <TableContainer className="tableHeuristic">
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Criteria</TableCell>
                    <TableCell align="left">Test&nbsp;</TableCell>
                    <TableCell align="left">Evaluation&nbsp;</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.criteria}>
                      <TableCell align="left" fontWeight="500">
                        {row.criteria}
                      </TableCell>
                      <TableCell align="left">{row.test}</TableCell>
                      <TableCell align="left">{row.evaluation}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} md={12} lg={12} mb={8}>
            <h2>2. User Interview Questions</h2>
            <h6>
              1.Tell me about your experience of finding and adopting your dog
              online.
            </h6>
            <ul className="list-disc">
              <li>Website used</li>
              <li>Timeline (from first search to adoption)</li>
              <li>Adoption application process</li>
              <li>Retrieving dog</li>
            </ul>

            <h6>
              2. What drew you to your dog specifically?
            </h6>
            <ul className="list-disc">
              <li>
                Did you have any special considerations when searching for your
                dog? (e.g. good with cats/other dogs/kids, male/female, age,
                housebroken)
              </li>
            </ul>
            <h6>
              3. Why did you use (website they answered in survey) over other
              websites?
            </h6>
            <ul className="list-disc">
              <li>
                Was there anything that stood out to you as something the site
                did well?
              </li>
              <li>
                Was there anything that stood out to you as something the site
                did not do well?
              </li>
              <li>
                If you were to looking to adopt another dog, would you use this
                website again? Why?
              </li>
            </ul>
            <h6>
              4. Have you ever volunteered with or donated to a shelter or
              rescue? How was that experience?
            </h6>
            <ul className="list-disc">
              <li>
                Have you ever/would you ever consider hosting a foster dog?
                Elaborate.
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} lg={12} mb={8}>
            <h2>3.User Survey</h2>
            <p>
              We created a survey and solicited parcipants to participate via
              social media platforms.
            </p>


          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb={8}>
            <h2>4. Competitive Analysis</h2>
            <p>
              We searched for dog rescue sites and one can see the stark
              differences between sheprescue.org and the other dog rescue or pet
              sites sites. We looked at a few but for the study I have only
              included two.
            </p>
            <Box component="div" mb={6}>
              <Image layout="responsive"
                src="/assets/WGSRCompetitive-Analysis1.png"
                className="imageBorderradius"
                alt="West Side Competitive Analysis 1"
                height={506}
                width={900}
              ></Image>
            </Box>
            <Box component="div" mb={6}>
              <Image layout="responsive"
                src="/assets/WGSRCompetitive-Analysis2.png"
                className="imageBorderradius"
                alt="West Side User Flow"
                height={506}
                width={900}
              ></Image>
            </Box>
            <Box component="div" mb={6}>
              <Image layout="responsive"
                src="/assets/WGSRCompetitive-Analysis3.png"
                className="imageBorderradius"
                alt="West Side User Flow"
                height={506}
                width={900}
              ></Image>
            </Box>
            <Box component="div" mb={6}>
              <Image layout="responsive"
                src="/assets/WGSRCompetitive-Analysis4.png"
                className="imageBorderradius"
                alt="West Side User Flow"
                height={506}
                width={900}
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} lg={12} mb={8}>
            <h2>5. Comparative Analysis</h2>
            <p>
              We also looked at sites that are not competitor and gatehred a few
              insights on the visuals and layout of those sites. We focused
              onthe mobile versions of those sites for our analysis.
            </p>
            <p>A few takeaways:</p>
            <ul className="list-disc">
 <li>
                Don't include entire global navigation, but do include some
                dropdowns
              </li>
              <li>
                Lots of small text links, looks very similar to desktop footer
                -social media links are branded and easy to understand
                -dropdowns easy to spot
              </li>
            </ul>
             
        
            <Box component="div" mb={6}>
              <Image layout="responsive"
                src="/assets/WGSRComparative-Analysis1.png"
                className="imageBorderradius"
                alt="West Side User Flow"
                height={506}
                width={900}
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <h2>6. Affinity Mapping</h2>
            <p>
              We synthesized our research data gathered by affinity mapping
              which revealed the consistent things our users wanted and
              expected.
            </p>
            <Box component="div">
              <Image layout="responsive"

                className="imageBorderradius"
                src="/assets/WGSRAffinity-Map.png"
                width={900}
                height={506}
                alt=""
              ></Image>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} mb={8}>
            <h5>Define</h5>

            <h2>Persona:Carol Olsen</h2>
            <Box component="div" mb={6}>
              <Image layout="responsive"

                className="imageBorderradius"
                src="/assets/wsgrpersona.jpg"
                alt="West Side Persona"
                height={720}
                width={1280}
              >
              </Image>
            </Box>
            <h2>User Need</h2>
            <p>
              Carol Olsen, a teacher, and tech savvy dog lover needs a process
              that makes it very easy to adopt a german-shepherd.
            </p>
          </Grid>

          <Grid item xs={12} lg={12} mb={8}>
            <h5>Design</h5>

            <h2>
              Design for Search, Dog Bio and Adoption Application
            </h2>

            <p>
              Here is the new information architecture that we came up with
              based on the insights gathered. We eliminated a few pages that
              made no sense and consolidated that information into other pages.
            </p>
          </Grid>

          <Grid item xs={12} lg={12} mb={8}>
            <h2>User Flow</h2>
            <Box component="div">
              <Image layout="responsive"
                className="imageBorderradius"
                src="/assets/WGSRUser-Flow.png"
                alt="West Side User Flow"
                height={610}
                width={900}
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} lg={12} mb={8}>
            <h2>Site Map</h2>
            <Box component="div">
              <Image layout="responsive"

                className="imageBorderradius"
                src="/assets/wgsrsitemapPresentation.png"
                alt="West Side Sitemap"
                height={526}
                width={900}
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} lg={12} mb={8}>
            <h2>Sketches</h2>
            <Box component="div" mb={6}>
              <Image layout="responsive"

                className="imageBorderradius"
                src="/assets/wgsrsketcheshome.png"
                alt="West Side Sitemap"
                height={506}
                width={900}
              ></Image>
            </Box>
            <Box component="div" mb={6}>
              <Image layout="responsive"

                className="imageBorderradius"
                src="/assets/wgsrsketchesDogs.png"
                alt="West Side Sitemap"
                height={506}
                width={900}
              ></Image>
            </Box>
            <Box component="div" mb={6}>
              <Image layout="responsive"

                className="imageBorderradius"
                src="/assets/wgsrsketchesMobileMenu.png"
                alt="West Side Sitemap"
                height={506}
                width={900}
              ></Image>
            </Box>
            <Box component="div" mb={6}>
              <Image layout="responsive"

                className="imageBorderradius"
                src="/assets/wgsrsketchesDesktop.png"
                alt="West Side Sitemap"
                height={506}
                width={900}
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} lg={12} mb={8}>
            <h5>Visual Design</h5>
            <h2>Mid-fidelity Wireframes</h2>
            <p>
              Next in our processs be moved to mid-fidelity wireframes. Here are
              a few of the mobile and desktop wireframes that we came up with
              through some iterations.
            </p>
            <Box component="div" mb={6}>
              <Image layout="responsive"
                className="imageBorderradius"
                src="/assets/wgsrmidFidelity.png"
                alt="West Side Mid-Fi Wireframe"
                height={506}
                width={900}
              ></Image>
            </Box>

            <Box component="div" mb={6}>
              <Image layout="responsive"
                className="imageBorderradius"
                src="/assets/wgsrmidFidelity2.png"
                alt="West Side Mid-Fi Wireframe"
                height={506}
                width={900}
              ></Image>
            </Box>
          </Grid>

          <Grid item xs={12} lg={12} mt={5}>
            <h2>Hi-Fidelity Wireframes</h2>
            <p>
              We next moved to our hi-fidelity wireframes and final designs.
            </p>
            <Box component="div" mb={6}>
              <Image layout="responsive"

                className="imageBorderradius"
                src="/assets/wgsrHifidelity1.png"
                alt="West Side Mid-Fi Wireframe"
                height={506}
                width={900}
              ></Image>
            </Box>

            <Box component="div" mb={6}>
              <Image layout="responsive"
                className="imageBorderradius"
                src="/assets/wgsrHifidelity2.png"
                alt="West Side Mid-Fi Wireframe"
                height={506}
                width={900}
              ></Image>
            </Box>
          </Grid>

          <Grid item xs={12} lg={12} mt={5}>
            <h5>Results & Reflections</h5>
            <h2>
              Fantastic Redesign with Future Improvements to Come
            </h2>
            <p>
              With a complete redesign of sheprescue.org we believe that we have
              improved the user experience for their customers. The site is no
              longer outdated and is better organized. The look and feel is
              clean and with consisten colors and typography.
            </p>
            <p>
              We will continue working on the design by conducting usability
              testing.
            </p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default WestSide;
