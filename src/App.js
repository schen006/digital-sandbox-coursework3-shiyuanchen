import './indexnew.css';
import Intro from './Intro';
import Makingprocess from './Makingprocess';
import Page3 from './Page3';
import Prefs from './Prefs';
import Color from './Color';
import List from './List';
import { Link, Router, Route, Routes } from 'react-router-dom';
import { Button, Navbar, Nav, Card } from 'react-bootstrap';
import logomusic from './logomusic.svg';
import laba from './laba.png';
import erji from './erji.png';
import shouyinji from './shouyinji.png';
import people from './people.png';
import yinfu from './yinfu.png';



    export default function App(props) {
      return (
        <div>
          <Header />
        /* I use router to make every page link to each other. Because I found only i add this, buttton could jump successfully. */
          <Routes>
              <Route index element={<Home/>} />
              <Route exact path="/page3" element={<Page3/>} />
              <Route exact path="/makingprocess" element={<Makingprocess/>} />
              <Route exact path="/prefs" element={<Prefs/>} />
              <Route exact path="/color" element={<Color/>} />
              <Route exact path="/intro" element={<Intro/>} />
              <Route exact path="/list" element={<List/>} />
          </Routes>
        </div>
      )
    }

    /* This is the mainpart of the first page, I use it to introduce my app shortly. */
    function Home() {
      return (
        <div className="content">
          <div className="introduce">
             <h1> Hello!</h1><br />
             <div className="intro-para">Andy, this link documents the design and build of my app, please click <Link to="/Intro" className="makeprocess-link">here</Link>.Viverra orci elementum morbi netus nulla viverra augue proin. Sed felis ligula a sociis sem. <br /> <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique et amet vitae est. Viverra orci elementum morbi netus nulla viverra augue proin. Sed felis ligula a sociis sem. <br /> <br /><br /><input type="checkbox" /> I agree to the National Gallery's terms and conditions and privacy policy.</div>
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
          <div>
          /* This is a footer, I use it to display some personal information. and I didn't figure out how to fixed it in the bottom of every page and it will move automaticly with the content decrease or increase at the same time, so every page have a footer.*/
            <footer>
              <h6 className="description"><br />Design and Developed by Shiyuan Chen, User experience enginnering, Goldsmiths university of London <br /> Contact email: schen006@gold.ac.uk</h6>
            </footer>
          </div>
        </div>
      );
    }

        /* This is a header, it have my logo and web name on it as well as some nav links. */
    function Header() {
      return (
        <header className="top">
        <Navbar />
          <Nav className="nav">
          <img src= {logomusic} className="nav-logo" />
          <h1 className="name">Exploring Music by Color</h1>
          <ul className="nav-items">
              <li><Link to="/" className="header">Home</Link></li>
              <li><em>|</em></li>
              <li><Link to="/makingprocess" className="header">Making Process</Link></li>
              <li><em>|</em></li>
              <li><Link to="/intro" className="header">Introduction</Link></li>
          </ul>
          </Nav>
        </header>
      );
    }
