import React,{} from 'react';
import Box from '@mui/material/Box';
import Sidenav from '../components/sidenav';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';


const ScanResume = () => {
  return (
    <Box sx={{display:"flex"}}> 
    <Sidenav />
    <Box component="main" sx={{ flexGrow: 1, p: 3}}>
      {/* Add your home page content here */}

    <div className="job-detail-header-div">
      <h2 className='job-detail-heading'>Scan Your Resume</h2>
    </div>

    <button class="work_type_job_button apply-now " id="resume-button">
      <span class="icon"><DocumentScannerIcon /></span>
      <span class="text">Scan Your Resume</span>
    </button>


    </Box>
    </Box>
  );
};

export default ScanResume;