import React,{} from 'react';
import Box from '@mui/material/Box';
import Sidenav from '../components/sidenav';
import ProfileForm from '../components/ProfileForm';
import ProfileFormBtns from '../components/ProfileFormBtns';

const Profile = () => {
  return (
    <Box sx={{display:"flex"}}> 
    <Sidenav />
    <Box component="main" sx={{ flexGrow: 1, p: 3}}>
      {/* Add your home page content here */}

      <div className="job-detail-header-div">
        <h2 className="freelancer-text job-detail-heading padding-bottom-zero gradient-text-blue">Profile</h2>
      </div>
        <ProfileForm />
    
        <hr className='divider-line' />
        <ProfileFormBtns />
  
    </Box>
    </Box>
  );
};

export default Profile;