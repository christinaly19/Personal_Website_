import React from 'react';
import './header.css'
import profile_pic from "../../assets/profile-pic.png"


const Header = () => {
    return (
    <div classname = 'header'>
        <div className = 'wrapper'>
            <div className = "header_section_padding typewriter" id = "home"> 
                <div className = "header_container">
                    <h1 className = 'gradient_title'> Hello, I'm Christina Li</h1>
                    <h2 class = "font-italic"> Computer Science & Business Administration Student @ University of Waterloo </h2>
                    <br></br>
                    <p1 className = "slide-in-fwd-center"> 👋 &nbsp; Hey there! Welcome to my website. I am an  <highlight class = 'mark'>  aspiring front-end developer</highlight> of <highlight class ="mark"> 3+ years</highlight> based in Markham, Ontario. I'm a <highlight class = "mark"> CS/BBA</highlight> double degree student currently studying at the University of Waterloo & Wilfred Laurier <handwritten> (class of 2027!)</handwritten>. I have a passion for creating <highlight class = 'mark'>engaging & entertaining</highlight> user experiences with<highlight class = 'mark'>interactive design.</highlight> I'm  also just learning how to work with backend <handwritten> (it's a slow process...)</handwritten> I hope to see you around! :) </p1>
                </div>
            </div>
            <img className ="profile_picture" src= {profile_pic}/> 
        </div>



        <div class="container"> 
            
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
            <span class="text"> Scroll Down For About Me</span>
        </div> 
    

    </div>
    )
}

export default Header