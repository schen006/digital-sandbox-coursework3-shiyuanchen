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
          <h3 className="color-h3">Choose the color you like</h3>
          <div className="colorchoose">
               <tr>
                 <Link to="/Page3"><td className="tdcolor1"></td></Link>
                 <Link to="/Page3"><td className="tdcolor2"></td></Link>
                 <Link to="/Page3"><td className="tdcolor3"></td></Link>
                 <Link to="/Page3"><td className="tdcolor4"></td></Link>
                 <Link to="/Page3"><td className="tdcolor5"></td></Link>
               </tr><br />
               <tr>
                 <Link to="/Page3"><td className="tdcolor6"></td></Link>
                 <Link to="/Page3"><td className="tdcolor7"></td></Link>
                 <Link to="/Page3"><td className="tdcolor8"></td></Link>
                 <Link to="/Page3"><td className="tdcolor9"></td></Link>
                 <Link to="/Page3"><td className="tdcolor10"></td></Link>
               </tr>
          </div>
        </div>
        <div>
            <img src={laba} className="laba2" alt=""/>
            <img src={erji} className="erji2" alt=""/>
            <img src={shouyinji} className="shouyinji2" alt=""/>
        </div>
        <div>
            <Link to="/Prefs"><Button className="btn-back"><h3>Back</h3></Button></Link>
        </div>
        <div>
            <footer>
              <h6 className="description"><br />Design and Developed by Shiyuan Chen, User experience enginnering, Goldsmiths university of London <br /> Contact email: schen006@gold.ac.uk</h6>
            </footer>
          </div>
    </div>
  )
}
