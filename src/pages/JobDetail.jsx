import React from 'react'
import Box from '@mui/material/Box';
import Sidenav from '../components/sidenav';
import myImg from "../static/images/img.jpg"
import salaryImg from "../static/images/salary_icon.png"
import jobTypeImg from "../static/images/job_type_icon.png"
import positionImg from "../static/images/position_icon.png"

const JobDetail = () => {
  return (
    <Box sx={{display:"flex"}}> 
    <Sidenav />
    <Box component="main" sx={{ flexGrow: 1, p: 3}}>

    <div className="job-detail-header-div">
    <span className='job-detail-heading'>Flipkart</span>
    </div>
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
        <h2 className="job-heading">Frontend Developer</h2>
        <div class="row">
          <div class="item">Item 1</div>
          <div class="dot"></div>
          <div class="item">Item 2</div>
          <div class="dot"></div>
          <div class="item">Item 3</div>
        </div>
      </div>
      
    </div>

    <div class="icons-row">
      <div class="item">
        <img src={salaryImg} alt="salary-img" className='icon-img'/>
        <h4 className="icon-text">Salary</h4>
        <h4 className="icon-value">50K</h4>
      </div>

      <div class="item" style={{ marginLeft: '10px'  }}>
      <img src={jobTypeImg} alt="salary-img" className='icon-img'/>        <h4 className="icon-text">Job Type</h4>
        <h4 className="icon-value">Full Time</h4>
      </div>

      <div class="item" >
      <img src={positionImg} alt="salary-img" className='icon-img'/>
      <h4 className="icon-text">Position</h4>
      <h4 className="icon-value">Senior</h4>
      </div>

    </div>

    <div className="job-details-description">
      <h2 className='heading'>Description</h2>
      <p className="content">We are looking for a qualified Front-end developer to join our IT team. You will be responsible for building the ‘client-side’ of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications.
If you’re interested in creating a user-friendly environment by writing code and moving forward in your career, then this job is for you. </p>
    </div>



    </Box>
    </Box>
  )
}

export default JobDetail