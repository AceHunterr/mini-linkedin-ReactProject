import React, { useState } from 'react'
import myImg from "../static/images/img.jpg"
import { useNavigate } from 'react-router-dom';


const HomePageCards = () => {
  const navigate = useNavigate()
  const navigatetointernships = () => {
    navigate('/internships'); 
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
            handleclick : navigatetoJobDetails
        },
        {
            title:'Internship',
            img_src : myImg,
            handleclick : navigatetointernships
        },
        {
            title:'Job Seeker',
            img_src : myImg,
            handleclick : navigatetoJobDetails
        },
        {
            title:'Freelancer',
            img_src : myImg,
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