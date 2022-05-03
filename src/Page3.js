import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
import {Routes, Route, Link, Outlet} from "react-router-dom";
import './indexnew.css';
import laba from './laba.png';
import erji from './erji.svg';
import shouyinji from './shouyinji.svg';
import people from './people.svg';

 export default function Page3() {
      return (
        <div className="content">
          <div className="introduce">
             <h2> Thank you!</h2>
             <svg width="104" height="87" viewBox="0 0 204 187" fill="none" xmlns="http://www.w3.org/2000/svg" style={{'position': 'absolute'}}>
              <path d="M102 187L87.21 173.548C34.68 125.958 0 94.57 0 56.049C0 24.6616 24.684 0 56.1 0C73.848 0 90.882 8.2545 102 21.2986C113.118 8.2545 130.152 0 147.9 0C179.316 0 204 24.6616 204 56.049C204 94.57 169.32 125.958 116.79 173.65L102 187Z" fill="#FF0000"/>
              </svg>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique et amet vitae est. </p>
          </div>
            <img src={laba} className="laba" alt=""/>
            <img src={erji} className="erji" alt=""/>
            <img src={shouyinji} className="shouyinji" alt=""/>
            <img src={people} className="people" alt=""/>
            <Link to="/"><Button><h3>Submit</h3></Button></Link>
          <div>
            <footer>
              <h6 className="description"><br />Design and Developed by Shiyuan Chen, User experience enginnering, goldsmiths university of London <br /> Contact email: schen006@gold.ac.uk</h6>
            </footer>
          </div>

          </div>
      );
    }
