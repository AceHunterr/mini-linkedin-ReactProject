import React from 'react'
import Box from '@mui/material/Box';
import Sidenav from '../components/sidenav';
import EmployerForm from '../components/EmployerForm';

const EmployerRegistration = () => {
  return (
    <Box sx={{display:"flex"}}> 
    <Sidenav />
    <Box component="main" sx={{ flexGrow: 1, p: 3}}>
      {/* Add your home page content here */}

      <div className="job-detail-header-div">
      <h2 className='job-detail-heading padding-bottom-zero' id='employer-registration-text'>Employer Registration</h2>
    </div>
    <EmployerForm />

    </Box>
    </Box>  )
}

export default EmployerRegistration