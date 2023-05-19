

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
    <Box sx={{display:"flex"}}> 
    <Sidenav />
    <Box component="main" sx={{ flexGrow: 1, p: 3}}>
      {/* Add your home page content here */}

      <h2>Hello</h2>
      <div>
        <h2>Oppurtunity for you JOBS</h2>
        <section>
          <div className="home_cards_container">
            <div className="cards">
            {
                cards.map((card,i)=>(
                    <div key ={i} className="card">
                    <img src={card.img_src} alt='Img' />
                    <h1>{card.title}</h1>
                    {/* <p>{card.text}</p> */}
                </div>
                ))
              }    
              </div>
            </div>
          </section>
      </div>


    </Box>
    </Box>
  );
};

export default HomePage;