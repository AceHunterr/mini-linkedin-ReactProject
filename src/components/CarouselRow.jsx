import React from 'react'
import img from "../static/images/img.jpg"
import altimg from "../static/images/logo.png"
import altimg2 from "../static/images/freelancer.svg"

const CarouselRow = () => {
    const cards = [
        { id: 1, imageUrl: img,translate_req :''},
        { id: 2, imageUrl: img ,translate_req :'translate_req'},
        { id: 3, imageUrl: altimg ,translate_req :''},
        { id: 4, imageUrl: altimg2 ,translate_req :'translate_req'}
        // Add more cards as needed
      ]; 
    
      return (
        <div className="carousel-row">
          {cards.map((card) => (
            <div className={`${card.translate_req}  carousel-card`} key={card.id}>
              <img src={card.imageUrl} alt={card.title} />
            </div>
          ))}
        </div>
      );
}

export default CarouselRow