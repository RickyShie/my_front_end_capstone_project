import React from "react";
import Button from "../Button/Button";
import './Specials.css'


function Specials(){
    function handleButtonClick(){
        console.log('Button has been clicked');
    }
    return (
    <section className="weekly-specials">
        <div className="weekly-specials-item-title">
            <h1 className="weekly-specials-title">
                This week's specials!
            </h1>
        </div>
        <div className="weekly-specials-item-carousel">
            {/* <h1 className="weekly-specials-title">
                This week's specials!
            </h1> */}
            Create a carousel component here
        </div>
        <div className="weekly-specials-item-button">
        <Button className="online-menu-button" label="Online Menu" onClick={handleButtonClick}></Button>
        </div>
    </section>
    )
}

export default Specials;