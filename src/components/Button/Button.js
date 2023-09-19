import React from "react";
import './Button.css'

function Button(props) {
    return (
        <button className="rounded-button" onClick={props.OnClick}>
            {props.label}
        </button>
    )
}

export default Button;