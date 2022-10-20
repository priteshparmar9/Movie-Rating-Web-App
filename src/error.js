import React from "react";
import './App.css';
import err from '../src/images/404.gif';

function Error(){
    return(
        <div className="error">
            <img src={err} className="error"></img>
        </div>
    )
}

export default Error;