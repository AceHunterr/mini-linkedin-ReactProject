import React from 'react'
import Box from '@mui/material/Box';
import Sidenav from '../components/sidenav';
import LoginUpForm from '../components/loginUpForm';

const LoginPage = () => {
  return (
    <div>
        
    <Box sx={{display:"flex"}}> 
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3}}>
            <LoginUpForm />
        </Box>
    </Box>
    </div>
  )
}

export default LoginPage