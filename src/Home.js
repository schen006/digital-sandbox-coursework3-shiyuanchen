import React from 'react';
import ReactDOM from 'react-dom';
import './indexnew.css';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import laba from './laba.png';
import erji from './erji.svg';
import shouyinji from './shouyinji.svg';
import people from './people.svg';
import yinfu from './yinfu.svg';

export default function Home() {
      return (
        <div className="content">

          <div className="introduce">
             <h1> Hello!</h1>
             <p>Andy, this link documents the design and build of my app, please click <Link to="/Intro" style={{'text-decoration': 'none','color':'#2BEB8F','font-weight': 'bolder' }}>here</Link>.Viverra orci elementum morbi netus nulla viverra augue proin. Sed felis ligula a sociis sem. <br /> <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique et amet vitae est. Viverra orci elementum morbi netus nulla viverra augue proin. Sed felis ligula a sociis sem. <br /> <br /><br /><input type="checkbox" /> I agree to the National Gallery's terms and conditions and privacy policy.</p>

          </div>

            <img src={laba} className="laba" alt=""/>
            <img src={erji} className="erji" alt=""/>
            <img src={shouyinji} className="shouyinji" alt=""/>
            <img src={people} className="people" alt=""/>
            <img src={yinfu} className="yinfu" alt=""/>
            <img src={yinfu} className="yinfu2" alt=""/>
            <img src={yinfu} className="yinfu3" alt=""/>
            <img src={yinfu} className="yinfu4" alt=""/>
            <Link to="/Prefs"><Button className="button"><h3>Let's Start</h3></Button></Link>
          </div>
      );
    }
