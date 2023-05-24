import React,{} from 'react';
import Box from '@mui/material/Box';
import Sidenav from '../components/sidenav';
import ResourceList from '../components/resourcesList';
import files from '../resourcesContent';

const Resources = () => {
  
  return (
    <Box sx={{display:"flex"}}> 
    <Sidenav />
    <Box component="main" sx={{ flexGrow: 1, p: 3}}>
      <div className="job-detail-header-div">
        <h2 className='freelancer-text job-detail-heading'>Resources</h2>
      </div>
      <ResourceList files={files} />
    

    </Box>
    </Box>
  );
};

export default Resources;