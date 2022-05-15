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


    const listdata = [
      {id: 1, num: '01', singer: 'James Blunt', name: 'You are beautiful', cover: '{james}', time: '3:29'},
      {id: 2, num: '02', singer: 'Twinbed', name: 'Trouble I am in', cover: '{twinbed}', time: '3:22'},
      {id: 3, num: '03', singer: 'Billie Eilish', name: 'Bad guy', cover: '{billie}', time: '3:09'},
      {id: 4, num: '04', singer: 'James Blunt', name: 'You are beautiful', cover: '{james}', time: '3:99'},
    ];

    export default function List3(props) {
        const list3 = listdata.map(item => {
            return (
                <List3
                    cover={item.cover}
                    num={item.num}
                    time={item.time}
                    singer={item.singer}
                    name={item.name}
                      />
                  )
                })
            return (
            <div className="/">
              {list3}

        <div>
            <img src={laba} className="laba2" alt=""/>
            <img src={erji} className="erji2" alt=""/>
            <img src={shouyinji} className="shouyinji2" alt=""/>
        </div>
        <div>
            <Link to="/List"><Button><h3>Copy it</h3></Button></Link>
            <Link to="/Page3"><Button className="btn-back" id="copy" data-clipboard-target="#content"><h3>Back</h3></Button></Link>

        </div>
        <div>
            <footer>
              <h6 className="description"><br />Design and Developed by Shiyuan Chen, User experience enginnering, Goldsmiths university of London <br /> Contact email: schen006@gold.ac.uk</h6>
            </footer>
        </div>
      </div>
    )
  }
