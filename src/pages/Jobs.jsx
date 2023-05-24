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
    <h2 className='main-intro-text works-text jobs-text'>JOBS</h2>

      <div className='jobcard-container' style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'center',gap:'50px'}}>
                {jobData.map(contents => (
                    <JobCard
                        key={contents.id}
                        image={contents.image}
                        job_title={contents.job_title}
                        company={contents.company}
                        view={contents.view}
                        share={contents.share}
                        tags = {contents.tags}
                        description = {contents.description}
                        mode = {contents.mode}
                        location = {contents.location}
                        days = {contents.date_posted}
                        salary = {contents.salary}
                        job_type = {contents.job_type}
                        position = {contents.position}
                        work_type = "work_type_job"
                        style={{ flex: '1 10 50%', maxWidth: '50%'  }}
                    />
                ))}
            </div>
    

    </Box>
    </Box>
  );
};

export default Jobs;