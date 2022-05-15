import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Clipboard} from "react-router-dom";
import {Button} from 'react-bootstrap';
import './indexnew.css';
import laba from './laba.png';
import erji from './erji.png';
import shouyinji from './shouyinji.png';
import billie from './image/billie.png';
import james from './image/james.png';
import twinbed from './image/twinbed.png';


export default function List(props) {
  return (
    <div className="content">
        <div className="list-panel">
            <h3 className="list-h3">Music List</h3>
               <ul className="ul-list" >
                 <li className="list" id="content">
                    <div className="list-music" id="content">
                        <h5>01</h5>
                        <img src={james} className="list-pic" alt=""/>
                        <h5>James Blunt</h5>
                        <h5> | </h5>
                        <h5>Your are Beautiful</h5>
                        <h5> | </h5>
                        <h5> 03:29</h5>
                    </div></li>
                    <li className="list" id="content">
                    <div className="list-music" id="content">
                        <h5>02</h5>
                        <img src={billie} className="list-pic" alt=""/>
                        <h5>Billie Eilish</h5>
                        <h5> | </h5>
                        <h5>Bad guy</h5>
                        <h5> | </h5>
                        <h5> 03:14</h5>
                    </div></li>
                    <li className="list" id="content">
                    <div className="list-music" id="content">
                        <h5>03</h5>
                        <img src={twinbed} className="list-pic" alt=""/>
                        <h5>Twinbed</h5>
                        <h5> | </h5>
                        <h5>Trouble I am in</h5>
                        <h5> | </h5>
                        <h5 style={{"text-align": "left"}}> 03:22</h5>
                    </div></li>

               </ul>
        </div>
        <div>
            <img src={laba} className="laba2" alt=""/>
            <img src={erji} className="erji2" alt=""/>
            <img src={shouyinji} className="shouyinji2" alt=""/>
        </div>
        <div>
            <Link to="/"><Button><h3>Finish</h3></Button></Link>
            <Link to="/Page3"><Button className="btn-back" id="copy" data-clipboard-target="#content"><h3>Back</h3></Button></Link>

        </div>
        <div>
            <footer>
              <h6 className="description"><br />Design and Developed by Shiyuan Chen, User experience enginnering, Goldsmiths university of London <br /> Contact email: schen006@gold.ac.uk</h6>
            </footer>
          </div>
    </div>
  )
}
