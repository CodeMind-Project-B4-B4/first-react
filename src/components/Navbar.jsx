import React from "react"

export default function Navbar(){
    return(
        <div className="navbar">
            <nav>
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="contact">Contact</a></li>
                    <li><a href="gallery">Gallery</a></li>
                    <li><a href="feedback">Feedback</a></li>
                </ul>
            </nav>
        </div>
    )
}