import './indexnew.css';
import Intro from './Intro';
import Page3 from './Page3';
import Prefs from './Prefs';
import Color from './Color';
import { Link, Router, Route, Routes } from 'react-router-dom';
import { Button, Navbar, Nav } from 'react-bootstrap';
import logomusic from './logomusic.svg';
import laba from './laba.png';
import erji from './erji.png';
import shouyinji from './shouyinji.png';
import people from './people.png';
import yinfu from './yinfu.png';


    function App() {
      return (
        <div>
          <Header />
          <Routes>
              <Route index element={<Home/>} />
              <Route exact path="/page3" element={<Page3/>} />
              <Route exact path="/intro" element={<Intro/>} />
              <Route exact path="/prefs" element={<Prefs/>} />
              <Route exact path="/color" element={<Color/>} />
              <Route path="/prefs" component={Prefs} title='' />
          </Routes>
        </div>
      )
    }

    function Home() {
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
            <Link to={{pathname: '', state: {  // 页面跳转要传递的数据，如下
              data1: {},
              data2: []
                    },
                }}
            ><Button className="btn-back" onClick={()=>{window.location.href="/Prefs"}}><h3>Let's Start</h3></Button></Link>

          <div>
            <footer>
              <h6 className="description"><br />Design and Developed by Shiyuan Chen, User experience enginnering, goldsmiths university of London <br /> Contact email: schen006@gold.ac.uk</h6>
            </footer>
          </div>
        </div>
      )
    }


    function Header() {
      return (
        <header className="top">
        <Navbar />
          <Nav className="nav">
          <img src= {logomusic} className="nav-logo" />
          <h1 className="intro">Exploring Music by Color</h1>
          <ul className="nav-items">
              <li><Link to="/" style={{'text-decoration': 'none','font-weight': 'bolder' }}>Home</Link></li>
              <li><Link to="/intro" style={{'text-decoration': 'none','font-weight': 'bolder' }}>My Making Progress</Link></li>
              <li>Introduction</li>
          </ul>
          </Nav>
        </header>
      )
    }

export default App;
