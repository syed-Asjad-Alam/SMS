import React from "react";
import "../Footer/Footer.css"
import fb from "../../Images/Facebook.png"
import ig from "../../Images/ig.png"
import linkedin from "../../Images/linkedin.png"


function Footer () {
    return(
        <div className="footer">
            <h1>Contact Us</h1>
            <div className="icons">
                <img src={fb}></img>
                <img src={ig}></img>
                <img src={linkedin}></img>
            </div>
        </div>
        

    )
}

export default Footer