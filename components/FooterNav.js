
'use client'
import React from "react";
import { Paper } from "@mui/material";
import { Container, Box, Grid, Typography } from "@mui/material";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Facebook from "@mui/icons-material/Facebook";
import { Instagram } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import myLoader from "../components/Loader";
import Link from "next/link";

const FooterNav = () => {
  return (

    <footer>
      <div className="footerBG grid grid-cols-5">
        <div>
          <Link href="/">
            <Image
              loader={myLoader}
              src="assets/wslogo8.png"
              width={200}
              height={24}
              alt="Logo"
            >

            </Image>
          </Link>
          <ul>
            <li><Link href="http://linkedin.com/in/robertsharris">
              <LinkedIn fontSize="large" />
            </Link>

              <Link href="/">
                <Facebook fontSize="large" />
              </Link>

              <Link href="/">
                <Instagram fontSize="large" />
              </Link></li>
          </ul>

        </div>
        <div>
          <h4>
            Company
          </h4>
          <ul>
            <li>
              <Link href="/story">Story</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>
            Resources
          </h4>
          <ul>
            <li>
              <Link href="http://www.adobe.com">Adobe</Link>
            </li>
            <li>
              <Link href="http://www.figma.com">OpenAI</Link>
            </li>
            <li>
              <Link href="http://www.figma.com">ChatGPT</Link>
            </li>
            <li>
              <Link href="http://www.figma.com">Figma</Link>
            </li>
            <li>
              <Link href="https://www.framer.com/motion">
                Framer Motion
              </Link>
            </li>
            <li>
              <Link href="https://m3.material.io">Material</Link>
            </li>
            <li>
              <Link href="http://www.figma.com">Midjourney</Link>
            </li>
            <li>
              <Link href="https://nextjs.org/">Next.js</Link>
            </li>
            <li>
              <Link href="https://react.dev/">React</Link>
            </li>
          </ul>


        </div>
        <div>
          <h4>
            Partners
          </h4>
          <ul>

            <Box component="li">
              <Link href="https://ionblade.com/">IONBLADE</Link>
            </Box> <Box component="li">
              <Link href="https://www.godaddy.com/">GoDaddy</Link>
            </Box>
          </ul>




        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li>
              <Link href="/">Terms</Link>
            </li>
            <li>
              <Link href="/">Privacy</Link>
            </li>

          </ul>
        </div>
      </div>
    </footer>


  );
};

export default FooterNav;
