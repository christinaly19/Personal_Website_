import React from 'react';
import './myprojects.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const MyProjects = () => {
    return (
    <div id = 'myprojects'>
        <div className = "blank"> </div>
            <div className = "title"> 
                <Zoom>
                <h3> My Projects:</h3>
                </Zoom>
                </div>
            
                 <handwritten class = 'description'> <mark> hover over</mark> any project to learn more! </handwritten>

            <div className = "boxwrapper">
                <Fade>
                <div className = "box1">
                    <div className = 'boximg1'>
                    <div className = "overlay1">
                        <handwritten className = "subtitle">TFT Customizable Tierlist </handwritten>
                        <p1 className = 'projectdes'>my first web-dev project! an interactive, fully customizable tierlist that allows users to drag & drop cards from Riot's Teamfight Tactic Game, create their own cards, edit & delete, and download their tierlist. </p1>
                        <a href="https://github.com/christinaly19/TFT-Tierlist"><button type="button" class="projectbutton btn btn-outline-light" >View On Github</button> </a>
                </div>
                </div>
                </div>
                </Fade>

                <Fade>
                <div className = "box2">
                <div className = "overlay2">
                    <handwritten className = "subtitle">Sketchy Studios</handwritten>
                    <p1 className = 'projectdes'> a live, interactive web game with a custom canvas component, unique avatars, and real-time gameplay. built using react bootstrap (frontend) and socket.io, node.js and express (for backend). submitted to hack the north '21!</p1>
                    <div className = "wrap">
                    <a href="https://github.com/christinaly19"><button type="button" class="projectbutton btn btn-outline-light" id = 'btntwo'>View On Github</button></a>
                    <a href = 'https://devpost.com/software/sketchy-studios'><button type="button" class="projectbutton btn btn-outline-light" id = 'btntwo_left'>View On Devpost</button></a>
                    </div>
                </div>
                </div>
                </Fade>

                <Fade>
                <div className = "box3">
                <div className = "overlay3">
                    <handwritten className = "subtitle"> Jobscope</handwritten>
                    <p1 className = "projectdes"> a career-based website designed to connect users with industry mentors, network suggestions, resources and job-search tools. built using figma (prototyping), HTML/CSS, and Javascript. </p1> 
                    <button type="button" class="projectbutton btn btn-outline-light" id = "btnthree">View On Github</button>
                </div>
                </div>      
                </Fade>

                <Fade>
                <div className = "box4">
                <div className = "overlay4">
                    <handwritten className = "subtitle">In Progress...</handwritten>
                </div>
                </div>
                </Fade>
            </div>
    </div>
    )
}

export default MyProjects