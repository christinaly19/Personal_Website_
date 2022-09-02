import React from 'react';
import './mytoolkit.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import reactlogo from '../../assets/react.png';
import htmllogo from '../../assets/html.png';
import csslogo from '../../assets/css.png';
import javascript from '../../assets/javascript.png';
import pythonlogo from '../../assets/python.png';
import bootstraplogo from '../../assets/bootstrap.svg';
import figmalogo from '../../assets/figma.png';
const MyToolkit = () => {
    return (
        <div id = 'mytoolkit'>
            <div className = "blank"> </div>
            <div className = 'spacing'>
            <Zoom>
                <h3> My Toolkit:</h3>
            </Zoom>
            </div>
            <main className = "grid spacing" >

                <div className = 'frame'>
                <handwritten className ="white"> react</handwritten>
                <img className ="icon" src= {reactlogo}/> 
                </div>


                <div className = 'frame'>
                <handwritten className ="white"> &nbsp; html</handwritten>
                <img className ="icon1" src= {htmllogo}/> 
                </div>

                <div className = 'frame'>
                <handwritten className ="white">&nbsp; css</handwritten>
                <img className ="icon1" src= {csslogo}/> 
                </div>
        
                <div className = 'frame1'>
                <handwritten className ="white">  &nbsp;&nbsp;javascript</handwritten>
                <img className = 'icon2' src ={javascript}/>
                </div>

                <div className = 'frame3'>
                <handwritten className ="white"> &nbsp;python</handwritten>
                <img className = 'icon4' src={pythonlogo}/>
                </div>
            </main>

            <main className = "grid spacing">

            <div className = 'frame1'>
                <handwritten className ="white"> &nbsp;&nbsp;&nbsp; bootstrap</handwritten>
                <img className = 'icon5' src={bootstraplogo}/>
                </div>

                <div className = 'frame'>
                <handwritten className ="white"> figma</handwritten>
                <img className = 'icon' src={figmalogo}/>
                </div>
            </main>
        </div>
    )
}

export default MyToolkit

