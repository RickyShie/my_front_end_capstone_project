import React from "react";
import './Header.css'

function Header(){
    return (
        <header className="header-container">
            <div className="header-item">
              <img className="header-logo-img" src="/images/header_logo.png" alt="logo"/>
            </div>
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
        </header>
    );
}

export default Header;