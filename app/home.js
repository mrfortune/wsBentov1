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
// const servicesData = [
//   {
//     category: 'Website Design and Development',
//     image: '/website_image.jpg',
//     services: [
//       'Custom website design',
//       'Responsive web development',
//       'E-commerce website development',
//       'Website maintenance and updates',
//     ],
//   },
//   {
//     category: 'Search Engine Optimization (SEO)',
//     image: '/seo_image.jpg',
//     services: [
//       'Keyword research and analysis',
//       'On-page SEO optimization',
//       'Off-page SEO strategies',
//       'Local SEO for businesses targeting specific geographic areas',
//     ],
//   },
//   // ... Other categories
// ];
export default function HomePage() {
  return (
    <div className="grid gap-2 grid-rows-3 grid-cols-3 my-2 container max-w-screen-2xl mt-32 p-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
      <div className="rounded-3xl border-2 col-span-2 border-slate-400/10 max-mdd:max-w-none max-md:p-8 p-2">
        <div className="flex flex-col text-white  p-2">
        <h2 className="text-2xl font-bold mb-2">Insider Insights Unleashed:</h2>
      <ul className="mt-2">
        <li>Unearth Trends, Outsmart Competitors—We’re Spilling the Savvy Secrets.</li>
      </ul>
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

      <div className="row-span-1 rounded-3xl border-2  border-slate-400/10 max-mdd:max-w-none max-md:p-8 p-2 bg-gray-900">
        <div className="flex flex-col  text-white  p-2">
        <h2 className="text-2xl font-bold mb-2">Digital Dynamo Blueprint Unlocked:</h2>
      <ul className="mt-2">
        <li>Crafting Digital Prowess and Dominance—Blueprints for the Modern Trailblazer.</li>
      </ul>
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
      <div className="row-span-1 rounded-3xl border-2  border-slate-400/10 max-mdd:max-w-none max-md:p-8 p-2 bg-gray-900">
        <div className="flex flex-col  text-white  p-2">
        <h2 className="text-2xl font-bold mb-2">SEO Magic for the Modern Maven</h2>
      <ul className="mt-2">
        <li>Elevate Visibility with Keyword Elegance and a Touch of Tech Magic.</li>
      </ul>
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
      <div className="row-span-1 col-span-2 rounded-3xl border-2  border-slate-400/10 max-mdd:max-w-none max-md:p-8 p-2 bg-gray-900">
        <div className="flex flex-col text-white  p-2">
        <h2 className="text-2xl font-bold mb-2">Content Brilliance Wave in 3, 2, 1</h2>
      <ul className="mt-2">
        <li>Captivate Audiences with Expertly Crafted Content—Prepare for the Brilliance Wave.</li>
      </ul>
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
      <div className="row-span-1 col-span-2 rounded-3xl border-2 border-slate-400/10 max-mdd:max-w-none max-md:p-8 p-2">
        <div className="flex flex-col  text-white  p-2">
        <h2 className="text-2xl font-bold mb-2">Social Media Vibes Unleashed</h2>
      <ul className="mt-2">
        <li>Mastering Social Media with Chic Panache—Vibes That Resonate.</li>
      </ul>
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
      <div className="row-span-1 rounded-3xl border-2 border-slate-400/10 max-mdd:max-w-none max-md:p-8 p-2 bg-gray-900">
        <div className="flex flex-col  text-white  p-2">
        <h2 className="text-2xl font-bold mb-2">Precision in PPC Powerplay Demystified</h2>
      <ul className="mt-2">
        <li>Nailing Campaigns with Precision—Your Guide to PPC Excellence</li>
      </ul>
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
