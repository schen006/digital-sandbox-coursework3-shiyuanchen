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
             <h2> Hello! This is the making process</h2>
             <p>I learned React mainly through a website called <a href="https://scrimba.com/learn/learnreact" target="_blank" className="makeprocess-link">scrimba</a>，which explains a lot about react with some basic case studies. 我看完了前面两个案例以后基本了解了一些react的用法。后来我发现有一些地方我有些听不太懂，于是又在一个叫<a href="https://www.bilibili.com/" target="_blank" className="makeprocess-link">Bilibili</a>的中国短视频网站上找到了另一个系统介绍<a href="https://www.bilibili.com/video/BV1gh411U7JD?p=1" target="_blank" className="makeprocess-link">react</a>知识点的视频。<br />在此期间，我发现关于CSS和JavaScript的知识点还有很多不了解和陌生的地方，于是又在同一个网站找到一些视频深入的学习了很多。
             <Link to="/intro">My project background</Link></p>
             <p>但我在看这些视频之前，做的第一件事情是用Figma把我的界面设计给画了出来。点击这个链接可以看到我的设计稿。<a href="https://www.figma.com/file/3TIz88FuCEfN6pa5rjBAXV/Digital-Sandbox_CW3?node-id=0%3A1" target="_blank" className="makeprocess-link">My figma hi-fi design prototype</a>当然，我只设计了三页，因为作为一个有较高审美的设计师，我发现只要对一些细节进行小小的改动就能复制粘贴去其他的页面了。</p>
             <p>在码代码的过程中我遇到了很多的问题。有一些当时困扰我的过一阵子想通了于是又都解决了。比如说怎么用router、button从一个页面跳到另一个页面；怎么给每一页都加上footer,并且让它不要乱动。但是react对于我来说还是处于入门阶段，我知道了怎么使用props，但是对于Array.prototype.map()某些地方还没有搞清楚。比如它好像不能从我写的数据中加载出来图片，所以我放弃继续对它的探索。有很多像使用API等的方法我还不能够很好的应用。但是很惊喜的一点是我发现我能够HTML和react混着用。一些不知道怎么用react写出来的代码我用HTML的方式也能够成功实现。<br />但是很遗憾，我的这个web app目前还不能真的实现用颜色查找音乐的功能，因为我的JavaScript使用还不太熟练，没法灵活的运用它，但在后期我会继续更新不断优化。</p>


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
