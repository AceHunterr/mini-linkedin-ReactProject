import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Sidenav from '../components/sidenav';
import { JobCard } from '../components/jobsCards';
import freelancerData from '../freelancerContent';

const Freelancer = () => {

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

  return (
    <Box sx={{display:"flex"}}> 
    <Sidenav />
    <Box component="main" sx={{ flexGrow: 1, p: 3}}>


    <div className="job-detail-header-div">
      <h2 className='freelancer-text job-detail-heading'>Freelancer</h2>
    </div>

      <div className='jobcard-container' style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'center',gap:'50px'}}>
                {freelancerData.map(contents => (
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
                        work_type = "work_type_freelancer"
                        // onSaveCard={handleSaveCard} 
                        style={{ flex: '1 10 50%', maxWidth: '50%'  }}
                    />
                ))}
            </div>
    

    </Box>
    </Box>
  );
};

export default Freelancer;