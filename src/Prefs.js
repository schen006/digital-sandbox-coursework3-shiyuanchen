import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
import {Routes, Route, Link, Outlet} from "react-router-dom";
import './indexnew.css';
import laba from './laba.png';
import erji from './erji.svg';
import shouyinji from './shouyinji.svg';

 export default function Prefs() {
      return (
        <div className="content">
          <div className="introduce">
          <h2 style={{'text-align': 'left'}}> Select your favourite music type~</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique et amet vitae est. </p>
             <table style={{}}>
               <tr>
                 <td>选择颜色1</td>
                 <td>选择颜色2</td>
                 <td>选择颜色3</td>
               </tr>
               <tr>
                 <td>选择颜色1</td>
                 <td>选择颜色2</td>
                 <td>选择颜色3</td>
               </tr>
             </table>



          </div>
          <div>
            <img src={laba} className="laba2" alt=""/>
            <img src={erji} className="erji2" alt=""/>
            <img src={shouyinji} className="shouyinji2" alt=""/>
            <Link to="/"><Button className="btn-back"><h3>Back</h3></Button></Link>
            <Link to="/Color"><Button><h3>Next</h3></Button></Link>
          </div>
          <div>
            <footer>
              <h6 className="description"><br />Design and Developed by Shiyuan Chen, User experience enginnering, goldsmiths university of London <br /> Contact email: schen006@gold.ac.uk</h6>
            </footer>
          </div>
        </div>
      );
    }
