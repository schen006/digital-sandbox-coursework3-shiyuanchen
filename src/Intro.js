import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './indexnew.css';
import laba from './laba.png';
import erji from './erji.svg';
import shouyinji from './shouyinji.svg';


 export default function Intro() {
      return (
        <div className="content">
          <div className="intro2">
             <h2> Hello!</h2>
             <p><Button className="btn-back" onClick={()=>{window.location.href="https://www.figma.com/file/3TIz88FuCEfN6pa5rjBAXV/Digital-Sandbox_CW3?node-id=0%3A1"}}><h3>My figma hi-fi design prototype</h3></Button></p>

             <p><Button onClick={this.handle}>
                {this.handle=()=>{const w=window.open('about:blank');
                w.location.href="www.baidu.com"}} <h3>design prototype</h3> </Button></p>

             <Button onClick={()=>{window.open( "www.baidu.com", "_blank")}}> <h3>design prototype</h3> </Button>


             <p>这是记录页</p>
             <Link to="/"><Button style={{'position': 'absolute', 'left': '315px'}}><h3>Back</h3></Button></Link>

              <div>

              <footer style={{'background-color': ' #0D0C0C'}}>
                  <h6 className="description"><br />Design and Developed by Shiyuan Chen, User experience enginnering, goldsmiths university of London <br /> Contact email: schen006@gold.ac.uk</h6>
                </footer>
              </div>
          </div>

            <img src={laba} className="laba2" alt=""/>
            <img src={erji} className="erji2" alt=""/>
            <img src={shouyinji} className="shouyinji2" alt=""/>

        </div>



      );
    }
