import React,{} from 'react';
import Box from '@mui/material/Box';
import Sidenav from '../components/sidenav';
import myImg from "../static/images/img.jpg"
import HomePageCards from '../components/HomePageCards';
import { useNavigate } from 'react-router';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Redirect to the login page
    navigate('/login');
  };

  const handleSignUpClick = () => {
    // Redirect to the sign-up page
    navigate('/sign-up');
  };
  
  return (
    <Box sx={{ display: "flex" }}>
      <Sidenav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div className="header-container">
          <h2 className='main-intro-text'>Opportunity for you <span className='gradient-text'>JOBS</span></h2>
          <div className="buttons-container">
            <button className="login-btn" onClick={handleSignUpClick}>Login</button>
            <button className="login-btn" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      <HomePageCards />

      </Box>
    </Box>
  );
  
};

export default HomePage;