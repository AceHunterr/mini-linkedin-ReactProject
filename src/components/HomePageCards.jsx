import React, { useState } from 'react'
import myImg from "../static/images/img.jpg"

const HomePageCards = () => {
    const [cards] = useState([
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
    <div>
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
    </div>
  )
}

export default HomePageCards