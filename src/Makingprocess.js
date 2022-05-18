import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './indexnew.css';
import laba from './laba.png';
import erji from './erji.svg';
import shouyinji from './shouyinji.svg';
import Intro from './Intro';


 export default function Makingprocess() {
      return (
        <div className="content">
          <div className="intro-panel">
            <div className="intro-panel2">
             <h2 style={{"text-align": "center"}}> Hello! This is the making process</h2>
             <p>This project was a little bit of practice for my graduation design project, although I haven't done the full prototype test and interface  iteration and I started the product development there is something that doesn't fit the logic of the double diamond model, but I would say it's really exciting. My project is mainly concerned with the visualisation of music. For example, if someone sends you a 30-second voice message, you may need to listen patiently for 30 seconds to find out what he said, but when you convert it into a textual information, you may only need three seconds to figure out what does him talking about. This is same applies to the presentation of information on music. I hope that users will not have to listen very long to decide if this music is their cup of tea. To find out more click on<Link to="/intro" className="makeprocess-link">My Project Proposal</Link><br /><br /> I learned React mainly through a website called <a href="https://scrimba.com/learn/learnreact" target="_blank" className="makeprocess-link">scrimba</a>in the early days，which explains a lot about react with some basic case studies. After watching the first two examples, I basically understood some of the uses of react. Then I found some parts that I didn't quite understand, so I found some other videos on a Chinese short video site called <a href="https://www.bilibili.com/" target="_blank" className="makeprocess-link">Bilibili</a> that systematically introduced <a href="https://www.bilibili.com/video/BV1gh411U7JD?p=1" target="_blank" className="makeprocess-link">react</a> knowledge points. During this time, I discovered that CSS is a really important thing. You can see a lot of good interaction in my interface, such as the up and down animation of speakers and radio images, and the skillful use of :hover, which is a result of my exploration of CSS. I really felt a sense of accomplishment during this process, and I was deeply fascinated by code. I have also learned some knowledge of JavaScript, but there are still a lot of unknown and strange places about it. I think I will continue to find some Chinese videos in the future to further study them. Although I probably wouldn't switch to a development job, it's really cool to be able to design interfaces and develop software at the same time.</p><br />
             <p>In the process of watching these videos and learning React, I also slowly drew my interface design with Figma. Click on this link to see my design draft.<a href="https://www.figma.com/file/3TIz88FuCEfN6pa5rjBAXV/Digital-Sandbox_CW3?node-id=0%3A1" target="_blank" className="makeprocess-link">My figma hi-fi design interfaces</a>Due to a lot of homework in April, I only designed three interface pages. I found that by making small changes to a few details I could apply one page to many other pages at the same time.</p><br />
             <p>The whole process of coding I actually didn't go very well. I encountered a lot of problems. There were some that bothered me for a long time, but after a while I figured them out for myself and they were then all solved. For example, how to jump from one page to another using a router or a button; how to add a footer to each page and keep it fixed at the bottom, adjusting its position as the content of the page increases. Since react is still at the introductory stage for me, when I googled some react-related code questions, the answers were too much for me to understand and the code demonstrations they gave made my head spin. At the moment, I know how to use props, but there are certain parts of Array.prototype.map() that I haven't figured out yet. I don't know why it doesn't seem to load the images from the data  I wrote and I've given up on continuing to grope it. On top of that, I don't know how to apply the API, so unfortunately the music app can't be linked to Spotify. One of the things that surprised me about developing this Web app was how well HTML and React could work together. This means that some code I didn't know how to write with React could be implemented using HTML. In the end, my Web app can't really find music by color yet, but I will continue to update and optimize it in the future.</p>


             </div>
             <div style={{'height': ' 200px'}}><Link to="/"><Button style={{'position': 'absolute', 'left': '315px'}}><h3>Back</h3></Button></Link></div>


              <footer className="footer2">
                  <h6 className="description"><br />Design and Developed by Shiyuan Chen, User experience enginnering, Goldsmiths university of London <br /> Contact email: schen006@gold.ac.uk</h6>
                </footer>

          </div>

            <img src={laba} className="laba3" alt=""/>
            <img src={erji} className="erji3" alt=""/>
            <img src={shouyinji} className="shouyinji3" alt=""/>

        </div>



      );
    }
