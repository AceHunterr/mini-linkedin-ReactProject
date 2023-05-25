import React, { useState } from 'react'
import myImg from "../static/images/img.jpg"
import { useNavigate } from 'react-router-dom';
// import { ReactComponent as FreelancerSvg } from '../static/images/freelancer.svg';
// import { ReactComponent as JobSeekerSvg } from '../static/images/job_seeker.svg';
// import { ReactComponent as InternshipSvg } from '../static/images/internship.svg';
// import { ReactComponent as EmployerSvg } from '../static/images/employer.svg';


const HomePageCards = () => {
  const navigate = useNavigate()
  
  const navigatetointernships = () => {
    navigate('/internships'); 
  };
  const navigatetoEmployerRegistration = () => {
    navigate('/employer-registration'); 
  };
  const navigatetofreelancer = () => {
    navigate('/freelancer'); 
  };
  const navigatetoJobDetails = () => {
    navigate('/jobs'); 
  };
  


    const [cards] = useState([
        {
            title:'Employer',
            img_src : myImg,
            // svg : <FreelancerSvg />,
            handleclick : navigatetoEmployerRegistration
        },
        {
            title:'Internships',
            img_src : myImg,
            // svg : <InternshipSvg />,
            handleclick : navigatetointernships
        },
        {
            title:'Job Seeker',
            img_src : myImg,
            // svg : <JobSeekerSvg />,
            handleclick : navigatetoJobDetails
        },
        {
            title:'Freelancer',
            img_src : myImg,
            // svg : <FreelancerSvg />,
            handleclick : navigatetofreelancer
        },

    ])

  return (
    <div>
        <section>
          <div className="home-cards-container">
            <div className="cards" >
              {cards.map((card, i) => ( 
                <div key={i} className="card" onClick={card.handleclick}>
                  <img src={card.img_src} alt="Img" />
                  {card.svg}
                  <h1>{card.title}</h1>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default HomePageCards