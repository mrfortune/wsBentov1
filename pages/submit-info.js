import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Meta from "../components/Meta";
import {
  Box,
  ThemeProvider,
  Button,
  Container,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import lightTheme from "../styles/theme/lightTheme";
import { global } from "styled-jsx/css";
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react';

// import contactform from "../components/contactform";
// import axios from 'axios';
function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
}
export default function UserForm() {
  // Define the initial form data state
  const initialFormData = {
    name: '',
    email: '',
    projectName: '',
    projectDescription: '',
    budget: '',
    timeline: '',
    companyInfo: {
      companyName: '',
      industry: '',
      website: '',
      description: '',
    },
  };

  // State to manage the form data
  const [formData, setFormData] = useState(initialFormData);

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your server to submit the user data
      const response = await axios.post('/api/submitUserData', formData);
      
      // Handle success, e.g., show a success message to the user
      console.log('Data submitted successfully:', response.data);
    } catch (error) {
      // Handle errors, e.g., show an error message to the user
      console.error('Error submitting data:', error);
    }
  };

  return (
 
   <div> 
     <Meta title="WorldShaker Interactive::Contact" />
   <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 2,
          gridTemplateRows: 'auto',
          gridTemplateAreas: `"header header header header"
        "projects projects projects image"`,
        }}
    >
      <Box sx={{ gridArea: 'header' }} className="mt-40">
        <h1>Let's Get Started</h1>
      </Box>

<Box sx={{ gridArea: 'projects' }} className="bentoBox">
<p>Before we can begin, tell us a bit about your project and company.</p>
      <form onSubmit={handleSubmit}>
        {/* Basic User Information */}
        <div className="flex flex-col mb-8 w-full">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col mb-8 w-full">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-md"
          />
        </div>

        {/* Project Details */}
        <div className="flex flex-col mb-8 w-full">
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            required
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col mb-8 w-full">
          <label htmlFor="projectDescription">Project Description:</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            required
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col mb-8 w-full">
          <label htmlFor="budget">Budget:</label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col mb-8 w-full">
          <label htmlFor="timeline">Timeline:</label>
          <input
            type="text"
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            required
            className="rounded-md"
          />
        </div>

        {/* Company Information */}
        <div className="flex flex-col mb-8 w-full">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyInfo.companyName"
            value={formData.companyInfo.companyName}
            onChange={handleChange}
            required
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col mb-8 w-full">
          <label htmlFor="industry">Industry:</label>
          <input
            type="text"
            id="industry"
            name="companyInfo.industry"
            value={formData.companyInfo.industry}
            onChange={handleChange}
            required
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col mb-8 w-full">
          <label htmlFor="website">Website:</label>
          <input
            type="text"
            id="website"
            name="companyInfo.website"
            value={formData.companyInfo.website}
            onChange={handleChange}
            required
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col mb-8 w-full">
          <label htmlFor="description">Company Description:</label>
          <textarea
            id="description"
            name="companyInfo.description"
            value={formData.companyInfo.description}
            onChange={handleChange}
            required
            className="rounded-md"
          />
        </div>

        <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium inline-flex rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"type="submit">Submit</button>
      </form>
  </Box>
       <Box sx={{ gridArea: 'image' }} className="mt-40">

      </Box>
      </Box>   
     
      </div>
    
  );
}