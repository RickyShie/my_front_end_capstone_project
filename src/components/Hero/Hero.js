import React from "react";
import Button from "../Button/Button";

function Hero(){

    function handleButtonClick(){
        console.log('Button has been clicked');
    }

    return (
        <section className="Hero">
            <h1 className="hero-title">Little Lemon</h1>
            <h2 className="hero-subtitle">Chicago</h2>
            <p className="hero-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
            <Button label="Reserve a Table"></Button>

        </section>
    )
}

export default Hero;