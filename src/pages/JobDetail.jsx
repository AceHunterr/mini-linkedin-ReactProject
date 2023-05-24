import React from 'react'
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import Sidenav from '../components/sidenav';
import myImg from "../static/images/img.jpg"
import salaryImg from "../static/images/salary_icon.png"
import jobTypeImg from "../static/images/job_type_icon.png"
import positionImg from "../static/images/position_icon.png"

const JobDetail = () => {
  const location = useLocation();
  // const { jobProps } = location.state;

  const jobProps = location.state?.jobProps || {
    id: 1,
    job_title: "Default Value",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX/AAD/////Dw3/7e3/8fH/1tb/Kir/+Pj/9PT/gID/q6v/JiX/0ND/2tr/6en/ubn/w8P/4+P/mZn/Pz//ZGP/c3P/x8f/iIj/srL/Skn/Li3/aWn/oqL/cXD/5OT/OTn/VFT/REP/Gxr/lpX/W1v/jY3/VlX/Tk7/tbX/np7/ISD/kJD/enqtfutkAAAEbklEQVR4nO2caXfaQAxFWwIEyEb2fSF7mvz/39eT1MHA2HqaIceSet792hmRmxL7IY/49YsQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQv4Hept9JaOpXGlfW6i/341aRe+3miO50oG60EY3ahV6wz4qFd7wHZWaRjeEpWbBDfdwrf3Yhoe41ji04Y6mWGjDD02xSWDDTVWxrcCGV7pq23EN73XVjsIanmjL9aMaPmrLPQQ1zPiRgho+6evtxTTMqDcLafiaU1ARTv0Z3uYU/AhoqIqkNQENj/Mq4nDqzVAXSWvuwxkqI2kNDKfeDHu5JR+DGaojac1GLMPn/JrvoQx3S4qGMjwtKQrCqS/DoqKzQIZnZVV34hhmRdIaOZx6MhyUlt2MYnhdWvYqiGFuJK0Rw6kjw7fyuicxDNeoK4VTP4bgwb2MEE79GL6sU1gIp24Mb+Sdp+fyvwcwBJH0BjwVbg+nbgzljTO04Na9IYikU9gKbw2nXgwv5I34Jz12bggi6dcJKPBIqi2cOjG8lPd9/fTb8pq2cOrDcCRvu/63aktc1BZOfRgeyNuqq8hEXtUSTn0YyrtudcueHRuCSDq/m4/ldc3h1IWhNpGhZOfWEJziXTiPANK5W0Pw5ls4UwLezq9eDeU9l/qljeHUgSG4CQwW14JOR1M4dWAo38gvltaCbtW1S0MQxs6WV4OOY0M4tTcEYwcrq8FBhjeHhmDs4Gl1vdz5b3gBc8MHeUeSU0A3Iw2n5obyhoZGqLzhzp0h+C9pOGkBZk12vRnOxPV/UkH0h5uEU2NDEEkbTzzlXXytDcHYQZNg5g3U2BBElJaxmJwQZG0IImly1VDtGiyvtjWUxw5emgXRDWMlnJoagr+o1uee4APlyI+h3ONtf3YNuhnL4dTSELy2cP4gp5thaQjSSbsgOsK4NEFraSivFc8BycdQly5RhoYgkoqDBuAo8Y0PQ3kS9lwSRFFhMZzaGYJP62AaHRzpd2FYEknVv5+FcGpmCN5nDQ2XZeT3+EI4NTME1wrxuOEn4DpVh1MzQzmStj6Vr5Ffqe6UWxmCe7Z87PcLkBfm4dTKUB47OMSCqJsx/3oXI0PwstJpyjnKboaRITj+czFM6CVtN/DZa2prWLA3feoyFNefmxpmTcJ+k9xAQDfjxtKwaOwgbS3K68eGhpmTsBXpN32AE5uGhoVjB4NVQzAINjEzLB07SIPOnbh+aGZYPHaQGIJktG1lmD0J+016rZFLHRkZFkzCVqw27OEnlJGN4V35/iSQgz/pBxPDoknYirT/hjsF3RsWTcJ+kxjibk/3hmsVWH04iLoZMwPDwknYivTkGuy6dm4Ixg4QaZ9YXj/u3LB4ErYifSwMDuR0bgjGDjCJITjnPwH//sPcr3ed+SQ9JSv/0oblw7clDMGHVgVpkwq88RVfhfqDbMmNBxXTwQo7cutV8VWohBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCSCf8BeqmMPZEmlpjAAAAAElFTkSuQmCC",
    company: "Default",
    view: "view",
    share: "share",
    tags : ["Default","Default"],
    description : "We are looking for a qualified Front-end developer to join our IT team. You will be responsible for building the ‘client-side’ of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications.If you’re interested in creating a user-friendly environment by writing code and moving forward in your career, then this job is for you. ",
    mode : "Default",
    location : "Nowher",
    days : "0 day ago",
    salary : "0k",
    job_type: "No Time",
    position : "No Position",
    work_type : ""
  };


  const customClassName = jobProps.work_type;

  return (
    <Box sx={{display:"flex"}}> 
    <Sidenav />
    <Box component="main" sx={{ flexGrow: 1, p: 3}}>

    <div className="job-detail-header-div">
      <span className={`${customClassName}_detail  job-detail-heading`}>{jobProps.company}</span>
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
        <h2 className="job-heading">{jobProps.job_title}</h2>
        <div className="row">
          <div className="item">{jobProps.mode}</div>
          <div className="dot"></div>
          <div className="item">{jobProps.location}</div>
          <div className="dot"></div>
          <div className="item">{jobProps.days}</div>
        </div>
      </div>
      
    </div>

    <div className="icons-row">
      <div className="item">
        <img src={salaryImg} alt="salary-img" className='icon-img'/>
        <h4 className="icon-text">Salary</h4>
        <h4 className="icon-value">{jobProps.salary}</h4>
      </div>

      <div class="item" style={{ marginLeft: '10px'  }}>
      <img src={jobTypeImg} alt="salary-img" className='icon-img'/>        
        <h4 className="icon-text">Job Type</h4>
        <h4 className="icon-value">{jobProps.job_type}</h4>
      </div>

      <div class="item" >
      <img src={positionImg} alt="salary-img" className='icon-img'/>
      <h4 className="icon-text">Position</h4>
      <h4 className="icon-value">{jobProps.position}</h4>
      </div>

    </div>

    <div className="job-details-description">
      <h2 className='heading'>Description</h2>
      <p className="content">{jobProps.description}</p>
      
    </div>

    <div className="apply-now-div">
      <button className={`${customClassName}_button  apply-now`}>Apply Now</button>
      {/* <button className='apply-now'>Apply Now</button> */}
    </div>

    </Box>
    </Box>
  )
}

export default JobDetail