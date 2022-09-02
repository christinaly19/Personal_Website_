import './App.css';
import React from 'react'
import {Navbar, Feature, Header, About, MyProjects, MyToolkit, Contact} from './components';

const App = () => {
  return (
    <div className = "App"> 
      <div className = "navbar_gradient" class = 'navbar'>
        <Navbar/>
      </div>
      <Header/>
      <div>
      <div>
      <MyProjects/>
      </div>
      <div>
      <MyToolkit/>
      </div>
      <About/>
      </div>

      <Contact></Contact>
    </div>

    )
  };

  
export default App;
