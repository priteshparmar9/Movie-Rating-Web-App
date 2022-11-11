import React from "react";
import './App.css';
import err from '../src/images/404.gif';

function Error() {
    return (
        <div style={{
            height: "100%",
            maxHeight: "100%",
            width: "100%",
            backgroundColor: "white",
        }}>

            <div className="container" style={{
                marginLeft: "22rem"
            }}>
                <img src={err} ></img>
            </div>
        </div>
    )
}

export default Error;