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
  return (
    <div className="grid gap-2 grid-rows-[auto] my-2 container max-w-full mt-32 p-8 auto-rows-max md:grid-cols-2 lg:grid-cols-3">
      <div className="row-span-1 grid grid-rows-2 rounded-3xl border-2 overflow-hidden border-slate-400/10 max-mdd:max-w-none max-md:p-8 p-4 dark:bg-neutral-900 relative xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-1 xs:col-span-1">
        <div className="flex flex-col justify-center items-center text-white text-center p-4">
          <h2 className="text-xl font-bold mb-2">Bento Box 1</h2>
          {/* Add more content as needed */}
        </div>
        <div className="relative h-40 grid">
          <Image
            src="/your_image_1.jpg" // Add your image path
            alt="Bento Box 1 Image"
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        </div>
      </div>

      <div className="row-span-1 grid grid-rows-2 rounded-3xl border-2 overflow-hidden border-slate-400/10 max-mdd:max-w-none max-md:p-8 p-4 dark:bg-neutral-900 relative lg:col-span-2 md:col-span-2 sm:col-span-1 xs:col-span-1">
        <div className="flex flex-col justify-center items-center text-white text-center p-4">
          <h2 className="text-xl font-bold mb-2">Bento Box 2</h2>
          {/* Add more content as needed */}
        </div>
        <div className="relative h-40 grid">
          <Image
            src="/your_image_2.jpg" // Add your image path
            alt="Bento Box 2 Image"
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        </div>
      </div>
      <div className="row-span-1 grid grid-rows-2 rounded-3xl border-2 overflow-hidden border-slate-400/10 max-mdd:max-w-none max-md:p-8 p-4 dark:bg-neutral-900 relative lg:col-span-2 md:col-span-2 sm:col-span-1 xs:col-span-1">
        <div className="flex flex-col justify-center items-center text-white text-center p-4">
          <h2 className="text-xl font-bold mb-2">Bento Box 2</h2>
          {/* Add more content as needed */}
        </div>
        <div className="relative h-40 grid">
          <Image
            src="/your_image_2.jpg" // Add your image path
            alt="Bento Box 2 Image"
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        </div>
      </div>
      <div className="row-span-1 grid grid-rows-2 rounded-3xl border-2 overflow-hidden border-slate-400/10 max-mdd:max-w-none max-md:p-8 p-4 dark:bg-neutral-900 relative lg:col-span-2 md:col-span-2 sm:col-span-1 xs:col-span-1">
        <div className="flex flex-col justify-center items-center text-white text-center p-4">
          <h2 className="text-xl font-bold mb-2">Bento Box 2</h2>
          {/* Add more content as needed */}
        </div>
        <div className="relative h-40 grid">
          <Image
            src="/your_image_2.jpg" // Add your image path
            alt="Bento Box 2 Image"
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        </div>
      </div>
      <div className="row-span-1 grid grid-rows-2 rounded-3xl border-2 overflow-hidden border-slate-400/10 max-mdd:max-w-none max-md:p-8 p-4 dark:bg-neutral-900 relative lg:col-span-2 md:col-span-2 sm:col-span-1 xs:col-span-1">
        <div className="flex flex-col justify-center items-center text-white text-center p-4">
          <h2 className="text-xl font-bold mb-2">Bento Box 2</h2>
          {/* Add more content as needed */}
        </div>
        <div className="relative h-40 grid">
          <Image
            src="/your_image_2.jpg" // Add your image path
            alt="Bento Box 2 Image"
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        </div>
      </div>
      <div className="row-span-1 grid grid-rows-2 rounded-3xl border-2 overflow-hidden border-slate-400/10 max-mdd:max-w-none max-md:p-8 p-4 dark:bg-neutral-900 relative lg:col-span-2 md:col-span-2 sm:col-span-1 xs:col-span-1">
        <div className="flex flex-col justify-center items-center text-white text-center p-4">
          <h2 className="text-xl font-bold mb-2">Bento Box 2</h2>
          {/* Add more content as needed */}
        </div>
        <div className="relative h-40 grid">
          <Image
            src="/your_image_2.jpg" // Add your image path
            alt="Bento Box 2 Image"
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        </div>
      </div>
      <div className="row-span-1 grid grid-rows-2 rounded-3xl border-2 overflow-hidden border-slate-400/10 max-mdd:max-w-none max-md:p-8 p-4 dark:bg-neutral-900 relative lg:col-span-2 md:col-span-2 sm:col-span-1 xs:col-span-1">
        <div className="flex flex-col justify-center items-center text-white text-center p-4">
          <h2 className="text-xl font-bold mb-2">Bento Box 2</h2>
          {/* Add more content as needed */}
        </div>
        <div className="relative h-40 grid">
          <Image
            src="/your_image_2.jpg" // Add your image path
            alt="Bento Box 2 Image"
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        </div>
      </div>
      {/* Repeat this pattern for the remaining boxes */}
    </div>
  );
}
// export default function HomePage() {
//   return (
//     <div className="grid gap-x-2 gap-y-2 grid-rows-[auto] my-2 container max-w-full mt-32 p-16 auto-rows-max">
//       {[...Array(7)].map((_, i) => (
//         <div
//           key={i}
//           className={`row-span-1 flex flex-col rounded-3xl border-2 overflow-hidden border-slate-400/10 bg-[#131315] max-mdd:max-w-none max-md:p-8 p-4 dark:bg-neutral-900 ${i === 3 || i === 6 ? 'col-span-2' : ''}`}
//         > 
//           {servicesData[i] && (
//             <div key={i} className="relative w-full h-full">
//               {servicesData[i].image && (
//                 <Image
//                   src={servicesData[i].image}
//                   alt={`${servicesData[i].category} Image`}
//                   layout="fill"
//                   objectFit="cover"
//                   className="mb-2 rounded-md"
//                 />
//               )}
//               <div className="relative flex flex-col justify-center items-center h-full text-white text-center">
//                 <h2 className="text-xl font-bold mb-2">{servicesData[i].category}</h2>
//                 <div className="grid gap-2">
//                   {servicesData[i].services.map((service, serviceIndex) => (
//                     <div key={serviceIndex} className="border p-2 rounded-md">
//                       {service}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }