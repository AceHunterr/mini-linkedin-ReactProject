import React from 'react'
import SignUpForm from '../components/signupform'
import Box from '@mui/material/Box';
import Sidenav from '../components/sidenav';

const SignUpPage = () => {
  return (
    <div>
        
    <Box sx={{display:"flex"}}> 
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3}}>
            <SignUpForm />
        </Box>
    </Box>
    </div>
  )
}

export default SignUpPage