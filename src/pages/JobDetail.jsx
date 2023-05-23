import React from 'react'
import Box from '@mui/material/Box';
import Sidenav from '../components/sidenav';
import myImg from "../static/images/img.jpg"


const JobDetail = () => {
  return (
    <Box sx={{display:"flex"}}> 
    <Sidenav />
    <Box component="main" sx={{ flexGrow: 1, p: 3}}>

    <h1>HELLO</h1>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="job-detail-card">
      <div className="imgbox">
      <div className="square-content">
        <img src={myImg} alt="Logo"  />
      </div>
      </div>

      <div className="content">
        <h2>Keep Smiling</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In excepturi soluta ut, nisi beatae sint. Quia id odio doloribus maxime rerum placeat laborum omnis excepturi repellendus, perferendis, dolore, maiores enim?</p>
      </div>
      
    </div>



    </Box>
    </Box>
  )
}

export default JobDetail