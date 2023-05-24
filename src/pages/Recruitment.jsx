import React,{} from 'react';
import Box from '@mui/material/Box';
import Sidenav from '../components/sidenav';
import RecruitmentForm from '../components/RecruitmentForm';

const Recruitment = () => {
  return (
    <Box sx={{display:"flex"}}> 
    <Sidenav />
    <Box component="main" sx={{ flexGrow: 1, p: 3}}>
      {/* Add your home page content here */}
      <div className="job-detail-header-div">
      <h2 className="freelancer-text job-detail-heading">Recruitment</h2>
      </div>

      <RecruitmentForm />    

    </Box>
    </Box>
  );
};

export default Recruitment;