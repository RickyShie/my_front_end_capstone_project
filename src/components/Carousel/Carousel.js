import React from "react";
import { useState } from "react";
import { specials } from "../../data";

console.log(specials);

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  

  function goLeft() {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? specials.length - 1 : prevIndex - 1));
  }

  function goRight() {
    setCurrentIndex(prevIndex => (prevIndex === specials.length - 1 ? 0 : prevIndex + 1));
  }

  const imageUrl = `/carousel-images/${specials[currentIndex].imageName}`;

  return (
    <div className="carousel-container">
      <button onClick={goLeft}>&lt;</button>
      <img src={imageUrl} alt={specials[currentIndex].name} />
      <span className="slide-number">{currentIndex + 1}/{specials.length}</span>
      <button onClick={goRight}>&gt;</button>
    </div>
  );
}


export default Carousel;