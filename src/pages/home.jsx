import React,{} from 'react';
import Box from '@mui/material/Box';
import Sidenav from '../components/sidenav';
import HomePageCards from '../components/HomePageCards';
import { useNavigate } from 'react-router';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/sign-up');
  };
  
  return (
    <Box sx={{ display: "flex" }}>
      <Sidenav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div className="header-container">
          <h2 className='main-intro-text'>Opportunity for you <span className='gradient-text'>JOBS</span></h2>
          <div className="buttons-container">
            <button className="login-btn" onClick={handleLoginClick}>Login</button>
            <button className="login-btn" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      <HomePageCards />

      </Box>
    </Box>
  );
  
};

export default HomePage;