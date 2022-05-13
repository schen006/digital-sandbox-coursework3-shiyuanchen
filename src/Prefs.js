import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
import {Routes, Route, Link, Outlet} from "react-router-dom";
import './indexnew.css';
import laba from './laba.png';
import erji from './erji.svg';
import shouyinji from './shouyinji.svg';

 export default function Prefs() {
  /* const musicname = ["Blues", "Rock&Roll", "Country", "Hip-Hop/Rap", "EDM", "Heavy Metal", "Show Tunes", "Reggae", "Classic", "Indie Rock", "Folk", "Pop", "Classic Rock", "Alternative", "R&B/Soul"] */

      return (
        <div className="content">
          <div className="introduce">
            <div className="love">
                     <svg width="104" height="87" viewBox="0 0 204 187" fill="none" xmlns="http://www.w3.org/2000/svg" style={{'position': 'absolute'}}>
                      <path d="M102 187L87.21 173.548C34.68 125.958 0 94.57 0 56.049C0 24.6616 24.684 0 56.1 0C73.848 0 90.882 8.2545 102 21.2986C113.118 8.2545 130.152 0 147.9 0C179.316 0 204 24.6616 204 56.049C204 94.57 169.32 125.958 116.79 173.65L102 187Z" fill="#FF0000"/>
                      </svg>
                  </div>
             <h3 className="prefs-h3"> Select your favourite music genre</h3>
             <table className="musicgenre">
               <tr>
                 <Link to="/Color"><td className="tdprefs1">Blues</td></Link>
                 <Link to="/Color"><td className="tdprefs2">Rock&Roll</td></Link>
                 <Link to="/Color"><td className="tdprefs3">Country</td></Link>
                 <Link to="/Color"><td className="tdprefs4">Hip-Hop/Rap</td></Link>
                 <Link to="/Color"><td className="tdprefs5">EDM</td></Link>
               </tr>
               <tr>
                 <Link to="/Color"><td className="tdprefs6">Heavy Metal</td></Link>
                 <Link to="/Color"><td className="tdprefs7">Show Tunes</td></Link>
                 <Link to="/Color"><td className="tdprefs8">Reggae</td></Link>
                 <Link to="/Color"><td className="tdprefs9">Classic</td></Link>
                <Link to="/Color"><td className="tdprefs10">Indie Rock</td></Link>
               </tr>
               <tr>
                 <Link to="/Color"><td className="tdprefs11">Folk</td></Link>
                 <Link to="/Color"><td className="tdprefs12">Pop</td></Link>
                 <Link to="/Color"><td className="tdprefs13">Classic Rock</td></Link>
                 <Link to="/Color"><td className="tdprefs14">Alternative</td></Link>
                 <Link to="/Color"><td className="tdprefs15">R&B/Soul</td></Link>
               </tr>
            </table>
          </div>
          <div>
            <img src={laba} className="laba2" alt=""/>
            <img src={erji} className="erji2" alt=""/>
            <img src={shouyinji} className="shouyinji2" alt=""/>
            <Link to="/"><Button className="btn-back"><h3>Back</h3></Button></Link>
          </div>
          <div>
            <footer>
              <h6 className="description"><br />Design and Developed by Shiyuan Chen, User experience enginnering, Goldsmiths university of London <br /> Contact email: schen006@gold.ac.uk</h6>
            </footer>
          </div>
        </div>
      );
    }
