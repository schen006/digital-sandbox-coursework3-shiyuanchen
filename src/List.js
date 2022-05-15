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
import homage from './image/homage.png';
import hopelessly from './image/hopelessly.png';
import lie from './image/lie.png';
import love from './image/love.png';
import someone from './image/someone.png';
import sia from './image/sia.png';
import piano from './image/piano.svg';
import guitar from './image/guitar.svg';
import headphone from './image/headphone.svg';
import drum from './image/drum.svg';
import unknown from './image/unknown.svg';
import sad from './image/sad.svg';
import happy from './image/happy.svg';
import infor from './image/infor.svg';

export default function List(props) {
  return (
    /* This is the best page, because I have a sense of achievement, I finally managed to use props. */
    <div className="content">
      <div className="list-panel">
        <div className="list-h3">This is an example music list for someone choose blue color and pop music. Two symbols on the right represent instruments used and emotional leanings of songs, which helps people exploring unfamiliar music better.</div>
        <div >
                     <Content
                        cover={twinbed}
                        num='01'
                        time='03:22'
                        singer='Twinbed'
                        name='Trouble I am in'
                        instruments={drum}
                        emotion={sad}/>

                     <Content
                        cover={james}
                        num='02'
                        time='03:29'
                        singer='James Blunt'
                        name='You are beautiful'
                        instruments={guitar}
                        emotion={sad} />

                     <Content
                        cover={billie}
                        num='03'
                        time='03:14'
                        singer='Billie Eilish'
                        name='Bad guy'
                        instruments={unknown}
                        emotion={happy} />

                     <Content
                        cover={homage}
                        num='04'
                        time='02:57'
                        singer='Mild high club'
                        name='Homage'
                        instruments={unknown}
                        emotion={happy} />

                     <Content
                        cover={someone}
                        num='05'
                        time='04:45'
                        singer='Adele'
                        name='Someone like you'
                        instruments={piano}
                        emotion={sad} />

                     <Content
                        cover={love}
                        num='06'
                        time='03:53'
                        singer='Justin Bieber'
                        name='Love yourself'
                        instruments={guitar}
                        emotion={happy} />

                     <Content
                        cover={hopelessly}
                        num='07'
                        time='03:05'
                        singer='Olivia Newton-John'
                        name='Hopelessly devoted to you'
                        instruments={drum}
                        emotion={sad} />

                     <Content
                        cover={lie}
                        num='08'
                        time='04:23'
                        singer='Eminem, Rihanna'
                        name='Love The Way You Lie'
                        instruments={piano}
                        emotion={sad} />

                     <Content
                        cover={sia}
                        num='09'
                        time='03:37'
                        singer='Sia'
                        name='Unstoppable'
                        instruments={unknown}
                        emotion={sad} />

                     <Content
                        cover={james}
                        num='10'
                        time='04:18'
                        singer='James Blunt'
                        name='Goodbye my lover'
                        instruments={piano}
                        emotion={sad} /><br />

                        <Link to="/" style={{"margin-left": "390px"}}> Back to the main page </Link>

          </div>
        </div>
        <div>
            <img src={laba} className="laba3" alt=""/>
            <img src={erji} className="erji3" alt=""/>
            <img src={shouyinji} className="shouyinji3" alt=""/>
        </div>

        <div>
            <footer>
              <h6 className="description"><br />Design and Developed by Shiyuan Chen, User experience enginnering, Goldsmiths university of London <br /> Contact email: schen006@gold.ac.uk</h6>
            </footer>
        </div>
      </div>
    )
  }

/* This is the best page, because I have a sense of achievement, I finally managed to use props. */
  function Content(props) {
    return (
      <div>
        <div className="list" >
            <div className="h-num"><h5>{props.num}</h5></div>
            <div className="h-cover"><img src={props.cover} className="h-pic" alt=""/></div>
            <div className="h-name"><h5>{props.name}</h5></div>
            <div className="h-xian"><h5> | </h5></div>
            <div className="h-singer"><h5>{props.singer}</h5></div>
            <div className="h-instrument"><img src={props.instruments} className="h-pic" alt="This represent the instruments they use"/></div>
            <div className="h-time"><h5>{props.time}</h5></div>
            <div className="h-instrument"><img src={props.emotion} className="h-pic" alt="This represent the emaotion it incline"/></div>

            </div>
        </div>
      )
    }
