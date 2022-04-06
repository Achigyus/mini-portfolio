import React from "react"
import Info from "./Info"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"

export default function App() {
    return (
        <div className="main-container">
            <Info />
            <div className="main-text">
                <About />
                <Interests />
            </div>
            <Footer />
        </div>
    )
}