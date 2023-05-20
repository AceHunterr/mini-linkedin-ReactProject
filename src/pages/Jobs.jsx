import React,{} from 'react';
import Box from '@mui/material/Box';
import Sidenav from '../components/sidenav';
import { JobCard } from '../components/jobsCards';
import jobData from '../jobsContent';

const Jobs = () => {
  return (
    <Box sx={{display:"flex"}}> 
    <Sidenav />
    <Box component="main" sx={{ flexGrow: 1, p: 3}}>

      <div className='App'>
                {jobData.map(contents => (
                    <JobCard
                        key={contents.id}
                        image={contents.image}
                        job_title={contents.job_title}
                        company={contents.company}
                        view={contents.view}
                        share={contents.share}
                        tags = {contents.tags}
                    />
                ))}
            </div>
    

    </Box>
    </Box>
  );
};

export default Jobs;