import React from "react";
import './Nav.css'

function Nav(){
    return (
        <div className="header-item">
            <ul className="nav-container">
                <li className="section-title"><a href="/">Home</a></li>
                <li className="section-title"><a href="/about">About</a></li>
                <li className="section-title"><a href="/menu">Menu</a></li>
                <li className="section-title"><a href="/reservations">Reservations</a></li>
                <li className="section-title"><a href="/orderOnline">Order online</a></li>
                <li className="section-title"><a href="/login">Login</a></li>
            </ul>
        </div>
    )
}

export default Nav;