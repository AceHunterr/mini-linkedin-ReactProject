import React,{} from 'react';
import Box from '@mui/material/Box';
import Sidenav from '../components/sidenav';

const Recruitment = () => {
  return (
    <Box sx={{display:"flex"}}> 
    <Sidenav />
    <Box component="main" sx={{ flexGrow: 1, p: 3}}>
      {/* Add your home page content here */}

      <h2>Recruitment</h2>
    

    </Box>
    </Box>
  );
};

export default Recruitment;