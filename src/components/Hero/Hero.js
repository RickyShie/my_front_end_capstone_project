import React from "react";
import Button from "../Button/Button";
import './Hero.css'

function Hero(){

    function handleButtonClick(){
        console.log('Button has been clicked');
    }

    return (
        <section className="hero-container">
            <div className="hero-items">
                <h1 className="hero-title">Little Lemon</h1>
                <h2 className="hero-subtitle">Chicago</h2>
                <p className="hero-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
            </div>
            
            <div className="hero-items">
              <img className="hero-image" src="/images/hero_image.jpeg"></img>
            </div>
            <div className="hero-items">
                <Button className="reservation-button" label="Reserve a Table" onClick={handleButtonClick}></Button>
            </div>
        </section>
        
    )
}

export default Hero;