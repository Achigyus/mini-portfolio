import React from "react"
export default function Info() {
    return (
        <div className="container">
            <div>
                <img className="hero-pic" src="../images/Snapchat-1050218661.jpg" />
            </div>
            <div className="content">
                <div className="info-text">
                    <h2>Achi Gyuse Achi</h2>
                    <h3>Frontend Developer</h3>
                    <h4><a href="https://github.com/Achigyus" target="blank" >achigyus.website</a></h4>
                </div>
                <div className="buttons">
                    <a href="mailto:achigyus@gmail.com" target="blank" className="email"><img src="./images/Mail.svg" />Email</a>
                    <a href="https://www.linkedin.com/in/achi-achi-441297153/" target="blank" className="linkedin"><img src="./images/linkedin.svg" /> LinkedIn</a>
                </div>
            </div>
        </div>
    )
}