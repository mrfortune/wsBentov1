'use client'

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  ThemeProvider,
  Button,
  Container,
  Typography,
} from "@mui/material";
import { Metadata, ResolvingMetadata } from 'next';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { global } from "styled-jsx/css";
import Link from 'next/link'
import { useRouter } from 'next/router';

function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
}

const Portfolio = () => {
  return ( 

    <div>
     
      <Box
        className="contact"
        component="section"
        direction="row"
        display="flex"
        mt={15}
        mb={2}
        justifyContent="center"
        sx={{ minHeight: "300px" }}
      >
        <Grid container spacing={2} sx={{ maxWidth: "md" }}>
          <Grid item paddingLeft={0} xs={12} sm={12} md={12} lg={12}>
            {/* <Typography variant="h1" mb={4}>
             
            </Typography> */}
            <h1> Contact Us</h1>
            {/* <Typography variant="body1" mb={0}>
              </Typography> */}
           <p>183 Sterling Street<br/>
              Brooklyn, NY 11225<br/>
           Cell: 1.646.620.4438</p>
           <p> <Mailto
                email="rharris@worldshaker.com"
                subject="Available to Discuss a new Project"
                body="Hi Robert,"
              >
                Email,
              </Mailto> or call us to discuss your project.</p>
            {/* <Typography
              color="primary"
              variant="body"
              sx={{ textDecoration: "none", fontSize:'1rem', color:'#333' }}
            >
              <Mailto
                email="rharris@worldshaker.com"
                subject="Available to Discuss a new Project"
                body="Hi Robert,"
              >
                Email,
              </Mailto> or call us to discuss your project.
              {/* <contactform/> 
            </Typography> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Portfolio;
