import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import {useState} from 'react';
import {RiCloseLine, RiMenu3Line} from "react-icons/ri";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div> 
            <div className = "navigation_bar"> 
                <div className = "navigation_links p-2">
                    <img src= {logo} alt = "logo"/>
                    <a className = "m-1"href = "#home"> Home</a> &nbsp;
                    <a className = "m-1" href = "#aboutme"> About Me</a>  &nbsp;
                    <a className = "m-1" href = "#myprojects"> My Projects</a>  &nbsp;
                    <a className = "m-1" href = "#mytoolkit"> My Toolkit</a>  &nbsp;
                    <a className = "m-1" href = "#contactme"> Contact Me</a> &nbsp; 
                        <div className = "resume">
                        <button onClick={(e) => {
      e.preventDefault();
      window.location.href='https://drive.google.com/file/d/1Mn6x9EXbdC5MvpB3NNsPnOl3Gl56XXsM/view?usp=sharing';
      }}type = "button" className='btn_resume'> My Resume</button>
                        </div>
                </div>
        </div>
        <div className="navbar_menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar_menu_container scale-up-center">
          <div className="navbar_menu_container_links">
            <p><a href="#home">Home</a></p>
            <p><a href="#aboutme">About Me</a></p>
            <p><a href="#myprojects"> My Projects </a></p>
            <p><a href="#myjourney">My Journey</a></p>
            <p><a href="#contactme">Contact Me</a></p>
            </div>
        </div>
            )}
                </div>
        </div>

    )}
export default Navbar