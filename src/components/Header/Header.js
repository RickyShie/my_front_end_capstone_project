import React from "react";
import './Header.css'

function Header(props){
    return (
        <header className="header-container">
            <div className="header-item">
              <img className="header-logo-img" src="/images/header_logo.png" alt="logo"/>
            </div>
            {props.children}
        </header>
    );
}

export default Header;