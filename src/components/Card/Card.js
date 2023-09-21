import React from "react";
import './Card.css'

function Card(props){
    return (
            <div className="card-container">
                <div className="card-items-image">
                  <img className="card-image" src={`/carousel-images/${props.imageName}`}></img>
                </div>
                <div className="card-items-title">
                  <span className="special-title">{props.name}</span>
                  <span className="price-tag">${props.price}</span>
                </div>
                <div className="card-items-description">
                  <p className="dish-description">
                    {props.description} 
                  </p>
                </div>
                <div className="card-items-delivery-title">
                  <span className="delivery-title">Order a delivery</span>
                </div>
            </div>
    )
}



export default Card;