import React from 'react';
import './contact.css';

const Contact = () => {
    return (
    <div className = "footer_container">
        <div class="column1"> Contact Me:
        <br></br>
        <p1 className = "link"> cyli@uwaterloo.ca </p1>
        <br></br>
        <p1 className = "no_underline"> 647-468-6619</p1>
        </div>

        <div class="column2">Connect With Me:
        <br></br>
        <p1 className = "link"> linkedin.com/in/christinali19 </p1>
        <br></br>
        <p1 className = "link"> github.com/christinaly19 </p1>
        </div>
        
        <div class="column3">Outside the World of Code:
        <br></br>
        
        <button type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.asterlit.org/spring2021/christina-li';
      }}className ="btn btn_published_works">Check out my published works</button>
        <br></br>
        </div>
    </div>
    )
}

export default Contact