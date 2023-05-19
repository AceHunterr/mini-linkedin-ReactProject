import React,{} from 'react';
import Box from '@mui/material/Box';
import Sidenav from '../components/sidenav';
import myImg from "../static/images/img.jpg"

const HomePage = () => {
  const [cards] = React.useState([
    {
        title:'Employer',
        img_src : myImg
    },
    {
        title:'Internship',
        img_src : myImg
    },
    {
        title:'Job Seeker',
        img_src : myImg
    },
    {
        title:'Freelancer',
        img_src : myImg
    },

])

  return (
    <Box sx={{ display: "flex" }}>
      <Sidenav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div className="header-container">
          <h2 className='main-intro-text'>Opportunity for you <span className='gradient-text'>JOBS</span></h2>
          <div className="buttons-container">
            <button className="login-btn">Login</button>
            <button className="login-btn">Sign Up</button>
          </div>
        </div>

        <section>
          <div className="home-cards-container">
            <div className="cards">
              {cards.map((card, i) => (
                <div key={i} className="card">
                  <img src={card.img_src} alt="Img" />
                  <h1>{card.title}</h1>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Box>
    </Box>
  );
  
};

export default HomePage;