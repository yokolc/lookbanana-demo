import React from "react";
import './AboutPage.css'; // Assuming you have some styles for the AboutPage

const AboutPage = () =>{
    return(
        <div className ="max-w-4xl max-auto pax-4 py12">
            <h1 className="about-heading">About Us</h1>
            <p className="text-2xl text-gray-600">We are a team of passionate developers dedicated to creating the best web applications.</p>
        </div>
    );
};

export default AboutPage;