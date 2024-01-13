import React from 'react';
import aboutimage from '../images/about.png'; 
const About = () => {
    return (
        <div id='about'>
            <div className="about-image">
                <img src={aboutimage} alt="" />
            </div>
            <div className="about-text">
                <h1>MORE ABOUT US</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, minus id et ipsam numquam nesciunt nostrum quisquam accusamus repellendus laudantium facere quasi aperiam excepturi reprehenderit.</p>
                <button>READ MORE</button>
            </div>
        </div>
    );
}

export default About;
