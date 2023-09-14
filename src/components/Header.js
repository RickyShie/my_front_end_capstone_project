import React from "react";

function Header(props){
    return (
        <header>
            <img src="/images/header_logo.png" alt="logo"/>
            {props.children} {/* This will render the <Nav> component */}
        </header>
    );
}

export default Header;