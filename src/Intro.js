import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './indexnew.css';
import laba from './laba.png';
import erji from './erji.svg';
import shouyinji from './shouyinji.svg';
import proposal from './proposal.png';



 export default function Intro() {
      return (
        <div className="content">
          <div className="intro-panel">
             <img src={proposal} className="proposal" alt=""/>
             <div style={{'height': ' 200px'}}><Link to="/"><Button style={{'position': 'absolute', 'left': '315px'}}><h3>Back</h3></Button></Link></div>

              <div >

              <footer style={{'background-color': ' #0D0C0C'}}>
                  <h6 className="description"><br />Design and Developed by Shiyuan Chen, User experience enginnering, Goldsmiths university of London <br /> Contact email: schen006@gold.ac.uk</h6>
                </footer>
              </div>
          </div>

            <img src={laba} className="laba2" alt=""/>
            <img src={erji} className="erji2" alt=""/>
            <img src={shouyinji} className="shouyinji2" alt=""/>

        </div>



      );
    }
