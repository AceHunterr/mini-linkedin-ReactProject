  import React,{useState} from 'react';
  import Box from '@mui/material/Box';
  import Sidenav from '../components/sidenav';
  import { JobCard } from '../components/jobsCards';
  import jobData from '../jobsContent';
  import FilterCategories from '../components/FilterCategories';

  const Jobs = () => {

    // const [savedCards, setSavedCards] = useState([]);

    // const handleSaveCard = (card) => {
    //   const isCardSaved = savedCards.some((savedCard) => savedCard.id === card.id);

    //   if (isCardSaved) {
    //     const updatedCards = savedCards.filter((savedCard) => savedCard.id !== card.id);
    //     setSavedCards(updatedCards);
    //   } else {
    //     const updatedCards = [...savedCards, card];
    //     setSavedCards(updatedCards);
    //   }
    // };

    const [filteredJobs, setFilteredJobs] = useState(jobData);
  
  const handleFilter = (filterValues) => {
    const { jobTitle, company, location } = filterValues;
    const filtered = jobData.filter((job) => {
      const titleMatch = job.job_title.toLowerCase().includes(jobTitle.toLowerCase());
      const companyMatch = job.company.toLowerCase().includes(company.toLowerCase());
      const locationMatch = job.location.toLowerCase().includes(location.toLowerCase());
      return titleMatch && companyMatch && locationMatch;
    });
    setFilteredJobs(filtered);
  };



    return (
      <Box sx={{display:"flex"}}> 
      <Sidenav />
      <Box component="main" sx={{ flexGrow: 1, p: 3}}>
      {/* <h2 className='main-intro-text works-text jobs-text'>JOBS</h2> */}
      <div className="job-detail-header-div">
        <h2 className='jobs-text job-detail-heading'>Jobs</h2>
      </div>
      <FilterCategories onFilter={handleFilter} />
        <div className='jobcard-container' style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'center',gap:'50px'}}>
                  {filteredJobs.map(contents => (
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
                        // onSaveCard={handleSaveCard} 
                        style={{ flex: '1 10 50%', maxWidth: '50%'  }}
                    />
                ))}
            </div>
    

    </Box>
    </Box>
  );
};

export default Jobs;