import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './indexnew.css';
import laba from './laba.png';
import erji from './erji.svg';
import shouyinji from './shouyinji.svg';


 export default function Makingprocess() {
      return (
        <div className="content">
          <div className="intro-panel">
            <div className="intro-panel2">
             <h2> Hello! This is the making process</h2>
             <p>我学习React主要通过一个叫<a href="https://scrimba.com/learn/learnreact" target="_blank" className="makeprocess-link">scrimba</a>的网站，它上面用一些基础的案列讲解了很多react的知识点。后来我发现有一些地方我有些听不太懂，于是又在一个叫<a href="https://www.bilibili.com/" target="_blank" className="makeprocess-link">bilibili</a>的中国短视频网站上找到了另一个系统介绍<a href="https://www.bilibili.com/video/BV1gh411U7JD?p=1" target="_blank" className="makeprocess-link">react</a>知识点的视频。<br />在此期间，我发现关于CSS和JavaScript的知识点还有很多不了解和陌生的地方，于是又在同一个网站找到一些视频深入的学习了很多。<Link to="./intro">My project background</Link></p>



             <p>但我在看这些视频之前，做的第一件事情是用Figma把我的界面设计给画了出来。点击这个链接可以看到我的设计稿。<a href="https://www.figma.com/file/3TIz88FuCEfN6pa5rjBAXV/Digital-Sandbox_CW3?node-id=0%3A1" target="_blank" className="makeprocess-link">My figma hi-fi design prototype</a></p>
             <p>确实，在码代码的过程中我遇到了很多的问题。有一些当时困扰我的过一阵子想通了于是又都解决了。比如说怎么用router、button从一个页面跳到另一个页面；怎么给每一页都加上footer,并且让它不要乱动。但是react对于我来说还是处于入门阶段，有很多像使用API等的方法我还不能够很好的应用。<br />很遗憾，我的这个web app目前还不能真的实现用颜色查找音乐的方法。但在后期我会继续更新不断优化它。</p>


             </div>
             <div style={{'height': ' 200px'}}><Link to="/"><Button style={{'position': 'absolute', 'left': '315px'}}><h3>Back</h3></Button></Link></div>

              <div >
              <footer style={{'background-color': ' #0D0C0C'}}>
                  <h6 className="description"><br />Design and Developed by Shiyuan Chen, User experience enginnering, Goldsmiths university of London <br /> Contact email: schen006@gold.ac.uk</h6>
                </footer>
              </div>
          </div>

            <img src={laba} className="laba2" alt=""/>
            <img src={erji} className="erji2" alt=""/>
            <img src={shouyinji} className="shouyinji2" alt=""/>

        </div>



      );
    }
