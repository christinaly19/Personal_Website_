import React from 'react';
import './about.css';
import "animate.css/animate.min.css";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import aboutme from "../../assets/about3.png"


const About = () => {
    return (
        <div>
            <div className = 'About_Me' id = 'aboutme'>
                <div className = "blank_section"> 
                <div className = "title">
                    <Zoom>
                    <h3> About Me:</h3>
                    </Zoom>
                </div>
                </div>
                <div className = "facts">
                <Fade>
                <img className ="about_me_pic" src= {aboutme}/> 
                </Fade>
                    <Fade top>
                    <p1> Hey again, thanks for scrolling so far!! 🤗 As a Computer Science & Business Administration student, I love exploring the intersection between technology, design, and business. When I'm not juggling schoolwork and extra-currciulars, you can find me competiting in case studies or hackathons <handwritten> (Hack the North '21 and '22!)</handwritten></p1>
                    <br></br>
                    <br></br>
                    <p1> Outside of coding, I am also an avid reader and writer, and have had some of my short stories published in magazines/anthologies. I also spend a lot of my time playing video games such as League of Legends, Minecraft, and TFT <handwritten> (add me!! ign: spaceturtlee)</handwritten>. During the summer, I also love to play sports like tennis <handwritten> (horribly)</handwritten>, and go camping with my family. </p1>
                    </Fade>
                </div>
                <div className = "blank_section"></div>
        </div>
    </div>
    )
}

export default About