import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
import {Routes, Route, Link, Outlet} from "react-router-dom";
import './indexnew.css';
import laba from './laba.png';
import erji from './erji.svg';
import shouyinji from './shouyinji.svg';

 export default function Page3() {
      return (
        <div className="content">
          <div className="introduce">
             <h1> Thank you !</h1>
             <br />
             <br />
             <div className="intro-para">Thank you for your participation. Your help is a great pleasure! for me, and your personal music list will be created soon, please wait a moment. Thank you for your patience. <br /></div>

          </div>
            <img src={laba} className="laba" alt=""/>
            <img src={erji} className="erji" alt=""/>
            <img src={shouyinji} className="shouyinji" alt=""/>
            <Link to="/List"><Button><h3>Submit</h3></Button></Link>
            <Link to="/Color"><Button className="btn-back"><h3>Back</h3></Button></Link>
          <div>
            <footer>
              <h6 className="description"><br />Design and Developed by Shiyuan Chen, User experience enginnering, Goldsmiths university of London <br /> Contact email: schen006@gold.ac.uk</h6>
            </footer>
          </div>

          </div>
      );
    }
