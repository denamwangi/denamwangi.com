import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ul>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={70}
              duration= {500}
            > 
              About 
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={70}
              duration= {500}
            > 
              Experience 
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={70}
              duration= {500}
            > 
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="talks"
              spy={true}
              smooth={true}
              offset={70}
              duration= {500}
            > 
              Talks
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="talks"
              spy={true}
              smooth={true}
              offset={70}
              duration= {500}
            > 
              Contact
            </Link>
          </li>
        </ul>

        </header>
        <div className="intro">
          <div className="intro-text">
            <h2 >
              DENA METILI MWANGI
            </h2>
            <hr/>
            <p>Software Engineer</p>
          </div>
        </div>
        <div>
        <h2>About</h2>
        <hr className="body-darker" id="about"/>
        <p>
          I graduated from Duke University with a M.A. in Economics focused on international development. I've spent the last 
          few years working as a Data Analyst for various think tanks in Washington D.C. where my passion for breathing life into 
          data and telling the hidden stories underneath bloomed. Constantly in search of technology to do this better, I started 
          learning Python. I chose to bolster my analytical skills by pursuing a Software Engineering Fellowship at Hackbright 
          Academy where I learned computer science fundamentals and web development. I'm intrigued by data-related problems in 
          tech and excited to use my growing skill set to develop innovative ways to solve them
        </p>


        </div>
      </div>
    );
  }
}

export default App;
