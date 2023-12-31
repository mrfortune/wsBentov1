'use client'
// import styles from '../styles/Home.module.css';
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
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
//useSWR allows the use of SWR inside function components
//import useSWR from 'swr';
// import type { Metadata } from 'next';
// const { heroContent, heroWrapper, overlay, imageWrapper, heroImage } = styles;

const fetcher = (url) => fetch(url).then((res) => res.json());
export const metadata = {
  title: 'worldShaker::Home',
  description: '...',
}
const servicesData = [
  {
    category: 'Website Design and Development',
    image: '/website_image.jpg',
    services: [
      'Custom website design',
      'Responsive web development',
      'E-commerce website development',
      'Website maintenance and updates',
    ],
  },
  {
    category: 'Search Engine Optimization (SEO)',
    image: '/seo_image.jpg',
    services: [
      'Keyword research and analysis',
      'On-page SEO optimization',
      'Off-page SEO strategies',
      'Local SEO for businesses targeting specific geographic areas',
    ],
  },
  // ... Other categories
];

export default function HomePage() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="grid gap-x-2 gap-y-2 grid-rows-[auto] my-2 container max-w-full mt-32 p-16 auto-rows-max">
      {/* <div className="flex bg-[#131315] col-span-2 px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">
            {/* <img
              src={pranay}
              alt="sai pranay"
              className="overflow-hidden w-[108px] h-[108px] flex-[0_0_auto] rounded-full"
            /> 
            <h1 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
              sai pranay
              <br />
              frontend developer{" "}
              <span className="text-[#8a8a93]">
                {" "}
                who build things for the web.
              </span>
            </h1>
          </div>
          <div className="flex bg-[#131315] text-center p-12 rounded-3xl max-md:p-8">
            <div className="flex flex-col justify-center items-center mb-8 gap-3 max-md:mb-4">
              {/* <ContactIcon className="w-[112px] h-[112px] flex-[0_0_auto]" /> 
              <h2 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
                Have a project in mind?
              </h2>
            </div>
            <a
              href="mailto:saipranayadepu@gmail.com"
              className="min-h-[96px] bg-[#ff5e1a] transition-[background-color] duration-300 ease-[ease-out] text-[40px] leading-[48px] font-medium text-center tracking-[-0.01em] px-8 py-6 rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 text-white"
            >
              hey@pranay.com
               <span className=" animate-pulse">👋</span> 
            </a>
          </div>
          <div className="flex bg-[#131315] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8"></div>
          <div className="flex  bg-[#131315] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8"></div>
          <div className="flex  bg-[#131315] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8"></div>
          <div className="flex bg-[#131315] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8"></div>
          <div className="flex  bg-[#131315] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8"></div>
          <div className="flex  bg-[#131315] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8"></div> */}

      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className={`row-span-1 rounded-3xl border-2 border-slate-400/10 bg-[#131315] p-4 dark:bg-neutral-900 ${i === 3 || i === 6 ? "col-span-2" : ""
            }`}
        > <div className="flex bg-[#131315] col-span-2 px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">
           {servicesData.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h2 className="text-xl font-bold mb-2">{category.category}</h2>
          {category.image && (
            <Image
              src={category.image}
              alt={`${category.category} Image`}
              width={300}
              height={200}
              className="mb-2 rounded-md"
            />
          )}
        
            {/* {category.services.map((service, serviceIndex) => (
              <div key={serviceIndex} className="border p-4 rounded-md">
                {service}
              </div>
            ))} */}
          
        </div>
      ))}
            
          </div>
        </div>
      ))}
    </div>




  )
}
