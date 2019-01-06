import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import logo from './logo.svg';

import './App.css';

library.add(fab, faEnvelope)

class App extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

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
              offset={-80}
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
              offset={-80}
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
              offset={-80}
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
              offset={-80}
              duration= {500}
            > 
              Talks
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
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
            <p>Software Engineer | Data Whisperer</p>
          </div>
        </div>

        <section className="pagepanel white" id="about">
          <h2 >About</h2>
          <hr className="body-darker"/>
          <p className="about-details">
            I am a former research analyst now working as a full stack software engineer on the growth team at Sentry, 
            an open source error monitoring tool. I have a passion for analytics and data in general as a tool to help us 
            get a sense of the world. I like building things that promote what's typically unseen, using tech for good and 
            generally advocating for equity.
          </p>
        </section>

        <section id="experience" className="pagepanel black">
          <h2 >Experience</h2>
          <hr className="body-darker"/>
            <div className="details">
              <div className="detail-card">
                <h4>Sentry</h4>
                <p className="detail-card-title">Software Engineer</p>
                <p>
                  (2017 - Date)
                </p>
                <p>
                  Data-minded software engineer (Python/React) focused on growth initiatives from onboarding and activation
                  through retention and expansion. Championed and helped implement A/B testing using open source tooling.
                  Participated heavily with interviewing/recruitment efforts.
                </p>
              </div>
              <div className="detail-card">                
                <h4>World Bank</h4>
                <p className="detail-card-title">
                  Field Experiments Research Analyst
                </p>
                <p>
                  (2016 - 2017)
                </p>
                <p>
                  Programmed electronic household and market price surveys using ODK based Survey CTO. Managed multiple streams 
                  of country wide data collection and created systems for real time data quality checks including a python 
                  based dashboard.
                </p>
              </div>
              <div className="detail-card">
                <h4>IFPRI</h4>               
                <p className="detail-card-title">
                   Research Analyst
                </p>
                <p>
                  (2013 - 2016)
                </p>
                <p>
                  Cleaned and analyzed multiple rounds of primary data from a health behavior impact evaluation. Designed and 
                  implemented a rigorous data management system. Collaborated with co-investigators to prepare country reports, 
                  stakeholder presentations and research publications
                </p>
              </div>
              
            </div>
        </section>

        <section id="education" className="pagepanel white">
          <h2 >Education</h2>
          <hr className="body-darker"/>
          <div className="details">
            <div className="detail-card">
              <h4>Duke University</h4>
              Masters in Economics
            </div>
            
            <div className="detail-card">
              <h4>Hackbright Academy</h4>
              Software Engineering Certificate
            </div>

            <div className="detail-card">
              <h4>Reforge</h4>
              3 Month course
            </div>
            
          </div>

        </section>

        <section id="talks" className="pagepanel black">
          <h2 >Talks/Panels</h2>
          <hr className="body-darker"/>
          <h4>Upcoming Talks</h4>
          <ul>
            <li>
              Jan 26th: Tech Intersections: Getting Started with A/B Testing on the Cheap using Open Source 
            </li>
            <li>
              Feb 7th: Code in Color: Tips on surviving being "the only"
            </li>
          </ul>
          <h4>
            Previous Panels
          </h4>
            <ul>
              <li>
                Model Expand: 
              </li>
              <li>
                Hackbright Academy: How I got my job 
              </li>
              <li>
                Sentry Scouts: Spooky bugs in prod
              </li>
            </ul>
        </section>

        <section id="contact" className="pagepanel white">
          <h2 >Contact</h2>
          <hr className="body-darker"/>
         
          <div className="logos">
            <ul>
              <li>
                <a href="https://twitter.com/denamwangi" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>
              </li>
              <li>
                <a href="https://github.com/denamwangi" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/dena-metili-mwangi/" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
              </li>
              <li>
                <a href="mailto:dena.mwangi@gmail.com" target="_blank">
                  <FontAwesomeIcon icon="envelope" />
                </a>
              </li>
            </ul>


          </div>
        </section>
      </div>
    );
  }
}

export default App;
