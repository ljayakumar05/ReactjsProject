import React from 'react';
import Logo from '../assets/images/logo.svg'

function App() {
  return (
    <div class="text-center">
        {/* <h1 className="mt-0">My First Reactjs websites.</h1> */}
    
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <a class="navbar-brand" href="#"><img src={Logo} style={{height:40}}/></a>
          <button class="navbar-toggler" type="button" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse nav justify-content-end" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Service</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Solution</a>
              </li>
              <li>
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  );
}

export default App;   
