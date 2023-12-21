'use client'
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
// import type { Metadata } from 'next';
const { heroContent, heroWrapper, overlay, imageWrapper, heroImage } = styles;

const fetcher = (url) => fetch(url).then((res) => res.json());
export const metadata = {
  title: 'worldShaker::Home',
  description: '...',
}
 

export default function HomePage() {
  const [showMore, setShowMore] = useState(false);
  return (
    
    <div className="grid-container">
  
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
      
      


  )
}
