import React,{} from 'react';
import Box from '@mui/material/Box';
import Sidenav from '../components/sidenav';

const TrainingPrograms = () => {
  return (
    <Box sx={{display:"flex"}}> 
    <Sidenav />
    <Box component="main" sx={{ flexGrow: 1, p: 3}}>
      {/* Add your home page content here */}

      <div className="job-detail-header-div">
        <h2 className='job-detail-heading'>Training Programs</h2>
      </div>
    

    </Box>
    </Box>
  );
};

export default TrainingPrograms;