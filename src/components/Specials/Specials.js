import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import './Specials.css'
import { specials } from "../../data";



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
            <div className="weekly-specials-item-cards">
                {specials.map(special => (
                    <div className="individual-card">
                        <Card key={special.id}
                        name={special.name}
                        description={special.description}
                        price={special.price}
                        imageName={special.imageName}>
                        </Card>
                    </div>
                ))}
            </div>
            <div className="weekly-specials-item-button">
               <Button className="online-menu-button" label="Online Menu" onClick={handleButtonClick}></Button>
            </div>
        </section>
    )
}

export default Specials;