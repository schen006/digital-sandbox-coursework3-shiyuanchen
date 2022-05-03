import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';
import './indexnew.css';
import laba from './laba.png';
import erji from './erji.png';
import shouyinji from './shouyinji.png';


export default function Color(props) {
  return (
    <div className="content">
        <div className="introduce">
          <h2 style={{'text-align': 'uk-align-left'}}>Choose the color you like</h2>
          <p style={{'text-align': 'left'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique et amet vitae est. </p>
          <table style={{'position': 'absolute', 'left': '5px'}}>
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
            <Link to="/Page3"><Button><h3>Nextcolr</h3></Button></Link>
            <Link to="/Prefs"><Button className="btn-back"><h3>Back</h3></Button></Link>
        </div>
        <div>
            <footer>
              <h6 className="description"><br />Design and Developed by Shiyuan Chen, User experience enginnering, goldsmiths university of London <br /> Contact email: schen006@gold.ac.uk</h6>
            </footer>
          </div>
    </div>
  )
}
